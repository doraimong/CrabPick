package com.e107.backend.geChu.service;

import com.e107.backend.geChu.dto.response.NewsRespDto;

import java.util.List;

public interface NewsService {
    List<NewsRespDto> getNews();
}
