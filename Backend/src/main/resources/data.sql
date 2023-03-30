insert into member values (1, 'email', 'name', 'steamNickname', 'steamToken'),(2, 'email2', 'name2', 'steamNickname2', 'steamToken2'),(3, 'email3', 'name3', 'steamNickname3', 'steamToken3')
insert into friend values(1, 'bb', 2),(2, 'ccc', 1),(3, 'ddd', 1)
insert into steam_library values (1, 1, 'url1',1, 'name', 1,3,1),(2, 2, 'url2',3, 'name2',1,1,1),(3, 3, 'url3', 7,'name3',1,2,1),(4, 3, 'url3', 7,'name3',1,2,2),(5, 2, 'url3', 2,'name3',1,1,2),(6, 1, 'url3', 5,'name3',1,1,3)
insert into comment values (1,'내용', '2013-08-05 18:19:03', 2, 1),(2,'내용2', '2013-08-05 20:19:03', 1, 1),(3,'내용3', '2013-08-05 20:19:03', 1, 1),(4,'내용4', '2013-08-05 20:19:03', 1, 1),(5,'내용555', '2013-08-05 20:19:03', 2, 2),(6,'내용6', '2013-08-05 20:19:03', 1, 1)
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