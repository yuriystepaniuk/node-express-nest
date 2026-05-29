import userRepository from '../repository/user.repository.js';

class UserService {
    async getAll() {
        return await userRepository.getAll();
    }

    async create(user) {
        return await userRepository.create(user);
    }

    async getById(id) {
        return await userRepository.getById(id);    
    }
}

const userService = new UserService();

export default userService;
 