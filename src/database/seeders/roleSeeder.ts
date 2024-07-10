import { AppDataSource } from "../database";
import { role } from "../models/role";

const userSeeder = async () => {
    try {
    await AppDataSource.initialize()

    const tattoo_artist = new role();
    tattoo_artist.name = "tattoo_artist";
    await tattoo_artist.save()

    const super_admin = new role();
    super_admin.name = "super_admin";
    await super_admin.save()

    const user = new role();
    user.name = "user";
    await user.save()

    console.log('===========================');
    console.log('Role seeder successfully');
    console.log('===========================');
  } catch (error: any) {
    console.log('===========================');
    console.log('ERROR ROLE SEEDER', error.message);
    console.log('===========================');
  } finally {
    await AppDataSource.destroy();
  }
}

export default userSeeder;