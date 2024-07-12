import { AppDataSource } from "../database";
import { Appointment } from "../models/appointment";

const appointmentSeeder = async () => {
    try {
    await AppDataSource.initialize()

    const a1 = new Appointment();
    a1.appointmentDate = new Date(2024, 7, 22, 14, 30, 0);
    a1.artistId = 20;
    a1.clientId = 6;
    a1.serviceId=1;    
    await a1.save()

    const a2 = new Appointment();
    a2.appointmentDate = new Date(2024, 7, 22, 17, 30, 0);
    a2.artistId = 8;
    a2.clientId = 9;
    a2.serviceId=2;    
    await a2.save()

    const a3 = new Appointment();
    a3.appointmentDate = new Date(2024, 7, 23, 10, 30, 0);
    a3.artistId = 20;
    a3.clientId = 1;
    a3.serviceId=1;    
    await a3.save()

    const a5 = new Appointment();
    a5.appointmentDate = new Date(2024, 7, 23, 17, 0, 0);
    a5.artistId = 14;
    a5.clientId = 5;
    a5.serviceId=1;    
    await a5.save()

    const a6 = new Appointment();
    a6.appointmentDate = new Date(2024, 7, 22, 14, 30, 0);
    a6.artistId = 23;
    a6.clientId = 7;
    a6.serviceId=2;    
    await a6.save()

    console.log('===========================');
    console.log('Appointment seeder successfully');
    console.log('===========================');
  } catch (error: any) {
    console.log('===========================');
    console.log('ERROR APPOINTMENT SEEDER', error.message);
    console.log('===========================');
  } finally {
    await AppDataSource.destroy();
  }
}

export default appointmentSeeder;