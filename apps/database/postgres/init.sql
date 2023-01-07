create database "vention_machine_cloud_test";

create table product (
  id serial4 not null,
  createdAt timestamp not null default now(),
  updatedAt timestamp not null default now(),
  name varchar(255) not null,
  image varchar(255) not null,
  price int not null,
  in_cart boolean not null
);

create table rating (
  id serial4 not null,
  createdAt timestamp not null default now(),
  updatedAt timestamp not null default now(),
  product_id int not null,
  value int not null
);
