-- =============================================================================
-- SQL Syntax Highlighting Showcase
-- Purpose: Demonstrate various SQL syntax elements for editor theme testing.
-- Note: This script may require adjustments for specific database systems.
-- =============================================================================

-- Single line comment

/*
  Multi-line comment block.
  Covering DDL, DML, TCL, DCL, Functions, Procedures, Triggers, etc.
*/

-- =============================================================================
-- Data Definition Language (DDL)
-- =============================================================================

-- Schema definition (Optional, depends on DB system)
CREATE SCHEMA IF NOT EXISTS company_schema;
-- USE company_schema; -- Might be needed depending on the SQL client/system

-- Table Creation with various data types and constraints
CREATE TABLE departments (
    department_id   INTEGER PRIMARY KEY, -- Or SERIAL, AUTO_INCREMENT depending on DB
    department_name VARCHAR(100) NOT NULL UNIQUE,
    location        VARCHAR(50) DEFAULT 'Head Office',
    budget          DECIMAL(12, 2) CHECK (budget > 0),
    established_date DATE
);

CREATE TABLE employees (
    employee_id     INTEGER PRIMARY KEY, -- Or INT IDENTITY(1,1) etc.
    first_name      VARCHAR(50) NOT NULL,
    last_name       VARCHAR(50) NOT NULL,
    email           VARCHAR(100) UNIQUE,
    phone_number    VARCHAR(20),
    hire_date       TIMESTAMP WITHOUT TIME ZONE DEFAULT CURRENT_TIMESTAMP, -- Or NOW()
    job_title       VARCHAR(50),
    salary          DECIMAL(10, 2),
    manager_id      INTEGER REFERENCES employees(employee_id), -- Self-referencing FK
    department_id   INTEGER,
    is_active       BOOLEAN DEFAULT TRUE,
    profile_notes   TEXT, -- Large text block
    profile_picture BLOB, -- Binary Large Object (syntax may vary)
    CONSTRAINT fk_department FOREIGN KEY (department_id) REFERENCES departments(department_id) ON DELETE SET NULL,
    CONSTRAINT chk_email CHECK (email LIKE '%@%.%') -- Basic email format check
);

CREATE TABLE projects (
    project_id      INTEGER PRIMARY KEY,
    project_name    VARCHAR(100) NOT NULL,
    start_date      DATE,
    end_date        DATE,
    CONSTRAINT chk_dates CHECK (end_date IS NULL OR end_date >= start_date)
);

-- Junction table for many-to-many relationship
CREATE TABLE employee_projects (
    assignment_id   INTEGER PRIMARY KEY, -- Or generated always as identity
    employee_id     INTEGER NOT NULL REFERENCES employees(employee_id) ON DELETE CASCADE,
    project_id      INTEGER NOT NULL REFERENCES projects(project_id) ON DELETE CASCADE,
    assigned_date   DATE DEFAULT CURRENT_DATE, -- Or GETDATE(), etc.
    role_in_project VARCHAR(50),
    UNIQUE (employee_id, project_id) -- Ensure employee isn't assigned twice to same project
);



-- Index Creation
CREATE INDEX idx_employee_name ON employees (last_name, first_name);
CREATE UNIQUE INDEX idx_project_name ON projects (project_name);

-- View Creation
CREATE VIEW employee_department_view AS
SELECT
    e.employee_id,
    e.first_name || ' ' || e.last_name AS full_name, -- String concatenation (syntax varies: + , CONCAT())
    e.job_title,
    d.department_name,
    d.location
FROM
    employees e
LEFT JOIN
    departments d ON e.department_id = d.department_id;

-- Altering Tables
ALTER TABLE employees
    ADD COLUMN bonus_percentage FLOAT DEFAULT 0.0;

ALTER TABLE employees
    ALTER COLUMN phone_number TYPE VARCHAR(25); -- Syntax varies: MODIFY COLUMN, etc.

ALTER TABLE departments
    DROP COLUMN established_date;

ALTER TABLE projects
    ADD CONSTRAINT uq_project_dates UNIQUE (project_name, start_date);

-- Sequence creation (Syntax highly variable)
-- CREATE SEQUENCE employee_id_seq START WITH 100 INCREMENT BY 1;

-- =============================================================================
-- Data Manipulation Language (DML)
-- =============================================================================

