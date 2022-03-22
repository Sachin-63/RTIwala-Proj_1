CREATE DATABASE proj1;

CREATE TABLE customers(
    customer_id SERIAL PRIMARY KEY,
    email_id VARCHAR(30),
    pwd VARCHAR(20),
    phone VARCHAR(10)
);