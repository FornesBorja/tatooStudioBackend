import serviceSeeder from "./dbServices";
import roleSeeder from "./roleSeeder";

(async () => {
    console.log("Starting seeders...");
    await roleSeeder();
    await serviceSeeder();
 })();
 
 