-- Inserting Data
INSERT INTO departments (department_id, department_name, budget, location) VALUES
    (1, 'Technology', 500000.00, 'Building A'),
    (2, 'Human Resources', 150000.00, 'Building B'),
    (3, 'Sales', 300000.00, DEFAULT); -- Using default value

-- Multi-row insert
INSERT INTO employees (employee_id, first_name, last_name, email, job_title, salary, department_id, hire_date, manager_id) VALUES
    (101, 'Alice', 'Smith', 'alice.s@example.com', 'Software Engineer', 90000.00, 1, '2023-01-15 09:00:00', NULL),
    (102, 'Bob', 'Johnson', 'bob.j@example.com', 'HR Manager', 75000.00, 2, '2022-11-01 10:30:00', NULL),
    (103, 'Charlie', 'Brown', 'charlie.b@example.com', 'Sales Representative', 60000.00, 3, '2023-03-10 11:00:00', NULL),
    (104, 'Diana', 'Ross', 'diana.r@example.com', 'Senior Software Engineer', 110000.00, 1, '2022-08-20 08:45:00', 101);

INSERT INTO projects (project_id, project_name, start_date, end_date) VALUES
    (1, 'Alpha Initiative', '2023-02-01', '2024-01-31'),
    (2, 'Beta Platform', '2023-05-15', NULL),
    (3, 'Gamma Sales Push', '2023-04-01', '2023-09-30');

INSERT INTO employee_projects (assignment_id, employee_id, project_id, role_in_project) VALUES
    (1, 101, 1, 'Lead Developer'),
    (2, 101, 2, 'Architect'),
    (3, 104, 1, 'Developer'),
    (4, 103, 3, 'Coordinator');

-- Updating Data
UPDATE employees
SET salary = salary * 1.05, bonus_percentage = 0.05
WHERE department_id = 1 AND hire_date < '2023-01-01';

UPDATE projects
SET end_date = CURRENT_DATE
WHERE project_name = 'Gamma Sales Push' AND end_date IS NULL;

-- Deleting Data
DELETE FROM employees
WHERE employee_id = 103 AND is_active = FALSE; -- Assuming is_active was set to false elsewhere

DELETE FROM departments
WHERE department_id NOT IN (SELECT DISTINCT department_id FROM employees WHERE department_id IS NOT NULL);

-- =============================================================================
-- SELECT Queries (Showcasing various clauses and features)
-- =============================================================================

-- Basic Select
SELECT employee_id, first_name, last_name, salary FROM employees;

-- Select with Alias and WHERE clause
SELECT
    e.first_name AS "First Name", -- Quoted identifier alias
    e.last_name AS LastName, -- Unquoted identifier alias
    e.salary * 12 AS AnnualSalary
FROM
    employees e
WHERE
    e.department_id = 1
    AND (e.salary > 100000 OR e.job_title LIKE '%Senior%')
    AND e.hire_date BETWEEN '2022-01-01' AND '2023-12-31'
ORDER BY
    e.last_name ASC, e.first_name ASC;

-- Joins (INNER, LEFT, RIGHT, FULL OUTER)
SELECT
    e.first_name,
    d.department_name,
    p.project_name,
    ep.role_in_project
FROM
    employees e
INNER JOIN
    departments d ON e.department_id = d.department_id
LEFT JOIN
    employee_projects ep ON e.employee_id = ep.employee_id
LEFT JOIN
    projects p ON ep.project_id = p.project_id
WHERE
    d.location = 'Building A';

-- Aggregation with GROUP BY and HAVING
SELECT
    d.department_name,
    COUNT(e.employee_id) AS number_of_employees,
    AVG(e.salary) AS average_salary,
    MAX(e.hire_date) AS latest_hire_date
FROM
    departments d
JOIN
    employees e ON d.department_id = e.department_id
GROUP BY
    d.department_name
HAVING
    COUNT(e.employee_id) > 0
    AND AVG(e.salary) > 70000.00
ORDER BY
    average_salary DESC;

-- Subqueries (Scalar, IN, EXISTS)
SELECT
    first_name,
    last_name
FROM
    employees
WHERE
    department_id = (SELECT department_id FROM departments WHERE department_name = 'Technology');

