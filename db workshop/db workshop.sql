create database if not exists db_workshop ;
use db_workshop;
create table if not exists emp(
	ssn char(6) primary key,
    fname varchar(200) not null,
    minit varchar(200),
    lname varchar(200),
    bdate datetime not null,
    adress varchar(200),
    gender enum('male','female'),
    salary int,
    super_ssn char(14),
    dept_id int,
    foreign key (super_ssn) references emp(ssn)
);

create table if not exists dept(
	id int auto_increment primary key,
    name varchar(200) not null unique,
    mgr_ssn char(6),
    mgr_startdate datetime ,
    foreign key (mgr_ssn) references emp(ssn)
);

alter table emp add foreign key (dept_id) references dept(id);

create table if not exists project(
	id int auto_increment primary key,
    name varchar(200) not null unique,
    location varchar(200) not null ,
    dept_num int ,
    foreign key (dept_num) references dept(id)
);

create table if not exists works_on(
	emp_ssn char(6),
    project_id int,
    hours int not null,
    foreign key (emp_ssn) references emp(ssn),
    foreign key dept(project_id) references project(id),
    primary key (emp_ssn, project_id)
);

insert into dept (name) values ('admin'),('tech') ,('customers'), ('finance');
update dept set id = 10 where name = 'tech';
insert into emp values
 ('544201','sara','','gamal','2000-09-01','','female',15000,null,1),
 ('698120','john','','samy','2001-10-15','','male',12000,'544201',1),
 ('968574','mona','','haleem','2001-01-10','','female',6000,'544201',3),
 ('100225','seif','','fahmy','2001-05-20','','male',6000,'544201',10),
 ('587920','ahmed','','ali','2000-10-05','','male',750,'544201',4),
 ('555848','may','','samir','2001-11-07','','female',1000,'100225',10),
 ('648158','nancy','','atef','2001-3-03','','female',5000,'968574',3);
 
update dept set mgr_ssn ='544201',mgr_startdate ='2005-01-20'  where id = 1 or id =4;
update dept set mgr_ssn ='968574',mgr_startdate ='2010-05-15' where id = 3;
update dept set mgr_ssn ='100225',mgr_startdate ='2010-08-20'  where id = 10;

insert into project(name , location , dept_num) values
 ('project 1', 'cairo',1),
 ('project 2', 'alex',4),
 ('project 3', 'mansoura',10),
 ('project 4', 'cairo',10);
 
 insert into works_on values
 ('587920',2,100),
 ('555848',3,80),
 ('100225',3,50) ;
 
 select * from emp;
 
 select fname , lname , salary, dept_id from emp;
 
 select ssn,concat(fname,' ',lname) as name from emp where salary > 1000;
 
 select ssn,concat(fname,' ',lname) as name from emp where (salary*12) > 10000;
 
 select concat(fname,' ',lname) as name, salary from emp where gender = 'female';
 
 select id , name from dept where mgr_ssn = '968574';
 
 select id , name , location from project where dept_num = 10;
 