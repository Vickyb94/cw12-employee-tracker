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

