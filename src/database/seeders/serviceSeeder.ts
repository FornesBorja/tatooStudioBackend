import { AppDataSource } from "../database";
import { service } from "../models/service";

const serviceSeeder = async () => {
    try {
    await AppDataSource.initialize()

    const s1 = new service();
    s1.name = "Tattoo";
    s1.description="High-quality custom tattoos designed by talented artists."
    await s1.save()

    const s2 = new service();
    s2.name = "Piercing";    
    s2.description="It offers professional and safe piercing services performed by qualified experts."
    await s2.save()

    console.log('===========================');
    console.log('Service seeder successfully');
    console.log('===========================');
  } catch (error: any) {
    console.log('===========================');
    console.log('ERROR SERVICE SEEDER', error.message);
    console.log('===========================');
  } finally {
    await AppDataSource.destroy();
  }
}

export default serviceSeeder;