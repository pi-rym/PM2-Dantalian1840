//Función de orden superior -> Recibe una función y la mejora, el controlador manejará errores

const catchAsync = (controller) => {
  return (req, res, next) => {
    controller(req, res).catch((err) => next(err));
  };
};

module.exports = catchAsync;