SELECT * FROM projects
WHERE project_id IN (SELECT project_id FROM employee_projects WHERE employee_id = 101);

SELECT d.department_name
FROM departments d
WHERE EXISTS (SELECT 1 FROM employees e WHERE e.department_id = d.department_id AND e.salary > 100000);

-- Common Table Expressions (CTE)
WITH DepartmentSalaries AS (
    SELECT
        department_id,
        SUM(salary) as total_salary_cost
    FROM employees
    WHERE salary IS NOT NULL
    GROUP BY department_id
)
SELECT
    d.department_name,
    ds.total_salary_cost
FROM
    departments d
JOIN
    DepartmentSalaries ds ON d.department_id = ds.department_id
WHERE ds.total_salary_cost > 150000;

-- Recursive CTE (Example: Employee Hierarchy)
WITH RECURSIVE EmployeeHierarchy (employee_id, full_name, manager_id, level) AS (
    -- Anchor member: employees with no manager (top level)
    SELECT employee_id, first_name || ' ' || last_name, manager_id, 0
    FROM employees
    WHERE manager_id IS NULL
    UNION ALL
    -- Recursive member: employees whose manager is already in the hierarchy
    SELECT e.employee_id, e.first_name || ' ' || e.last_name, e.manager_id, eh.level + 1
    FROM employees e
    INNER JOIN EmployeeHierarchy eh ON e.manager_id = eh.employee_id
)
SELECT * FROM EmployeeHierarchy ORDER BY level, full_name;

-- Set Operations (UNION, UNION ALL, INTERSECT, EXCEPT/MINUS)
SELECT employee_id, first_name FROM employees WHERE department_id = 1
UNION -- Combines results, removes duplicates
SELECT employee_id, first_name FROM employees WHERE job_title LIKE '%Manager%'
UNION ALL -- Combines results, keeps duplicates
SELECT employee_id, first_name FROM employees WHERE salary > 100000
INTERSECT -- Returns rows common to both queries
SELECT employee_id, first_name FROM employees WHERE is_active = TRUE
EXCEPT -- Returns rows from first query not in second (MINUS in Oracle)
SELECT employee_id, first_name FROM employees WHERE hire_date < '2023-01-01';


-- Window Functions (ROW_NUMBER, RANK, DENSE_RANK, LAG, LEAD, NTILE)
SELECT
    employee_id,
    first_name,
    last_name,
    department_id,
    salary,
    RANK() OVER (PARTITION BY department_id ORDER BY salary DESC) AS salary_rank_in_dept,
    ROW_NUMBER() OVER (ORDER BY hire_date ASC) AS overall_hire_sequence,
    LAG(salary, 1, 0.0) OVER (PARTITION BY department_id ORDER BY hire_date) AS previous_employee_salary,
    LEAD(first_name) OVER (ORDER BY hire_date) AS next_hired_employee_name,
    NTILE(4) OVER (ORDER BY salary DESC) AS salary_quartile
FROM
    employees;

-- CASE Expressions
SELECT
    employee_id,
    salary,
    CASE
        WHEN salary >= 100000 THEN 'High'
        WHEN salary >= 70000 AND salary < 100000 THEN 'Medium'
        ELSE 'Low'
    END AS salary_category,
    CASE job_title -- Simple CASE
        WHEN 'Software Engineer' THEN 'Tech Staff'
        WHEN 'HR Manager' THEN 'Admin Staff'
        ELSE 'Other'
    END AS job_type
FROM
    employees;

-- Using Built-in Functions (Date, String, Math, Conversion)
SELECT
    CURRENT_DATE, -- Or GETDATE(), SYSDATE depending on DB
    CURRENT_TIMESTAMP,
    EXTRACT(YEAR FROM hire_date) AS hire_year, -- Or DATEPART(year, hire_date), YEAR()
    UPPER(first_name) AS upper_first_name,
    LOWER(last_name) AS lower_last_name,
    LENGTH(job_title) AS job_title_length, -- Or LEN()
    ROUND(salary / 12, 2) AS approx_monthly_salary,
    COALESCE(manager_id, 0) AS manager_id_no_null, -- Return first non-null value
    CAST(salary AS VARCHAR(20)) || ' USD' AS salary_string, -- Type casting
    CONVERT(VARCHAR(10), hire_date, 101) -- Example SQL Server style conversion
