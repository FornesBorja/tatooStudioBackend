# Welcome to my backend app

<details>
  <summary>Summary 📝</summary>
  <ol>
    <li><a href="#Objective">Objective</a></li>
    <li><a href="#about">About</a></li>
    <li><a href="#stack">Stack</a></li>
    <li><a href="#DB-Scheme">DB Scheme</a></li>
    <li><a href="#local-installation">Installation</a></li>
    <li><a href="#endpoints">Endpoints</a></li>
  </ol>
</details>

## objective
Este proyecto requería una API funcional conectada a una base de datos con al menos una relación de uno a muchos y una relación de muchos a muchos.

## About
Decidí crear una aplicación web para ayudar a los amantes del gimnasio, que les permitiría crear y realizar un seguimiento de nuevas rutinas para sus ejercicios diarios. He visto muchas apps de este estilo pero ninguna que nos permita cambiar tan libremente las rutinas adaptandolas a nuestras necesidades.    


## Stack
Tecnologías utilizadas:
<div align="center">
<a href="https://www.mongodb.com/">
    <img src= "https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white"/>
</a>
<a href="https://www.expressjs.com/">
    <img src= "https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB"/>
</a>
<a href="https://nodejs.org/es/">
    <img src= "https://img.shields.io/badge/node.js-026E00?style=for-the-badge&logo=node.js&logoColor=white"/>
</a>
<a href="https://developer.mozilla.org/es/docs/Web/JavaScript">
    <img src= "https://img.shields.io/badge/javascipt-EFD81D?style=for-the-badge&logo=javascript&logoColor=black"/>
</a>
 </div>


## DB Scheme
![DB-Scheme](https://i.gyazo.com/23a7d15f2b357f69496a483f997c4432.png)

## Local installation
1. Clone the repository
2. ` $ npm i `
3. Conectamos nuestro repositorio con la base de datos 
4. ``` $ Ejecutamos las migraciones ``` 
5. ``` $ Ejecutamos los seeders ``` 
6. ``` $ npm run dev ``` 
7. ...

## Endpoints

<details>
<summary>Auth</summary>

- REGISTER

    - BY DEFAULT IS USER.

        POST https://tattoo-studio-fornesb.zeabur.app/api/auth/register

        Body:

        ``` json
            {
                "firstName":"Pepe",
                "email":"pepe@pepe.com",
                "password":"123456789"
            }
        ```

- LOGIN 
    - IT WILL RETURN A TOKEN.

        POST http://localhost:4000/api/auth/login

        Body:
        ``` json
            {
                "email":"juan.perez@example.com",
                "password":"Pass1234!"
            }
        ```
</details>
<details>
<summary>Users</summary>

- GET ALL USERS (SUPER_ADMIN)

    - ONLY SUPER_ADMIN IS ALLOWED TO ACCESS TO THIS ENDPOINT

        GET https://tattoo-studio-fornesb.zeabur.app/api/users

    Auth:

        ``` bearer
            {
                eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJob2xhQGhvbGEuYWRpb3MiLCJpYXQiOjE3MjA1OTYyNzMsImV4cCI6MTcyMDYwMzQ3M30.QnL_HgGPVLOb0d4iUUuFCeSab1lp3SpOVV_js0T4ExY
            }
        ```
        This token is just an example, it doesn't work.

- GET USER PROFILE

    - ONLY THE USER IS ALLOWED TO DO THIS ENDPOINT

        GET https://tattoo-studio-fornesb.zeabur.app/api/users/profile

        Auth:
        ``` bearer
            {
                eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJob2xhQGhvbGEuYWRpb3MiLCJpYXQiOjE3MjA1OTYyNzMsImV4cCI6MTcyMDYwMzQ3M30.QnL_HgGPVLOb0d4iUUuFCeSab1lp3SpOVV_js0T4ExY
            }
        ```
        This token is just an example, it doesn't work.

- EDIT USER PROFILE

    - USER CAN EDIT ITS INFO

    PUT https://tattoo-studio-fornesb.zeabur.app/api/users/profile

    Body:

    ``` 
        {
            "email":"hola@pepe.com",
        }
    ```

    In the body, the fields you want to edit are placed. Here is an example.

    Auth:

    ``` bearer
        {
            eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJob2xhQGhvbGEuYWRpb3MiLCJpYXQiOjE3MjA1OTYyNzMsImV4cCI6MTcyMDYwMzQ3M30.QnL_HgGPVLOb0d4iUUuFCeSab1lp3SpOVV_js0T4ExY
        }
    ```
        
    This token is just an example, it doesn't work.

</details>
<summary>Appointments</summary>

- CREATE APPOINTMENT

    - A USER CAN 

        POST https://tattoo-studio-fornesb.zeabur.app/api/users

    Auth:

        ``` bearer
            {
                eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJtYXJpYS5nYXJjaWFAZXhhbXBsZS5jb20iLCJpYXQiOjE3MjA4ODI3MDQsImV4cCI6MTcyMDg4OTkwNH0.CiQ7BQoE6PEUOHkneg3GBEhe_QXbVc5lgkVQmK9La_s
            }
        ```
    Auth:

        ``` json
            {
                  "date":"27/07/2024",
                   "hour": "18:04",
                   "artistId":8,
                   "serviceId":2
            }
        ```
       You will get an error if the entered date is earlier than the current date or if the artistId is not role 1 or 2 (super_admin or artist) or if theres already booked
       an appointment for that artist and a certain time.


</details>
