var titles = {
  "gearbox":"Gearbox.",
  "aoa":"AoA.",
  "arctic":"Permafrost.",
  "alpha-light":"Alpha-Light.",
  "bot":"Stock Bot."
}

var descriptions = {
  "gearbox":"(it's just a gearbox)",
  "aoa":"Wind tunnel validation for CFD",
  "arctic":"Energy-Balance model for the Arctic",
  "alpha-light":"EEG-controlled lightbulb",
  "bot":"Automated portfolio analytics"
};

localStorage.setItem("titles", JSON.stringify(titles));
localStorage.setItem("descriptions", JSON.stringify(descriptions));
