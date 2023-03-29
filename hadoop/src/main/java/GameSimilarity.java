import org.apache.hadoop.conf.Configuration;
import org.apache.hadoop.fs.Path;
import org.apache.hadoop.io.*;
import org.apache.hadoop.mapreduce.Job;
import org.apache.hadoop.mapreduce.Mapper;
import org.apache.hadoop.mapreduce.Reducer;
import org.apache.hadoop.mapreduce.lib.input.FileInputFormat;
import org.apache.hadoop.mapreduce.lib.output.FileOutputFormat;
import org.apache.hadoop.util.GenericOptionsParser;

import java.io.IOException;
import java.util.*;
/*
Algorithm -> count Number of User who reviewed A game and B game
then make data like under example

A : {B: 10, C: 5}

then we can understand A:B is more similar that A:C
*/
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

            String[] gameIds = dataLineElements[1].split("\t");

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
            extends Reducer<Text, Text, Text, SortedMapWritable<IntWritable>> {

        @Override
        public void reduce(Text key, Iterable<Text> values, Context context)
                throws IOException, InterruptedException {
            // steamGameID : (how many user reviewed both game)
            HashMap<String, Integer> gameCount = new HashMap<>();
            for (Text value: values) {
                String str = value.toString();
                if (gameCount.containsKey(str)) {
                    gameCount.replace(str, gameCount.get(str) -1);
                }
                else {
                    gameCount.put(str, -1);
                }
            }
            List<Map.Entry<String, Integer>> nlist = new ArrayList<>(gameCount.entrySet());

            if (gameCount.size() > 0) {
                HashMap<Integer, String> tempMap = new HashMap<>();
                for (HashMap.Entry<String, Integer> pair : nlist) {
                    int tempKey = -pair.getValue();
                    String tempValue = pair.getKey();
                    if (tempMap.containsKey(tempKey)) {
                        tempMap.replace(tempKey, tempMap.get(tempKey) + " " + tempValue);
                    }
                    else {
                        tempMap.put(tempKey, tempValue);
                    }
                }
                // reduce output forming
                List<Map.Entry<Integer, String>> resultList = new ArrayList<>(tempMap.entrySet());
                SortedMapWritable<IntWritable> resultMap = new SortedMapWritable<>();

                for (HashMap.Entry<Integer, String> pair : resultList) {
                    resultMap.put(new IntWritable(pair.getKey()), new Text(pair.getValue()));
                }
                context.write(key, resultMap);
            }



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
        // set multi reduce task
        job.setNumReduceTasks(5);
        // file input output setting
        FileInputFormat.addInputPath(job, new Path(otherArgs[0]));
        FileOutputFormat.setOutputPath(job, new Path(otherArgs[1]));
        // mapper class input output setting
        job.setMapOutputKeyClass(Text.class);
        job.setMapOutputValueClass(Text.class);
        // job output data setting
        job.setOutputKeyClass(Text.class);
        job.setOutputValueClass(SortedMapWritable.class);

        System.exit(job.waitForCompletion(true) ? 0 : 1);
    }
}
