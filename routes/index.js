const mysql = require('mysql2')
const inquirer = require('inquirer')

const connection = mysql.createConnection ({
    host: 'localhost',
    user: 'root',
    password: 'SQLpassword1!',
    database: 'employees_db'
})

const viewEmployees = async () => {
    const answers = await inquirer.prompt([
        {
            type: 'input',
            name: 'first_name',
            message: 'First name: '
        },
        {
            type: 'input',
            name: 'last_name',
            message: 'Last_name: '
        }
    ])

    const [results] = await connection.promise().query(
        'SELECT * FROM employees WHERE first_name = ? && last_name = ?',
        [answers.first_name, answers.last_name]
    )

    console.table(results)

    menuPrompt()
}

const updateManager = async () => {
    const answers = await inquirer.prompt([
        {
            type: 'input',
            name: 'first_name',
            message: 'What is their first name'
        },
        {
            type: 'input',
            name: 'last_name',
            message: 'What is their last name?'
        }
    ])

    const [results] = await connection.promise().query(
        `UPDATE manager 
        SET first_name = ?, second_name = ?
        WHERE manager_id = ?`,
        [answers.first_name, answers.last_name, answers.manager_id]
    )
    console.table(results)

    console.log('Manager updated')

    menuPrompt()
}

const menuPrompt = async () => {
    const answers = await inquirer.prompt([
        {
            type: 'list',
            name: 'action',
            message: 'What do you want to do?',
            choices: ['Search actors', 'Add a manager', 'Update a manager', 'Exit']
        }
    ])
}

menuPrompt()

if (answers.action === 'View Managers') {
    viewManagers()
} else if (answers.action === 'Add a manager') {
    addManager()
} else if (answers.action === 'Update a manager') {
    updateManager()
} else if (answers.action === 'Delete a department') {
    deleteDepartment()
} else if (answers.action === 'Delete a role') {
    deleteRole()
} else if (answers.action === 'Delete an employee') {
    deleteEmployee()
}




       


