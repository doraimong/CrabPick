package com.e107.backend.geChu.service;

import com.e107.backend.geChu.domain.entity.Comment;
import com.e107.backend.geChu.domain.repository.CommentRepository;
import com.e107.backend.geChu.dto.response.CommentRespDto;
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
public class CommentServiceImpl implements CommentService{

    private final CommentRepository commentRepository;

    @Override
    public List<CommentRespDto> findCommentByGameId(Long gameId) {
        List<CommentRespDto> list = new ArrayList<>();
        List<Comment> resp = commentRepository.findByGameId(gameId);
        for (Comment c : resp) {
            log.info(c.getContent());
            list.add(CommentRespDto.of(c));
        }
        return list;
    }

}
