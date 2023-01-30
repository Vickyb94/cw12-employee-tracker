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
//const to create list of options after user prompt
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
//function to add new department
const addNewDepartment = [
        {
            type: 'input',
            name: 'name',
            message: 'Enter the name of the department!'
        },  
]
//function to add new role
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
//function to add new employee
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

//const to select employee
const selectEmployee = [
    {
        type: 'input',
        name: 'empoyee_id',
        message: 'Enter the id of the employee you would like to update!'
    },
]
//const to update employee role
const updateEmployeeRole = [
    {
        type: 'input',
        name: 'role_id',
        message: 'Enter the id of the new role you would like to update'
    },
]
//asynchronous function to get the response from database
const newRole = async() => {
     const output = await inquirer.prompt(addNewRole)
     //query database
     const sql = 'INSERT INTO role (title, salary, department_id) VALUES (?,?,?)';
     //append parameters to ouput
     const parameter = [output.title, output.salary, output.department];
     
     db.query(sql, parameter, function (err, results) {
        console.log("");  //ouput array
        console.table(output);
     });

     startMenuOptions();
}

