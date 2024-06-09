class Service {
  constructor(model) {
    this.model = model;
  }

  async getAll() {
    return this.model.find({});
  }

  async getById(id) {
    return this.model.findById(id);
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
