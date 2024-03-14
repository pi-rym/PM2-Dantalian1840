const validateMovie = (req, res, next) => {
  const { title, poster, director } = req.body;

  if (![title, poster, director]) {
    return res.status(200).json({
      error: "Faltan datos",
    });
  } else {
    next();
  }
};

module.exports = validateMovie;
