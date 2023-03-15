insert into member values (1, 'email', 'name', 'steamNickname', 'steamToken')
insert into member values (2, 'email2', 'name2', 'steamNickname2', 'steamToken')
insert into member values (3, 'email2', 'name2', 'steamNickname2', 'steamToken')
insert into friend values(1, 'bb', 2)
insert into friend values(2, 'ccc', 1)
insert into friend values(3, 'ddd', 1)

--                      ID  AGE_LIMIT  AVG_PLAYTIME  DEVELOPER 	GENRE  MOOD  NAME  RELEASE  STEAM_LINK  WORD_CLOUD
insert into game values (1, 19, 1.5, 'developer', 'genre', 'imgurl', 'mood', 'name', '2012-01-01','reviewlink', 'steamlingk','trailerurl', 'wordcloud')
insert into game values (2, 15, 11, 'developer2', 'genre2', 'imgurl2', 'mood2', 'name2', '2015-01-01' ,'reviewlink2','steamlingk2', 'trailerurl2','wordcloud2')
insert into game values (3, 7, 5, 'developer3', 'genre3', 'imgurl3', 'mood3', 'name3', '2012-01-01' ,'reviewlink3', 'steamlink3', 'trailerurl3','wordcloud3')
insert into bookmark values (1, 1, 1)
insert into steam_library values (1, 1, 'url1',1, 'name', 1,3,1)
insert into steam_library values (2, 2, 'url2',3, 'name2',1,1,1)
insert into steam_library values (3, 3, 'url3', 7,'name3',1,2,1)
insert into steam_library values (4, 3, 'url3', 7,'name3',1,2,2)
insert into steam_library values (5, 2, 'url3', 2,'name3',1,1,2)
insert into steam_library values (6, 1, 'url3', 5,'name3',1,1,3)

insert into comment values (1,'내용', '2013-08-05 18:19:03', 2, 1)
insert into comment values (2,'내용2', '2013-08-05 20:19:03', 1, 1)
insert into comment values (3,'내용3', '2013-08-05 20:19:03', 1, 1)
insert into comment values (4,'내용4', '2013-08-05 20:19:03', 1, 1)
insert into comment values (5,'내용555', '2013-08-05 20:19:03', 2, 2)
insert into comment values (6,'내용6', '2013-08-05 20:19:03', 1, 1)

--                 ID  AUTHOR_ID    CONTENT  IS_RECOMMEND  LANGUAGE  PLAYTIME_ALL PLAYTIME_AT_REVIEW  VOTES_UP
insert into review values (1, 1, 'CONTNET', true, 'korean', 123.5, 5.5, 33)
