import org.apache.hadoop.conf.Configuration;
import org.apache.hadoop.fs.Path;
import org.apache.hadoop.io.IntWritable;
import org.apache.hadoop.io.LongWritable;
import org.apache.hadoop.io.MapWritable;
import org.apache.hadoop.io.Text;
import org.apache.hadoop.mapreduce.Job;
import org.apache.hadoop.mapreduce.Mapper;
import org.apache.hadoop.mapreduce.Reducer;
import org.apache.hadoop.mapreduce.lib.input.FileInputFormat;
import org.apache.hadoop.mapreduce.lib.output.FileOutputFormat;
import org.apache.hadoop.util.GenericOptionsParser;

import java.io.IOException;
import java.util.HashMap;

public class GameSimilarity {

    // Map Class
    public static class SimilarityMap
            extends Mapper<LongWritable, Text, Text, Text> {

        @Override
        public void map(LongWritable key, Text value, Context context)
                throws IOException, InterruptedException {
            String dataLine = value.toString();
            // Hadoop output parsing
            String[] dataLineElements = dataLine.split("\t", 2);

            String[] gameIds = dataLineElements[1].split(" ");
            
            // GameSimilarity mapping
            for (String A: gameIds) {
                for (String B: gameIds) {
                    if (!A.equals(B)) {
                        context.write(new Text(A), new Text(B));
                    }
                }
            }
        }
    }

    // Reduce Class
    public static class SimilarityReduce
            extends Reducer<Text, Text, Text, MapWritable> {

        @Override
        public void reduce(Text key, Iterable<Text> values, Context context)
                throws IOException, InterruptedException {
            HashMap<String, Integer> gameCount = new HashMap<>();
            for (Text value: values) {
                String str = value.toString();
                if (gameCount.containsKey(str)) {
                    gameCount.replace(str, gameCount.get(str) + 1);
                }
                else {
                    gameCount.put(str, 1);
                }
            }
            MapWritable resultMap = new MapWritable();
            for (HashMap.Entry<String, Integer> pair : gameCount.entrySet()) {
                resultMap.put(new Text(pair.getKey()), new IntWritable(pair.getValue()));
            }

            context.write(key, resultMap);
        }
    }

    // Job Setting
    public static void main(String[] args) throws Exception{
        Configuration conf = new Configuration();
        String[] otherArgs = new GenericOptionsParser(conf,args).getRemainingArgs();
        if (otherArgs.length != 2) {
            System.err.println("Usage: GameLibrary <input path> <output path>");
            System.exit(2);
        }

        Job job = new Job(conf, "GameSimilarity");
        job.setJarByClass(GameSimilarity.class);

        // let hadoop know my map and reduce classes
        job.setMapperClass(GameSimilarity.SimilarityMap.class);
        job.setReducerClass(GameSimilarity.SimilarityReduce.class);

        FileInputFormat.addInputPath(job, new Path(otherArgs[0]));
        FileOutputFormat.setOutputPath(job, new Path(otherArgs[1]));

        job.setMapOutputKeyClass(Text.class);
        job.setMapOutputValueClass(Text.class);

        job.setOutputKeyClass(Text.class);
        job.setOutputValueClass(MapWritable.class);

        System.exit(job.waitForCompletion(true) ? 0 : 1);
    }
}
