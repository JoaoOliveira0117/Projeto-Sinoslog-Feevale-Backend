import { StatusCodes } from 'http-status-codes';

class Controller {
  /**
   * @constructor
   * @param {ExpressRequest} req
   * @param {ExpressResponse} res
   */
  constructor(req, res) {
    this.req = req;
    this.res = res;
  }

  getSuccessStatusCode() {
    const isPostOrPut = ['POST', 'PUT'].includes(this.req.method);
    return isPostOrPut ? StatusCodes.CREATED : StatusCodes.OK;
  }

  /**
   *
   * @param {Object} filter
   * @returns Object
   */
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

  /**
   *
   * @param {Object} data
   * @returns ExpressResponse
   */
  success(data) {
    return this.res.status(this.getSuccessStatusCode()).json({ data });
  }

  /**
   *
   * @param {StatusCodes} statusCode
   * @param {Object} errors
   * @returns ExpressResponse
   */
  error(statusCode, errors) {
    return this.res.status(statusCode).json({ errors });
  }

  async handle() {
    throw Error('not implemented');
  }

  async send() {
    this.handle().catch((err) =>
      this.error(err.status || StatusCodes.INTERNAL_SERVER_ERROR, {
        raw: err.message,
      })
    );
  }
}

export default Controller;
