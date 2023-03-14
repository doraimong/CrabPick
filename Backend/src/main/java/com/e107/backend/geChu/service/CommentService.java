package com.e107.backend.geChu.service;

import com.e107.backend.geChu.dto.response.CommentRespDto;

import java.util.List;

public interface CommentService {
     List<CommentRespDto> findCommentByGameId(Long gameId);
}
