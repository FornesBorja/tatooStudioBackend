# Tattoo Studio

Welcome to my 4th project for GeeksHub Academy and my first backend project.

<div align="center">
  <img src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExOXVuaTh1NDJiZnR0ZWpsd2xqdWQxc3NzenI1cTB6cTVsb3dnNGJqNyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/YlRe5qv47jKQlMloSd/giphy.webp" alt="LineInk Tattoo Studio" />
</div>
<br/>
<details>
  <summary>Summary 📝</summary>
  <ol>
    <li><a href="#objective">Objective</a></li>
    <li><a href="#deploy">Deploy</a></li>
    <li><a href="#stack">Stack</a></li>
    <li><a href="#db-scheme">DB Scheme</a></li>
    <li><a href="#local-installation">Installation</a></li>
    <li><a href="#endpoints">Endpoints</a></li>
    <li><a href="#futures-functionalities-and-things-to-improve">Futures functionalities and things to improve</a></li>
    <li><a href="#author">Author</a></li>
  </ol>
</details>

## Objective
This project required a functional API connected to a database with at least a one-to-many relationship and a many-to-many relationship.


## Deploy
<div align="center">
    🚀<a href="https://tattoo-studio-fornesb.zeabur.app/healthy"><strong> Click here to check the status of the deploy! </strong></a>🚀
</div>

## Stack
<div align="center">
<a href="https://www.expressjs.com/">
    <img src= "https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB"/>
</a>
<a href="https://typescriptlang.org">
     <img src= "https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" />
</a>    
<a href="https://nodejs.org/es/">
    <img src= "https://img.shields.io/badge/node.js-026E00?style=for-the-badge&logo=node.js&logoColor=white"/>
</a>

<a href="">
    <img src="https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white" alt="MySQL" />
</a>
<a href="">
<img src="https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white" alt="Docker" />
</a>
<a href="">
    <img src="https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=white" alt="JWT" />
</a>
<a href="">
    <img src="https://img.shields.io/badge/bcrypt-3178C6?style=for-the-badge&" alt="TypeScript" />
</a>
 </div>

