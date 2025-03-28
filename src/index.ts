import { AppDataSource } from "./data-source"
import User from "./models/User"
import "reflect-metadata"

const dataSource = AppDataSource;


const user = new User()


user.tgId = BigInt(231312313132);


async function saveUser() {
    const user = new User();
    user.tgId = BigInt(231312313132);
    await dataSource.manager.save(user);
}

AppDataSource.initialize()
  .then(() => {
    saveUser().catch(console.error);
  })
  .catch(error => console.log("Data Source initialization error:", error));




