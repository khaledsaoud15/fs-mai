exports.responseHandler = (res, statusCode, data = {}) => {
  return res.status(statusCode).json(data);
};
