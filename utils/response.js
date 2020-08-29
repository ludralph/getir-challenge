const response = (res, status, code, msg, otherFields) => {
  const output = { code, msg, ...otherFields };
  res.status(status).json(output);
};

const success = (res) => (record) => {
  response(res, 200, 0, "Success", record);
};

const clientErrorHandler = () => {
  return  (err, req, res, next) => {
    if (req.bodymen && req.bodymen.error) {
      response(res, 400, 1, req.bodymen.error.message, {
        error: req.bodymen.error,
      });
    } else {
      next(err);
    }
  };
};

const serverErrorHandler = () => {
  return (err, req, res, _next) => {
    response(res, 500, 2, err.msg || err.message || "Unknown error occurred", {
      error: err,
    });
  };
};

const notFoundHandler = () => {
  return (req, res) => {
    response(res, 404, 3, "Not found");
  };
};

module.exports = {
  success,
  clientErrorHandler,
  serverErrorHandler,
  notFoundHandler
}