FROM
    employees
LIMIT 10 OFFSET 5; -- Or TOP 10, ROWNUM, etc. for limiting results

-- =============================================================================
-- Transaction Control Language (TCL)
-- =============================================================================

BEGIN TRANSACTION; -- Or START TRANSACTION

SAVEPOINT before_promotion; -- Optional savepoint

UPDATE employees SET salary = salary * 1.10 WHERE employee_id = 101;
INSERT INTO employee_projects (assignment_id, employee_id, project_id, role_in_project)
    VALUES (5, 101, 3, 'Consultant'); -- Needs appropriate assignment_id handling

-- Check conditions, potentially rollback
-- ROLLBACK TO SAVEPOINT before_promotion;

COMMIT; -- Make changes permanent

-- Example of rollback
BEGIN TRANSACTION;
DELETE FROM projects WHERE project_name = 'Temporary Project';
-- Oups, deleted wrong project!
ROLLBACK; -- Revert changes since BEGIN TRANSACTION

-- =============================================================================
-- Data Control Language (DCL) - Syntax varies greatly
-- =============================================================================

-- Granting Privileges
GRANT SELECT, INSERT ON employees TO user_role; -- Or TO 'username'@'host'
GRANT UPDATE (salary, job_title) ON employees TO hr_manager_role;
GRANT ALL PRIVILEGES ON departments TO admin_user;
GRANT EXECUTE ON FUNCTION calculate_bonus TO analyst_role; -- For functions/procedures

-- Revoking Privileges
REVOKE INSERT ON employees FROM user_role;
REVOKE ALL PRIVILEGES ON departments FROM admin_user;

-- =============================================================================
-- Stored Procedures, Functions, Triggers (Syntax HIGHLY database-specific)
-- =============================================================================

-- Example: Function (PostgreSQL syntax)
/*
CREATE OR REPLACE FUNCTION calculate_bonus(emp_id INTEGER)
RETURNS DECIMAL AS $$
DECLARE
    emp_salary DECIMAL;
    bonus DECIMAL;
BEGIN
    SELECT salary INTO emp_salary FROM employees WHERE employee_id = emp_id;
    IF emp_salary > 100000 THEN
        bonus := emp_salary * 0.10;
    ELSE
        bonus := emp_salary * 0.05;
    END IF;
    RETURN bonus;
END;
$$ LANGUAGE plpgsql;
*/

-- Example: Stored Procedure (SQL Server syntax)
/*
CREATE PROCEDURE PromoteEmployee (@EmployeeID INT, @NewJobTitle VARCHAR(50), @SalaryIncrease DECIMAL(10,2))
AS
BEGIN
    SET NOCOUNT ON;
    UPDATE employees
    SET job_title = @NewJobTitle,
        salary = salary + @SalaryIncrease
    WHERE employee_id = @EmployeeID;

    IF @@ROWCOUNT = 0
    BEGIN
        RAISERROR('Employee not found or no update occurred.', 16, 1);
        RETURN;
    END
END;
*/

-- Example: Trigger (Generic Concept - syntax varies widely)
/*
CREATE TRIGGER UpdateAuditLog
AFTER UPDATE ON employees
FOR EACH ROW -- Or FOR EACH STATEMENT
BEGIN
    -- Trigger logic, e.g., insert into an audit table
    -- INSERT INTO audit_log (table_name, record_id, change_time, user)
    -- VALUES ('employees', NEW.employee_id, CURRENT_TIMESTAMP, CURRENT_USER);
END;
*/

-- =============================================================================
-- Dropping Objects
-- =============================================================================

-- Drop view, index, tables (in reverse order of dependency or using CASCADE)
DROP VIEW IF EXISTS employee_department_view;
DROP INDEX IF EXISTS idx_employee_name;
DROP INDEX IF EXISTS idx_project_name;

-- May need CASCADE depending on FK constraints and DB system if data exists
DROP TABLE IF EXISTS employee_projects;
DROP TABLE IF EXISTS projects CASCADE; -- Example cascade
DROP TABLE IF EXISTS employees;
DROP TABLE IF EXISTS departments;

DROP SCHEMA IF EXISTS company_schema;
-- DROP SEQUENCE IF EXISTS employee_id_seq;

-- End of Script