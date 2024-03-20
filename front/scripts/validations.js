const validationNumbers = (year, rate) => {
  if (isNaN(year)) {
    alert("Year is not a number.");
    return;
  }
  if (isNaN(rate)) {
    alert("Rate is not a number");
    return;
  }
  if (year <= 1890) {
    alert("Year invalid. Please fill with a year after 1890. ");
    return;
  }
  if (year >= 2025) {
    alert("Year invalid. Please fill with a year before 2025. ");
    return;
  }
};

const validationFilledForm = (
  title,
  director,
  poster,
  year,
  duration,
  genre,
  rate
) => {
  if (
    !title ||
    !director ||
    !poster ||
    !year ||
    !duration ||
    genre.length === 0 ||
    !rate
  ) {
    alert("Please fill all the inputs.");
    return;
  }
};

const validationRate = (rate) => {
  if (rate <= 0 && rate >= 10) {
    alert("Please fill rate between 0-10 values");
    return;
  }
};

const validationLink = (link) => {
  const validFormat = /\.(jpg|png|webp)$/i;

  if (!validFormat.test(link)) {
    alert("Please use a link with jpg, png or webp");
    return;
  }
};

module.exports = {
  validationNumbers,
  validationFilledForm,
  validationRate,
  validationLink,
};
