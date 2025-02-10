const MyError = (res, statusCode, errorMessage, errorDetails = null) => {
  const errorResponse = {
    message: errorMessage,
  };
  if (errorDetails) {
    errorResponse.error = errorDetails;
  }
  res.status(statusCode).send(errorResponse);
};

module.exports = MyError;
