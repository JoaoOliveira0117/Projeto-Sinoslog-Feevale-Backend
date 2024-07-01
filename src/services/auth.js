import Service from '../config/api/service.js';
import UnprocessableEntity from '../http/errors/unprocessableEntity.js';
import User from '../models/user.js';
import { generateToken } from '../utils/jwt.js';

/**
 * @extends Service<import('../models/user.js')>
 */
class AuthService extends Service {
  constructor() {
    super(User);
  }

  authenticateUser(user) {
    const token = generateToken(user.id);
    return token;
  }

  async create(data) {
    const user = await this.model.findOne({ email: data.email });
    const isMatch = await user.comparePassword(data.password);

    if (!isMatch) {
      throw new UnprocessableEntity('User password does not match');
    }

    const token = this.authenticateUser(user);

    return {
      email: user.email,
      token,
    };
  }
}

export default AuthService;
