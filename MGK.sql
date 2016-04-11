

create table the_user(id int primary key auto_increment,
    name varchar(128),
    status varchar(128),
    the_career int,
    the_race int,
    the_union int,
    the_place int
);

create table the_attribute(id int primary key auto_increment,
    stength int,
    staying int,
    knowledge int,
    business int,
    hp int,
    mana int,
    crystal int,
    ap int
);

create table the_effect(id int primary key auto_increment,
    name varchar(128),
    the_attribute_name varchar(16),
    percent int,
    raw_value int,
    effect_level int
);



create table the_date(id int primary key auto_increment,
    x_date varchar(128);
    z_date varchar(128);
);

create table the_history(id int primary key auto_increment,
    the_date int,
    reason varchar(300),
    poem varchar(300),
    the_user int
);

create table the_users_actions(id int primary key auto_increment,
    the_place int,
    name varchar(128),
);

create table the_area (id int primary key auto_increment,
    name varchar(128),
    the_date int,   
);

create table the_weather(id int primary key auto_increment,
    name varchar(128)
);
create table the_race(id int primary key auto_increment,
    name varchar(128),
    desciption varchar(512)
);
create table the_place(id int primary key auto_increment,
    name varchar(128),
    the_area int,
    the_weather int
);
create table the_union(id int primary key auto_increment,
    name varchar(128),
    desciption varchar(512)
);
create table the_career(id int primary key auto_increment,
    name varchar(128),
    desciption varchar(512)
);

