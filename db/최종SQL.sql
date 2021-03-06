-- 테이블 순서는 관계를 고려하여 한 번에 실행해도 에러가 발생하지 않게 정렬되었습니다.

-- t_sce Table Create SQL
CREATE TABLE t_sce
(
    `sce_num`   INT UNSIGNED    NOT NULL    AUTO_INCREMENT COMMENT '시나리오 번호', 
    `sce_name`  VARCHAR(60)     NULL        COMMENT '시나리오 이름', 
    `sce_exp`   VARCHAR(300)    NULL        COMMENT '시나리오 설명', 
     PRIMARY KEY (sce_num)
);


-- t_game Table Create SQL
CREATE TABLE t_game
(
    `game_num`   INT UNSIGNED    NOT NULL    AUTO_INCREMENT COMMENT '게임 번호', 
    `game_kind`  INT             NULL        COMMENT '게임 종류', 
    `game_name`  VARCHAR(60)     NULL        COMMENT '게임 이름', 
    `sce_num`    INT UNSIGNED    NULL        COMMENT '시나리오 번호', 
     PRIMARY KEY (game_num)
);

ALTER TABLE t_game
    ADD CONSTRAINT FK_t_game_sce_num_t_sce_sce_num FOREIGN KEY (sce_num)
        REFERENCES t_sce (sce_num) ON DELETE RESTRICT ON UPDATE RESTRICT;


-- t_user Table Create SQL
CREATE TABLE t_user
(
    `user_id`        INT UNSIGNED    NOT NULL    AUTO_INCREMENT COMMENT '유저 아이디', 
    `user_pw`        VARCHAR(30)     NULL        COMMENT '유저 비밀번호', 
    `user_phone`     VARCHAR(30)     NULL        COMMENT '유저 연락처', 
    `user_birth`     VARCHAR(30)     NULL        COMMENT '유저 생년월일', 
    `user_adress`    VARCHAR(60)     NULL        COMMENT '유저 주소', 
    `user_email`     VARCHAR(300)    NULL        COMMENT '유저 이메일', 
    `user_joindate`  VARCHAR(30)     NULL        COMMENT '유저 가입일자', 
    `user_admin`     INT             NULL        COMMENT '유저 관리자', 
     PRIMARY KEY (user_id)
);

ALTER TABLE t_user COMMENT '유저 테이블';


-- t_club Table Create SQL
CREATE TABLE t_club
(
    `club_num`   INT UNSIGNED    NOT NULL    AUTO_INCREMENT COMMENT '동아리 번호', 
    `club_name`  VARCHAR(60)     NULL        COMMENT '동아리 이름', 
     PRIMARY KEY (club_num)
);

ALTER TABLE t_club COMMENT '동아리';


-- t_digimon Table Create SQL
CREATE TABLE t_digimon
(
    `digimon_num`     INT UNSIGNED    NOT NULL    AUTO_INCREMENT COMMENT '시나리오 번호', 
    `digimon_brave`   INT             NULL        COMMENT '시나리오 이름', 
    `digimon_friend`  INT             NULL        COMMENT '디지몬 우정', 
    `digimon_love`    INT             NULL        COMMENT '디지몬 사랑', 
    `digimon_kn`      INT             NULL        COMMENT '디지몬 지식', 
    `digimon_pure`    INT             NULL        COMMENT '디지몬 순수', 
    `digimon_sin`     INT             NULL        COMMENT '디지몬 성실', 
    `digimon_hope`    INT             NULL        COMMENT '디지몬 희망', 
    `digimon_light`   INT             NULL        COMMENT '디지몬 빛', 
    `user_id`         INT UNSIGNED    NULL        COMMENT '유저 아이디', 
    `club_num`        INT UNSIGNED    NULL        COMMENT '동아리 번호', 
     PRIMARY KEY (digimon_num)
);

ALTER TABLE t_digimon
    ADD CONSTRAINT FK_t_digimon_user_id_t_user_user_id FOREIGN KEY (user_id)
        REFERENCES t_user (user_id) ON DELETE RESTRICT ON UPDATE RESTRICT;

ALTER TABLE t_digimon
    ADD CONSTRAINT FK_t_digimon_club_num_t_club_club_num FOREIGN KEY (club_num)
        REFERENCES t_club (club_num) ON DELETE RESTRICT ON UPDATE RESTRICT;


-- t_game_text Table Create SQL
CREATE TABLE t_game_text
(
    `game_text_num`  INT UNSIGNED    NOT NULL    AUTO_INCREMENT COMMENT '게임 번호', 
    `game_num`       INT UNSIGNED    NULL        COMMENT '게임 종류', 
    `game_text_t`    TEXT            NULL        COMMENT '게임 이름', 
     PRIMARY KEY (game_text_num)
);

ALTER TABLE t_game_text
    ADD CONSTRAINT FK_t_game_text_game_num_t_game_game_num FOREIGN KEY (game_num)
        REFERENCES t_game (game_num) ON DELETE RESTRICT ON UPDATE RESTRICT;


