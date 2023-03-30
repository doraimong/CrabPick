insert into member values (1, 'email', 'name', 'steamNickname', 'steamToken')
insert into member_friends values(1, 'a')
insert into member_friends values(1, 'b')
insert into member_friends values(1, 'c')

--                      ID  AGE_LIMIT  AVG_PLAYTIME  DEVELOPER 	GENRE  MOOD  NAME  RELEASE  STEAM_LINK  WORD_CLOUD
insert into game values (1, 19, 1.5, 'developer', 'genre', 'mood', 'name', '2012-01-01','steamlingk','wordcloud')
insert into bookmark values (1, 1, 1)
insert into rating values (1, 3, 1, 1)
insert into steam_library values (1, 1, 1)
insert into game_comment values (1,'내용', '2013-08-05 18:19:03', 1, 1)

--                 ID  AUTHOR_ID    CONTENT  IS_RECOMMEND  LANGUAGE  PLAYTIME_ALL PLAYTIME_AT_REVIEW  VOTES_UP
insert into review values (1, 1, 'CONTNET', true, 'korean', 123.5, 5.5, 33)


-- jwt test user - 수정해야
-- insert into "user" (username, password, nickname, activated) values ('admin', '$2a$08$lDnHPz7eUkSi6ao14Twuau08mzhWrL4kyZGGU5xfiGALO/Vxd5DOi', 'admin', 1);
-- insert into "user" (username, password, nickname, activated) values ('user', '$2a$08$UkVvwpULis18S19S5pZFn.YHPZt3oaqHZnDwqbCW9pft6uFtkXKDC', 'user', 1);
--
-- insert into authority (authority_name) values ('ROLE_USER');
-- insert into authority (authority_name) values ('ROLE_ADMIN');
--
-- insert into user_authority (user_id, authority_name) values (1, 'ROLE_USER');
-- insert into user_authority (user_id, authority_name) values (1, 'ROLE_ADMIN');
-- insert into user_authority (user_id, authority_name) values (2, 'ROLE_USER');
--