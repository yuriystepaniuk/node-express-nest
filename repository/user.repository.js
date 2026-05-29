import { read, write } from '../services/fs.services.js';

class UserRepository {
    async getAll() {
        return read();
    }
    
    async create(user) {
        const users = await read();
        const newUser = {
            id: user.length ? users[users.length - 1].id + 1 : 1,
            name: user.name,
            surname: user.surname,
            age: user.age,
            ...user,
        };
        users.push(newUser);
        await write(users);
        return newUser;
    }

    async getById(id) {
        const users = await read();
        return users.find(user => user.id === Number(id));
    }      
}

export default new UserRepository();
