import{DataSource} from 'typeorm'
import { Medias } from './entitie/media'
import { Users } from './entitie/user'
export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "1234",
    database: "dbmedia",
    entities: [Medias,Users],
    synchronize:true,
    logging: true,
})