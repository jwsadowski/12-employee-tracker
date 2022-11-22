import dotenv from 'dotenv'
dotenv.config()
import mysql from 'mysql2'
import inquirer from 'inquirer'

const connection = mysql.createConnection ({
    host: 'localhost',
    user: 'root',
    password: 'SQLpassword1',
    database: 'employees_db'
})

const viewManager = async () => {
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
        'SELECT * FROM manager WHERE first_name = ? && last_name = ?',
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

const deleteDepartment = async () => {
    const answer = await inquirer.prompt([
        {
            type: 'input',
            name: 'department',
            message: 'Which department do you want to delete?'
        }
    ])
    const [results] = await connection.promise().query(
        `DESTROY department WHERE department_id = ?`,
        [answer.department_id]
    )

    console.table(results)
    
    console.log('Department deleted')

    menuPrompt()
}

const deleteRole = async () => {
    const answer = await inquirer.prompt([
        {
            type: 'input',
            name: 'role',
            message: 'Which role do you want to delete?'
        }
    ])
    const [results] = await connection.promise().query(
        `DESTROY role WHERE role_id = ?`,
        [answer.role_id]
    )
    console.table(results)
    
    console.log('Role deleted')

    menuPrompt()
}

const deleteEmployee = async () => {
    const answer = await inquirer.prompt([
        {
            type: 'input',
            name: 'employee',
            message: 'Which employee do you want to delete?'
        }
    ])
    const [results] = await connection.promise().query(
        `DESTROY employee WHERE employee_id = ?`,
        [answer.employee_id]
    )
    console.table(results)
    
    console.log("Employee deleted")

    menuPrompt()
}

const menuPrompt = async () => {
    const answers = await inquirer.prompt([
        {
            type: 'list',
            name: 'action',
            message: 'What do you want to do?',
            choices: ['Search managers', 'Add a manager', 'Update a manager', 'Exit']
        }
    ])
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
}

menuPrompt()


