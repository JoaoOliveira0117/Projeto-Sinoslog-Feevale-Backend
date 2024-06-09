import { StatusCodes } from 'http-status-codes';

const asyncHandler = (Controller) => {
  return function (req, res) {
    const controller = new Controller(req, res);
    controller.handle().catch((err) =>
      new Controller(req, res).error(
        err.status || StatusCodes.INTERNAL_SERVER_ERROR,
        {
          raw: err.message,
        }
      )
    );
  };
};

export default asyncHandler;
