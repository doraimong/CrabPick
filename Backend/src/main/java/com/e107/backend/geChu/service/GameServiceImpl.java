package com.e107.backend.geChu.service;

import com.e107.backend.geChu.domain.entity.Game;
import com.e107.backend.geChu.domain.entity.Similarity;
import com.e107.backend.geChu.domain.repository.GameRepository;
import com.e107.backend.geChu.domain.repository.SimilarityRepository;
import com.e107.backend.geChu.dto.request.MyGameReqDto;
import com.e107.backend.geChu.dto.response.GameDetailRespDto;
import com.e107.backend.geChu.dto.response.GameListRespDto;
import com.e107.backend.global.common.CommonException;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Service
@Transactional
@RequiredArgsConstructor
@Slf4j
public class GameServiceImpl implements GameService {
    private final GameRepository gameRepository;
    private final SimilarityRepository similarityRepository;

    @Override
    public GameDetailRespDto findGameByAppId(Long gameId) {
        Game game = gameRepository.findByAppId(gameId);
        if (game == null) {
            throw new CommonException(2, "Game객체가 존재하지 않습니다.", HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return GameDetailRespDto.of(game);
    }


    @Override
    public List<GameListRespDto> findAllGame(Pageable pageable) {
        return gameRepository.findAll(pageable).stream().map(GameListRespDto::of).collect(Collectors.toList());
    }

    @Override
    public Map<String, Object> findGameByName(String name, Pageable pageable) {
        Page<Game> p = gameRepository.findByNameContaining(name, pageable);
        Map<String, Object> map = new HashMap<>();
        map.put("pages", p.getTotalPages());
        map.put("data", p.stream().map(GameListRespDto::of).collect(Collectors.toList()));
        return map;
    }

    @Override
    public List<GameListRespDto> findRecommendByGame(Long gameId) {
        Similarity s = similarityRepository.findById(gameId)
                .orElseThrow(() -> new CommonException(2, "Game객체가 존재하지 않습니다.", HttpStatus.INTERNAL_SERVER_ERROR));
        String similarity = s.getSimilarity();
        String[] arr = similarity.split(" ");
        ArrayList<GameListRespDto> list = new ArrayList<>();
        for (int i = 0; i < arr.length; i++) {
            String[] item = arr[i].split(":");
            Long id = Long.parseLong(item[0]);
            Game g = gameRepository.findByAppId(id);
            if (g == null) {
                throw new CommonException(2, "Game객체가 존재하지 않습니다.", HttpStatus.INTERNAL_SERVER_ERROR);
            }
            list.add(GameListRespDto.of(g));

        }
        log.info("similarity : " + similarity);

        return list;
    }

    @Override
    public List<GameListRespDto> findRecommendByUser(Long userId, List<MyGameReqDto> dto) {
        //# {(유져 보유 게임 id) : {playtime: 5, data: {1:3.2, 2:11, 3:45}}, (유져 보유 게임 id) : {playtime: (플레이시간) 형태의 딕셔너리 생각중}
        Map<Long, Map<String, Object>> userGame = new HashMap<>();
        for (MyGameReqDto d : dto) {
            Similarity s = similarityRepository.findById(d.getId())
                    .orElseThrow(() -> new CommonException(2, "Game객체가 존재하지 않습니다.", HttpStatus.INTERNAL_SERVER_ERROR));
            if (s == null) continue;
            String similarity = s.getSimilarity();
            String[] arr = similarity.split(" ");
            Map<Long, Double> data = new HashMap<>();
            for (int i = 0; i < arr.length; i++) {
                String[] item = arr[i].split(":");
                Long id = Long.parseLong(item[0]);
                Double val = Double.parseDouble(item[1]);
                data.put(id, val);
            }
            Map<String, Object> map = new HashMap<>();
            map.put("playtime", d.getPlayTime());
            map.put("data", data);

            userGame.put(d.getId(), map);
        }


        log.info("userGame : " + userGame);
        return null;
    }


    @Override
    public Map<Long, Double> listOfRecommend(Map<Long, Map<String, Object>> map) {
        Map<Long, Double> totalDict = new HashMap<>();
        for (Map<String, Object> m : map.values()) {
            int playtime = (int) m.get("playtime");
            if (playtime < 120) continue;
            int playtimeFactor = calcPlaytimeFactor(playtime);
            Map<Long, Double> data = (Map<Long, Double>) m.get("data");
            for (Map.Entry<Long, Double> entry : data.entrySet()) {
                Long key = entry.getKey();
                Double value = entry.getValue();
                if (totalDict.containsKey(key)) {
                    totalDict.put(key, totalDict.get(key) + value * playtimeFactor);
                } else {
                    totalDict.put(key, value * playtimeFactor);
                }
            }
        }
        return 
    }

    @Override
    public int calcPlaytimeFactor(int playtime) {
        if (playtime < 200) return 1;
        return (int) (log2(playtime / 6000.0f)) + 1;
    }

    @Override
    public double log2(float x) {
        return Math.log(x) / Math.log(2);
    }
}



