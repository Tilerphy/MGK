

create table the_user(id int primary key auto_increment,
    name varchar(128),
    status varchar(128),
    the_race int,
    the_union int,
    the_area int
);

create table the_attribute(id int primary key auto_increment,
    stength int,
    staying int,
    knowledge int,
    speed int,
    hp int,
    mana int,
    crystal int,
    crystal_level int,
    gold int,
    gold_level int,
    ap int,
    age int,
    health int,
    gender int
);

    --business int,
    --speech int,
    --charm int,
    --insight int,
    --adventure int,
    --creativity int,
    --mining int,
    --driving int,
    --cooking int,
    --weapon int
create table the_ex_attribute(
    id int primary key auto_increment,
    name varchar(16),
    val int
);

create table the_effect(
    id int primary key auto_increment,
    name varchar(128),
    the_attribute_name varchar(16),
    effect_percent int,
    effect_value int,
    
    --the_area 0
    --the_union 1
    --the_race 2
    --the_item_effect 3
    --the_weather 4
    --the_user_status 5
    --the_action 6
    effect_type varchar(16),
    effect_name varchar(128),
    effect_level int,
    desciption varchar(512)
    
);

create table the_date(id int primary key auto_increment,
    x_date varchar(128),
    z_date varchar(128),
    total varchar(512)
);

create table the_history(id int primary key auto_increment,
    the_date int,
    reason varchar(300),
    poem varchar(300),
    the_user int
);



--create table the_users_actions(id int primary key auto_increment,
--    the_place int,
--    name varchar(128),
--);

--create table the_weather(id int primary key auto_increment,
--    name varchar(128)
--);
--create table the_race(id int primary key auto_increment,
--    name varchar(128),
--    desciption varchar(512)
--);
--create table the_area(id int primary key auto_increment,
--    name varchar(128),
--    the_weather int
--);
--create table the_union(id int primary key auto_increment,
--    name varchar(128),
--    desciption varchar(512)
--);


