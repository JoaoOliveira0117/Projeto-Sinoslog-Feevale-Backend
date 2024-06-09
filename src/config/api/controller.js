import { StatusCodes } from 'http-status-codes';

class Controller {
  constructor(req, res) {
    this.req = req;
    this.res = res;

    this.send();
  }

  getSuccessStatusCode() {
    const isPostOrPut = ['POST', 'PUT'].includes(this.req.method);
    return isPostOrPut ? StatusCodes.CREATED : StatusCodes.OK;
  }

  filterQuery(filter) {
    const queryParams = {};

    for (const key in filter) {
      if (Object.prototype.hasOwnProperty.call(filter, key)) {
        const value = this.req.query[key];
        if (value !== undefined) {
          queryParams[key] = filter[key](value);
        }
      }
    }

    return queryParams;
  }

  success(data) {
    return this.res.status(this.getSuccessStatusCode()).json({ data });
  }

  async handle() {
    throw Error('not implemented');
  }

  async send() {
    this.handle();
  }
}

export default Controller;
