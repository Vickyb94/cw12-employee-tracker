//import dependencies
const inquirer = require('inquirer');
const mysql = require('inquirer');

const db = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'bootcamp',
    database: 'employee_db'
},
console.log(`Connected to the employee_db database.`)
);
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
//function to carry out asynchronous query to get the response from database
const newDepartment = async() => {
     const output = await inquirer.prompt(addNewDepartment)
     //query database
     const sql = `INSERT INTO department(name)
        VALUES (?)`;
     const params = [output.name];

     db.query(sql, params, function (err, outputs) {
        console.log("");  //output array
        console.table(outputs);
     });

     listOptions();
}

const newRole = async() => {
     const output = await inquirer.prompt(addNewRole)
     //query database
     const sql = `INSERT INTO role (title, salary, department_id) 
        VALUES (?,?,?)`;
     //append parameters to output
     const params = [output.title, output.salary, output.department];
     
     db.query(sql, params, function (err, outputs) {
        console.log("");  //output array
        console.table(outputs);
     });

     listOptions();
}

const newEmployee = async() => {
     const output = await inquirer.prompt(addNewEmployee)
     const sql = `INSERT INTO employee (first_name, last_name, role_id, manager_id)
        VALUES (?,?,?,?)`;
        const params = [output.first_name, output.last_name, output.role_id, output.manager_id];
        db.query(sql, params, function (err, outputs) {
            console.log("");  //ouput array
            console.table(outputs);
         });
    
         listOptions();
}

//query select employee
const selectedEmployee = async() => {
    const output = await inquirer.prompt(selectEmployee);

    db.query('SELECT role.id, role.title FROM role', function (err, outputs) {
        console.log("");  
        console.table(outputs);
     });
   updatedEmployeeRole(output.employee_id);   
}

const updatedEmployeeRole = async (employeeID) => {
    const output = await inquirer.prompt(updateEmployeeRole)
    const sql = `UPDATE employee SET role_id = ${output.role_id}
    Where id = ${employeeID}`;

    db.query(sql, function (err, outputs) {
        console.log("");  
        console.table(outputs);
     });

     listOptions();
}