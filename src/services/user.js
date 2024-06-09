import Service from '../config/api/service.js';
import User from '../models/user.js';

class UserService extends Service {
  constructor() {
    super(User);
  }

  create(data) {
    return this.model.create(data);
  }
}

export default UserService;
