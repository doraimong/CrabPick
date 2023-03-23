package com.e107.backend.geChu.service;

import com.e107.backend.geChu.domain.entity.News;
import com.e107.backend.geChu.domain.repository.NewsRepository;
import com.e107.backend.geChu.dto.response.NewsRespDto;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;

@Service
@Transactional
@RequiredArgsConstructor
@Slf4j
public class NewsServiceImpl implements NewsService{
    private final NewsRepository newsRepository;
    @Override
    public List<NewsRespDto> getNews() {
        List<News> list = newsRepository.findAll();
        ArrayList<NewsRespDto> resp = new ArrayList<>();
        for (News n : list){
            resp.add(NewsRespDto.of(n));
        }
        return resp;
    }
}
