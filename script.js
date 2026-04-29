// event listener after clicking button
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

  // validation of input
  if (parseInt(day) === "" || parseInt(month) === "" || parseInt(year) === "" || gender.value === "") {
    alert("Please fill in all the data");
    return;
  } else if (day < 1 || day > 31) {
    alert("Please enter a valid date between 1 and 31");
    return;
  } else if (month < 1 || month > 12) {
    alert("Please enter a valid month between 1 and 12");
    return;
  } else if (year < 1900 || year > 2026) {
    alert("Please enter a valid year between 1900 and 2026");
    return;
  }

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

  // checking the result of d and matching it with the correct akan name
  let akanName;
  if (gender.value === "Male") {
    akanName = maleNames[d];
  } else {
    akanName = femaleNames[d];
  }
  // Display the Akan name
  const resultBox = document.querySelector("#result");
  resultBox.textContent = "You were born on a: " + dayNames[d] + " and your Akan name is: " + akanName;
}
