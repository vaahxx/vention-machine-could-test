create database "vention_machine_cloud_test";

create table product (
  name varchar(255),
  image varchar(255),
  price int,
  in_cart boolean
);

create table rating (
  product_id: int,
  value: int
);

insert into product (name, image, price, in_cart)
values
('Red flower', 'https://www.freepnglogos.com/uploads/flour-png/flour-flower-png-transparent-png-images-pluspng-2.png', 20, TRUE),
('Peach flower', 'https://www.freepnglogos.com/uploads/flour-png/flour-peach-flower-png-16.png', 15, FALSE),
('Pink flower', 'https://www.freepnglogos.com/uploads/flour-png/flour-flower-images-transparent-background-19.png', 10, TRUE);

insert into rating (product_id, value)
values (1, 3),
(1, 4),
(1, 5),
(2, 4),
(2, 5),
(3, 2);
