const validateMovie = (req, res, next) => {
  const { title, poster, director, year, duration, genre, rate } = req.body;
  const yearString = year.toString();

  if (
    ![title, poster, director, year, duration, genre, rate].every(
      (item) => item !== undefined && item !== null
    )
  ) {
    return res.status(400).json({
      error: "Fill all imputs",
    });
  } else if (yearString.length === 4) {
    next();
  } else {
    return res.status(400).json({
      error: "Invalid year",
    });
  }
};

module.exports = validateMovie;
