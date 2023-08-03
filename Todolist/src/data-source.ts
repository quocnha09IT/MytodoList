import "reflect-metadata"
import { DataSource } from "typeorm"
import { MyTodoList } from "./entity/TodoList"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "123456",
    database: "mydb",
    synchronize: true,
    logging: false,
    entities: [MyTodoList],
    migrations: [],
    subscribers: [],
})
