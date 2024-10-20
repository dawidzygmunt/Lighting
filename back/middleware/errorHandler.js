const { CustomAPIError } = require("../errors/customErrors")
const errorHandlerMiddleware = (err, req, res, next) => {
  if (err instanceof CustomAPIError) {
    console.log(err)
    return res.status(err.statusCode).json({ msg: err.message })
  }
  return res
    .status(500)
    .json({ msg: "Something went wrong, please try again" + err })
}

module.exports = errorHandlerMiddleware
