import serviceSeeder from "./serviceSeeder";
import roleSeeder from "./roleSeeder";
import userSeeder from "./userSeeder";
import appointmentSeeder from "./appointmentSeeder";

(async () => {
    console.log("Starting seeders...");
    await roleSeeder();
    await serviceSeeder();
    await userSeeder();
    await appointmentSeeder();
 })();
 
 