-- t_stat2 Table Create SQL
CREATE TABLE t_stat2
(
    `stat2_num`   INT UNSIGNED    NOT NULL    AUTO_INCREMENT COMMENT '시나리오 번호', 
    `stat2_inf`   INT             NULL        COMMENT '시나리오 이름', 
    `stat2_wits`  INT             NULL        COMMENT '육각형2 순발력', 
    `stat2_mmz`   INT             NULL        COMMENT '육각형2 암기력', 
    `stat2_ins`   INT             NULL        COMMENT '육각형2 통찰력', 
    `stat2_obs`   INT             NULL        COMMENT '육각형2 관찰력', 
    `stat2_lit`   INT             NULL        COMMENT '육각형2 문해력', 
    `user_id`     INT UNSIGNED    NULL        COMMENT '유저 아이디', 
    `club_num`    INT UNSIGNED    NULL        COMMENT '동아리 번호', 
     PRIMARY KEY (stat2_num)
);

ALTER TABLE t_stat2
    ADD CONSTRAINT FK_t_stat2_user_id_t_user_user_id FOREIGN KEY (user_id)
        REFERENCES t_user (user_id) ON DELETE RESTRICT ON UPDATE RESTRICT;

ALTER TABLE t_stat2
    ADD CONSTRAINT FK_t_stat2_club_num_t_club_club_num FOREIGN KEY (club_num)
        REFERENCES t_club (club_num) ON DELETE RESTRICT ON UPDATE RESTRICT;


-- t_stat1 Table Create SQL
CREATE TABLE t_stat1
(
    `stat1_num`     INT UNSIGNED    NOT NULL    AUTO_INCREMENT COMMENT '시나리오 번호', 
    `stat1_real`    INT             NULL        COMMENT '시나리오 이름', 
    `stat1_res`     INT             NULL        COMMENT '육각형1 탐구형', 
    `stat1_art`     INT             NULL        COMMENT '육각형1 예술형', 
    `stat1_soc`     INT             NULL        COMMENT '육각형1 사회형', 
    `stat1_ent`     INT             NULL        COMMENT '육각형1 기업형', 
    `stat1_custom`  INT             NULL        COMMENT '육각형1 관습형', 
    `user_id`       INT UNSIGNED    NULL        COMMENT '유저 아이디', 
    `club_num`      INT UNSIGNED    NULL        COMMENT '동아리 번호', 
     PRIMARY KEY (stat1_num)
);

ALTER TABLE t_stat1
    ADD CONSTRAINT FK_t_stat1_user_id_t_user_user_id FOREIGN KEY (user_id)
        REFERENCES t_user (user_id) ON DELETE RESTRICT ON UPDATE RESTRICT;

ALTER TABLE t_stat1
    ADD CONSTRAINT FK_t_stat1_club_num_t_club_club_num FOREIGN KEY (club_num)
        REFERENCES t_club (club_num) ON DELETE RESTRICT ON UPDATE RESTRICT;


-- t_result Table Create SQL
CREATE TABLE t_result
(
    `result_num`    INT UNSIGNED    NOT NULL    AUTO_INCREMENT COMMENT '시나리오 번호', 
    `result_score`  INT             NULL        COMMENT '시나리오 이름', 
    `user_id`       INT UNSIGNED    NULL        COMMENT '유저 아이디', 
    `sce_num`       INT UNSIGNED    NULL        COMMENT '시나리오 번호', 
    `game_num`      INT UNSIGNED    NULL        COMMENT '게임 번호', 
     PRIMARY KEY (result_num)
);

ALTER TABLE t_result
    ADD CONSTRAINT FK_t_result_user_id_t_user_user_id FOREIGN KEY (user_id)
        REFERENCES t_user (user_id) ON DELETE RESTRICT ON UPDATE RESTRICT;

ALTER TABLE t_result
    ADD CONSTRAINT FK_t_result_sce_num_t_sce_sce_num FOREIGN KEY (sce_num)
        REFERENCES t_sce (sce_num) ON DELETE RESTRICT ON UPDATE RESTRICT;

ALTER TABLE t_result
    ADD CONSTRAINT FK_t_result_game_num_t_game_game_num FOREIGN KEY (game_num)
        REFERENCES t_game (game_num) ON DELETE RESTRICT ON UPDATE RESTRICT;


-- t_img Table Create SQL
CREATE TABLE t_img
(
    `img_num`   INT UNSIGNED    NOT NULL    AUTO_INCREMENT COMMENT '시나리오 번호', 
    `img_path`  TEXT            NULL        COMMENT '시나리오 이름', 
    `game_num`  INT UNSIGNED    NULL        COMMENT '게임 번호', 
     PRIMARY KEY (img_num)
);

ALTER TABLE t_img
    ADD CONSTRAINT FK_t_img_game_num_t_game_game_num FOREIGN KEY (game_num)
        REFERENCES t_game (game_num) ON DELETE RESTRICT ON UPDATE RESTRICT;


-- t_user_club Table Create SQL
CREATE TABLE t_user_club
(
    `user_club_Num`  INT             NOT NULL    AUTO_INCREMENT COMMENT '가입된 동아리 번호', 
    `user_id`        INT UNSIGNED    NULL        COMMENT '유저 아이디', 
    `club_num`       INT UNSIGNED    NULL        COMMENT '동아리 번호', 
     PRIMARY KEY (user_club_Num)
);

ALTER TABLE t_user_club COMMENT '가입된 동아리';

ALTER TABLE t_user_club
    ADD CONSTRAINT FK_t_user_club_user_id_t_user_user_id FOREIGN KEY (user_id)
        REFERENCES t_user (user_id) ON DELETE RESTRICT ON UPDATE RESTRICT;

ALTER TABLE t_user_club
    ADD CONSTRAINT FK_t_user_club_club_num_t_club_club_num FOREIGN KEY (club_num)
        REFERENCES t_club (club_num) ON DELETE RESTRICT ON UPDATE RESTRICT;


