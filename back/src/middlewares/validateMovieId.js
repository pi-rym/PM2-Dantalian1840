const mongoose = require("mongoose");

const validationId = (req, res, next) => {
  const { id } = req.params;
  if (mongoose.Types.ObjectId.isValid(id)) {
    next();
  } else {
    next({ message: "Invalid ID", statusCode: 400 });
  }
};

module.exports = validationId;
