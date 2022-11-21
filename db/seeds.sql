INSERT INTO department (id, name)
VALUES (1, "Sales");

INSERT INTO department (id, name)
VALUES (2, "Engineering");

INSERT INTO department (id, name)
VALUES (3, "Finance")

INSERT INTO department (id, name)
VALUES (4, "Legal")

INSERT INTO role (id, title, salary, department_id)
VALUES (1, "Salesperson", 80000, 1);

INSERT INTO role (id, title, salary, department_id)
VALUES (2, "Lead Engineer", 150000, 2);

INSERT INTO role (id, title, salary, department_id)
VALUES (3, "Software Engineer", 120000, 2);

INSERT INTO role (id, title, salary, department_id)
VALUES (4, "Account Manager", 160000, 3);

INSERT INTO role (id, title, salary, department_id)
VALUES (5, "Accountant", 125000, 3);

INSERT INTO role (id, title, salary, department_id)
VALUES (6, "Legal team lead", 250000, 4);

INSERT INTO role (id, title, salary, department_id)
VALUES (7, "Lawyer", 190000, 4);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (2, "Mike", "Chan", 1, 1);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (3, "Ashley", "Rodriguez", 2, NULL);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (2, "Kevin", "Tupik", 3, 2);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (2, "Kunal", "Singh", 4, NULL);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (2, "Malia", "Brown", 5, 3);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (2, "Sarah", "Lourd", 6, NULL);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (2, "Tom", "Allen", 7, 4);

