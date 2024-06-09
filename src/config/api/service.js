import NotFoundError from '../../http/errors/notFoundError.js';

class Service {
  constructor(model) {
    this.model = model;
  }

  async getAll() {
    return this.model.find({});
  }

  async getById(id) {
    const document = await this.model.findById(id);

    if (!document) {
      throw new NotFoundError(`${this.model.modelName} does not exist`);
    }

    return document;
  }

  async create(data) {
    return this.model.create(data);
  }

  async updateById(id, data) {
    return this.model.findOneAndUpdate({ _id: id }, data, { new: true });
  }

  async deleteById(id) {
    return this.model.deleteOne({ _id: id });
  }
}

export default Service;
