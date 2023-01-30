//import dependencies
const inquirer = require('inquirer');
const mysql = require('inquirer');

var connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'bootcamp',
    database: 'employee_db'
});

const menuOptions = [
    {
        type: 'list',
        name: 'menuOptions',
        message: 'Select from the following options!',
        options: [
            "View all departments",
            "View all roles",
            "View all employees",
            "Add a department",
            "Add a role",
            "Add an employee",
            "Update an employee role",
            "Exit"
        ]
    }]

const addNewDepartment = [
        {
            type: 'input',
            name: 'name',
            message: 'Enter the name of the department!'
        },  
]

const addNewRole = [
    {
        type: 'input',
        name: 'title',
        message: 'Enter the name of the new role!'    
    },
    {
        type: 'input',
        name: 'salary',
        message: 'Enter the salary of the new role!'
    },
    {
        type: 'input',
        name: 'department_id',
        message: 'Enter the department id of the new role!'
    },
]

const addNewEmployee = [
    {
        type: 'input',
        name: 'first_name',
        message: 'Enter the first name of the new employee!'
    },
    {
        type: 'input',
        name: 'last_name',
        message: 'Enter the last name of the new employee!'
    },
    {
        type: 'input',
        name: 'role_id',
        message: 'Enter the role id of the new employee!'
    },
    {
        type: 'input',
        name: 'manager_id',
        message: 'Enter the manager_id of the new employee!'
    }
]


