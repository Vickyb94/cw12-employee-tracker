DROP DATABASE IF EXISTS employee_db;

CREATE DATABASE employee_db;

CREATE TABLE department (
id INT NOT NULL AUTO_INCREMENT PRIMARY KEY(id),
name VARCHAR(30) NOT NULL
);

CREATE TABLE role (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY (id),
    title VARCHAR (30) NOT NULL,
    salary DECIMAL NOT NULL,
    department_id INT NULL  
);

CREATE TABLE employee (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY (id),
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT NULL,
    manager_id INT NULL
);
