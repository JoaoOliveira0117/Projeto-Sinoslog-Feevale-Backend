/**
 * @template T
 */
class Service {
  /**
   *
   * @param {Model<T>} model
   */
  constructor(model) {
    this.model = model;
  }

  /**
   * @returns {Promise<T[]>}
   */
  async getAll() {
    return this.model.find({});
  }

  /**
   * @param {ObjectId} id
   * @returns {Promise<T>}
   */
  async getById(id) {
    return this.model.findById(id);
  }

  /**
   * @param {Object} query
   * @returns {Promise<T>}
   */
  async getByProperty(query) {
    return this.model.findOne(query).exec();
  }

  /**
   * @param {T} data
   * @returns {Promise<T>}
   */
  async create(data) {
    return this.model.create(data);
  }

  /**
   *
   * @param {ObjectId} id
   * @param {Partial<T>} data
   * @returns
   */
  async updateById(id, data) {
    return this.model.findOneAndUpdate({ _id: id }, data, { new: true });
  }

  /**
   *
   * @param {ObjectId} id
   * @returns
   */
  async deleteById(id) {
    return this.model.deleteOne({ _id: id });
  }
}

export default Service;
