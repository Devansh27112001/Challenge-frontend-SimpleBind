# Book Inventory System

## Appendix

You should have installed Node Package Manager, MySql and MySqlWorkbench on your computer to run this project.

While you are installing MySql, you will be asked to enter a user for the database(usually 'root' ), a password and a database name. For those three things,

User = root (by default)

password = Enter your password

database_name = Enter your database name.

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file in the backend folder.

Create a .env file in the root folder and add:<br/>
`PORT` = 5000

`MYSQL_HOST`= localhost

`MYSQL_USER` = Username of your database. (can be seen in MySqlWorkbench)

`MYSQL_PASSWORD` = Password for MySql

`MYSQL_DATABASE` = The name of your database.

## Run Locally

Clone the project

```bash
  git clone https://github.com/Devansh27112001/Challenge-frontend-SimpleBind.git
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  npm install
```

Go to the frontend folder

```bash
  cd .\frontend\
```

Install dependencies

```bash
  npm install
```

Go to the root directory if you are in the frontend folder and start the backend server

```bash
  npm run dev
```

Go to the frontend folder if you are in the root directory.

```bash
  cd .\frontend\
```

Start the frontend server

```bash
  npm run dev
```
