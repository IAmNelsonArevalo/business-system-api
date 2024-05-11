import { DataSource } from 'typeorm'
import * as dotenv from 'dotenv'

dotenv.config();

const appDataSource: DataSource = new DataSource({
    type: 'mongodb',
    url: 'mongodb+srv://root:Angie21Ximena19@businesssystem.hws3ffk.mongodb.net/?retryWrites=true&w=majority&appName=businessSystem',
    username: 'nelsonarevalo714',
    password: 'iyCK1yiaLofyR5Qu',
    port: 27017,
    database: 'business_system',
    useNewUrlParser: true,
    synchronize: true,
    logging: true,
    entities: [__dirname, '../app/models/*.ts']
});

export default appDataSource;