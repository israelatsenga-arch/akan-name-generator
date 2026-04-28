function getAkanName() {
    // retrieval of input
    const dayOfTheWeek = document.querySelector("#date").value
    const month = document.querySelector("#month").value
    const year = document.querySelector("#year").value
    const gender =document.querySelector("#gender").value
}

// calculation of the day of the week
const CC = Math.floor(year / 100);
const YY = year % 100;
const MM = month;
const DD = dayOfTheWeek;
let d = Math.floor((CC / 4) - (2 * CC) - 1 + (5 * YY / 4) + (26 * (MM + 1) / 10) + DD) % 7;

if (d < 0) {
    d = (d + 7) % 7;
}
// Akan names
let maleAkanNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
let femaleAkanNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
// gettin Akan name
let akanName;
if (gender.value === "male") {
    akanName = maleAkanNames[d];
} else {
    akanName = femaleAkanNames[d]
}

