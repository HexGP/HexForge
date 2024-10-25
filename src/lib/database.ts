import Surreal from 'surrealdb.js';


const db = new Surreal('http://127.0.0.1:8000/rpc');


async function connectToDatabase() {
    try {

        await db.signin({
            user: 'root',
            pass: 'root',
        });


        await db.use('test', 'test');

        console.log('Connected to SurrealDB');
    } catch (error) {
        console.error('Error connecting to SurrealDB:', error);
    }
}

connectToDatabase(); 