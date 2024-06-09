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
    return this.model.updateOne({ id }, { data });
  }

  async deleteById(id) {
    return this.model.deleteOne({ id });
  }
}

export default Service;
