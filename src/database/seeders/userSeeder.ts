import { AppDataSource } from "../database";
import { user } from "../models/user";
import bcrypt from 'bcrypt';

const userSeeder = async () => {
    try {
        await AppDataSource.initialize()

        const users = [
            { firstName: "Juan", lastName: "Pérez", email: "juan.perez@example.com", password: "Pass1234!", roleId: 3 },
            { firstName: "María", lastName: "García", email: "maria.garcia@example.com", password: "Secure#567", roleId: 3 },
            { firstName: "Luis", lastName: "López", email: "luis.lopez@example.com", password: "Qwerty@89", roleId: 3 },
            { firstName: "Ana", lastName: "Martínez", email: "ana.martinez@example.com", password: "Hello&234", roleId: 3 },
            { firstName: "Carlos", lastName: "Hernández", email: "carlos.hernandez@example.com", password: "World$876", roleId: 3 },
            { firstName: "Laura", lastName: "González", email: "laura.gonzalez@example.com", password: "Magic*091", roleId: 3 },
            { firstName: "Jorge", lastName: "Rodríguez", email: "jorge.rodriguez@example.com", password: "Sunshine#45", roleId: 1 },
            { firstName: "Sofía", lastName: "Fernández", email: "sofia.fernandez@example.com", password: "Moonlight@12", roleId: 2 },
            { firstName: "Miguel", lastName: "Sánchez", email: "miguel.sanchez@example.com", password: "Starry&567", roleId: 3 },
            { firstName: "Lucía", lastName: "Ramírez", email: "lucia.ramirez@example.com", password: "Dream$234", roleId: 3 },
            { firstName: "Pedro", lastName: "Torres", email: "pedro.torres@example.com", password: "Vision#890", roleId: 3 },
            { firstName: "Elena", lastName: "Flores", email: "elena.flores@example.com", password: "Future@345", roleId: 3 },
            { firstName: "Diego", lastName: "Vásquez", email: "diego.vasquez@example.com", password: "Nature&789", roleId: 3 },
            { firstName: "Marta", lastName: "Cruz", email: "marta.cruz@example.com", password: "Ocean$567", roleId: 2 },
            { firstName: "Fernando", lastName: "Morales", email: "fernando.morales@example.com", password: "Mountain#234", roleId: 3 },
            { firstName: "Patricia", lastName: "Ortiz", email: "patricia.ortiz@example.com", password: "River@456", roleId: 3 },
            { firstName: "Alejandro", lastName: "Giménez", email: "alejandro.gimenez@example.com", password: "Forest&789", roleId: 2 },
            { firstName: "Isabel", lastName: "Mendoza", email: "isabel.mendoza@example.com", password: "Desert$345", roleId: 3 },
            { firstName: "Rafael", lastName: "Romero", email: "rafael.romero@example.com", password: "City#123", roleId: 3 },
            { firstName: "Beatriz", lastName: "Herrera", email: "beatriz.herrera@example.com", password: "Village@456", roleId: 2 },
            { firstName: "Hugo", lastName: "Castro", email: "hugo.castro@example.com", password: "Country&789", roleId: 3 },
            { firstName: "Victoria", lastName: "Rivas", email: "victoria.rivas@example.com", password: "Galaxy$567", roleId: 3 },
            { firstName: "Gonzalo", lastName: "Núñez", email: "gonzalo.nunez@example.com", password: "Universe#345", roleId: 2 }
        ];
        
        const newUsers = await createBooks(users);

        await user.save(newUsers);

        console.log('===========================');
        console.log('Users seeder successfully');
        console.log('===========================');

    } catch (error: any) {

        console.log('===========================');
        console.log('ERROR USERS SEEDER', error.message);
        console.log('===========================');

    } finally {
        await AppDataSource.destroy();
    }
}

const createBooks = async (users: any) => {  
    const newUsers: user[] = []
  
    users.forEach((element: any, index: any) => {    
      const users = new user();
      users.id=index+1;
      users.firstName = element.firstName;
      users.lastName = element.lastName;
      users.email= element.email;
      let hashedPasword:string=bcrypt.hashSync(element.password, 10);
      users.passwordHash= hashedPasword;
      users.roleId=element.roleId;
      newUsers.push(users)
    });
  
    return newUsers;
}

export default userSeeder;