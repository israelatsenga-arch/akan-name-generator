button.addEventListener("click", (event) => {
  // prevent form from refreshing page
  event.preventDefault();
  getAkanName();
});

function getAkanName() {
  //  retrieve user input
  const day = parseInt(document.querySelector("#date").value);
  const month = parseInt(document.querySelector("#month").value);
  const year = parseInt(document.querySelector("#year").value);
    const gender = document.querySelector('select[name="gender"]');
    console.log(gender)

  // extract CC & YY
  const CC = Math.floor(year / 100);
  const YY = year % 100;
  const MM = month;
  const DD = day;

  let d = (CC / 4 - 2 * CC - 1 + (5 * YY) / 4 + (26 * (MM + 1)) / 10 + DD) % 7;
  d = Math.floor(d);

  if (d < 0) {
    d = (d + 7) % 7;
  }
  //  Akan names
  const maleNames = [
    "Kwasi",
    "Kwadwo",
    "Kwabena",
    "Kwaku",
    "Yaw",
    "Kofi",
    "Kwame",
  ];
  const femaleNames = [
    "Akosua",
    "Adwoa",
    "Abenaa",
    "Akua",
    "Yaa",
    "Afua",
    "Ama",
  ];
  const dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let akanName;
  if (gender.value === "Male") {
    akanName = maleNames[d];
  } else {
    akanName = femaleNames[d];
  }
  // Display the Akan name
  const resultBox = document.getElementById("result");
  resultBox.innerHTML =
    "your Akan name is: " + akanName + " and you were born on a " + dayNames[d];
  resultBox.classList.remove("hidden");
  resultBox.scrollIntoView({ behavior: "smooth" });
}
