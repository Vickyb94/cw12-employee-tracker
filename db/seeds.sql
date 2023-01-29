USE employee_db;

INSERT INTO department (name)
VALUES 
       ('Logistics'),
       ('Administration'),
       ('Marketing'),
       ('Publishing'),
       ('Manufacturing'),
       ('Auditing');

INSERT INTO role (title, salary, department_id)
VALUES
      ('Logistics Manager', 82000, 1),
      ('Secretary', 48000, 2),
      ('Office Clerk', 35000, 2),
      ('Marketing Director', 120000, 3),
      ('Printing Supervisor', 53000, 4),
      ('Auditing Intern', 37000, 6),
      ('Auditing Manager', 127000, 6);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
   ('Anderson', 'Betts', 1, 3),
   ('Michelle', 'Capson', 2, 6),
   ('Frank', 'Alfred', 3, 6),
   ('Black', 'Ryan', 4, 4),
   ('Aiden', 'Daniels', 5, 2),
   ('Grace', 'Davies', 6, 1),