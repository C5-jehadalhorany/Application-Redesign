DROP DATABASE application;

CREATE DATABASE application;

USE application;

CREATE TABLE grop_job(
    id int AUTO_INCREMENT NOT NULL,
    gropjob varchar(255),
    ActualCost int,
    TotalBudget int,
    BudgetVal int,
    is_deleted TINYINT DEFAULT 0,
    PRIMARY KEY (id)
);

CREATE TABLE sub_job(
    id int AUTO_INCREMENT NOT NULL,
    grop varchar(255),
    ActualCostsub int,
    TotalBudgetsub int,
    BudgetValsub int,
    grop_name int,
    FOREIGN KEY (grop_name) REFERENCES grop_job(id),
    is_deleted TINYINT DEFAULT 0,
    PRIMARY KEY (id)
);

CREATE TABLE users(
    id int AUTO_INCREMENT NOT NULL,
    email varchar(255) unique,
    img varchar(255),
    is_deleted TINYINT DEFAULT 0,
    PRIMARY KEY (id)
);

CREATE TABLE grop_users(
    id int AUTO_INCREMENT NOT NULL,
    grop_id int,
    user_id int,
    job_id int,
    is_deleted TINYINT DEFAULT 0,
    PRIMARY KEY (id),
    FOREIGN KEY (grop_id) REFERENCES grop_job(id),
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (job_id) REFERENCES sub_job(id)
);