import { MongoClient } from 'mongodb';
import { Adb, Apass, Ausuario } from '../config/variables.js';


export async function con(){
    try {
        const uri = `mongodb+srv://${Ausuario}:${Apass}@cluster0.hoapju2.mongodb.net/${Adb}`
        const option = {
            useNewUrlParser: true,
            useUnifiedTopology: true
        };
        const client = await MongoClient.connect(uri, option)
        return client.db();

    } catch (error) {
        return {status: 500, message: error}
    }
}