## DB Scheme
![DB-Scheme](https://i.gyazo.com/86ef26ffb118c2f5bb476ef7b07411f8.png)
As tables that dont depend of others we've got service, that is just a table with the id, name of service an a description of the service we offer and role that show the id of the role and the name of that role.
Next we have the table users which is related to role and appointment. The relation consist in every user has a role, which currently can be super_admin, artist or user (the default one). <br/>
Appointment table has two foreign key, both are from user_id, in client_id column we have users with role user or roleId 3 and in artist_id column just can be there user whose role are 1 or 2 (I'm assuming the owner of the shop or super_admin is also an artist).

## Local installation
1. Clone the repository ``` git clone https://github.com/FornesBorja/tatooStudioBackend.git```
2. Open the folder
3. ` $ npm i `
4. Copy the .env.example file, change the name of the copy to .env.
5. Write the .env file with your server parameters, to make the server work.
6. ``` $ npm run migrate ``` 
7. ``` $ npm run seed ``` 
8. ``` $ npm run dev ``` 

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

    - USER CAN EDIT ITS ALL THEIR INFO EXCEPT ROLE. 

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

- FILTER BY EMAIL (SUPER_ADMIN)

    - ONLY ACCESSIBLE BY SUPER_ADMIN

    GET https://tattoo-studio-fornesb.zeabur.app/api/users?email=ejemplo@ejemplo.com

    Auth:

    ``` bearer
        {
            eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJob2xhQGhvbGEuYWRpb3MiLCJpYXQiOjE3MjA1OTYyNzMsImV4cCI6MTcyMDYwMzQ3M30.QnL_HgGPVLOb0d4iUUuFCeSab1lp3SpOVV_js0T4ExY
        }
    ```
        
    This token is just an example, it doesn't work.

- DELETE USER (SUPER_ADMIN)

    - ONLY ACCESSIBLE BY SUPER_ADMIN

    DELETE https://tattoo-studio-fornesb.zeabur.app/api/users/1

    Auth:

    ``` bearer
        {
            eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJob2xhQGhvbGEuYWRpb3MiLCJpYXQiOjE3MjA1OTYyNzMsImV4cCI6MTcyMDYwMzQ3M30.QnL_HgGPVLOb0d4iUUuFCeSab1lp3SpOVV_js0T4ExY
        }
    ```
        
    This token is just an example, it doesn't work. <br/>
    I added delete on cascade to make it work, if not it will throw an error because user_id is foreing key (2 times) in appointment table.

- UPDATE USER ROLE(SUPER_ADMIN)

    - ONLY ACCESSIBLE BY SUPER_ADMIN

    PUT https://tattoo-studio-fornesb.zeabur.app/api/users/1/role

    Auth:

    ``` bearer
        {
            eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJob2xhQGhvbGEuYWRpb3MiLCJpYXQiOjE3MjA1OTYyNzMsImV4cCI6MTcyMDYwMzQ3M30.QnL_HgGPVLOb0d4iUUuFCeSab1lp3SpOVV_js0T4ExY
        }
    ```
        
    This token is just an example, it doesn't work. <br/>

    Body:

    ``` json
        {
              "roleId": 2
        }
    ```

    We have to just type the roleId we want, no other column will be update, just the role. 


</details>
<details>
<summary>Appointments</summary>

- CREATE APPOINTMENT

    - A USER CAN CREATE AN APPOINTMENT 

        POST https://tattoo-studio-fornesb.zeabur.app/api/appointments

    Auth:

        ``` bearer
            {
                eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJtYXJpYS5nYXJjaWFAZXhhbXBsZS5jb20iLCJpYXQiOjE3MjA4ODI3MDQsImV4cCI6MTcyMDg4OTkwNH0.CiQ7BQoE6PEUOHkneg3GBEhe_QXbVc5lgkVQmK9La_s
            }
        ```
    Body:

        ``` json
            {
                  "date":"27/07/2024",
                   "hour": "18:04",
                   "artistId":8,
                   "serviceId":2
            }
        ```

    You will get an error if the entered date is earlier than the current date or if the artistId is not role 1 or 2 (super_admin or artist) or if theres already booked an appointment for that artist and a certain time.

- UPDATE APPOINTMENT

    - A USER CAN UPDATE THEIR APPOINTMENT 

        PUT https://tattoo-studio-fornesb.zeabur.app/api/appointments

    Auth:

        ``` bearer
            {
                eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJtYXJpYS5nYXJjaWFAZXhhbXBsZS5jb20iLCJpYXQiOjE3MjA4ODI3MDQsImV4cCI6MTcyMDg4OTkwNH0.CiQ7BQoE6PEUOHkneg3GBEhe_QXbVc5lgkVQmK9La_s
            }
        ```

    This token is just an example, it doesn't work.

    Body:

        ``` json
            {
                "id":6,
                "serviceId":1
            }
        ```

    Id of the appointment is mandatory, the other options are optional.

- GET ALL APPOINTMENTS

    - A USER CAN SEE ALL THEIR APPOINTMENTS AND ITS INFO 

        GET https://tattoo-studio-fornesb.zeabur.app/api/appointments

    Auth:

        ``` bearer
            {
                eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJtYXJpYS5nYXJjaWFAZXhhbXBsZS5jb20iLCJpYXQiOjE3MjA4ODI3MDQsImV4cCI6MTcyMDg4OTkwNH0.CiQ7BQoE6PEUOHkneg3GBEhe_QXbVc5lgkVQmK9La_s
            }
        ```

        This token is just an example, it doesn't work.

      It will also show extra infor like your client (your own) and artist email, first name and service name

- GET APPOINTMENT BY ID

    - A USER CAN SEE AN APPOINTMENT AND ITS INFO BY THE ID THEY PICKED

        GET https://tattoo-studio-fornesb.zeabur.app/api/appointments/6

    Auth:

        ``` bearer
            {
                eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJtYXJpYS5nYXJjaWFAZXhhbXBsZS5jb20iLCJpYXQiOjE3MjA4ODI3MDQsImV4cCI6MTcyMDg4OTkwNH0.CiQ7BQoE6PEUOHkneg3GBEhe_QXbVc5lgkVQmK9La_s
            }
        ```

    This token is just an example, it doesn't work. The 6 in the endpoint is just an example of id, you can put the id you want your user have access to.

    It will also show extra infor like your client (your own) and artist email, first name and service name

</details>

<details>
<summary>Services</summary>

- GET ALL SERVICES

    - EVERYONE EVEN IF IT'S NOT LOGGED CAN RETRIEVE ALL SERVICES AND CONSULTING THEM

        GET https://tattoo-studio-fornesb.zeabur.app/api/services

- CREATE SERVICES (SUPER_ADMIN)

    - ONLY SUPER_ADMIN CAN CREATE A SERVICE

        POST https://tattoo-studio-fornesb.zeabur.app/api/services
    Auth:

        ``` bearer
            {
                eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJtYXJpYS5nYXJjaWFAZXhhbXBsZS5jb20iLCJpYXQiOjE3MjA4ODI3MDQsImV4cCI6MTcyMDg4OTkwNH0.CiQ7BQoE6PEUOHkneg3GBEhe_QXbVc5lgkVQmK9La_s
            }
        ```
    Body:

        ``` json
            {
                "serviceName": "Printed ilustrations",
                "description": "Printed illustrations of the designs that you can later tattoo"
            }
        ```

- UPDATE SERVICES (SUPER_ADMIN)

    - ONLY SUPER_ADMIN CAN UPDATE A SERVICE

        PUT https://tattoo-studio-fornesb.zeabur.app/api/services/2
    Auth:

        ``` bearer
            {
                eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJtYXJpYS5nYXJjaWFAZXhhbXBsZS5jb20iLCJpYXQiOjE3MjA4ODI3MDQsImV4cCI6MTcyMDg4OTkwNH0.CiQ7BQoE6PEUOHkneg3GBEhe_QXbVc5lgkVQmK9La_s
            }
        ```
    Body:

        ``` json
            {
                "serviceName": "Piercing jewelry",
                
            }
        ```

- DELETE SERVICES (SUPER_ADMIN)

    - ONLY SUPER_ADMIN CAN DELETE A SERVICE

        DELETE https://tattoo-studio-fornesb.zeabur.app/api/services/2
    Auth:

        ``` bearer
            {
                eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJtYXJpYS5nYXJjaWFAZXhhbXBsZS5jb20iLCJpYXQiOjE3MjA4ODI3MDQsImV4cCI6MTcyMDg4OTkwNH0.CiQ7BQoE6PEUOHkneg3GBEhe_QXbVc5lgkVQmK9La_s
            }
        ```

</details>

## Futures functionalities and things to improve
✅ More endpoints with more features<br/> 
🔲 Being able to choose your artist<br/> 
✅ Appointment date validation, preventing scheduling of appointments with dates earlier than the current date <br/>
✅ Validations to make sure the integrity of the database<br/>

## Author

- Esperanza Fornes - student Full Stack Developer Web
  - [GitHub](https://github.com/fornesborja)