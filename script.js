const button = document.querySelector("button");
button.addEventListener("click", (event) => {
    event.preventDefault();
});
function getAkanName() {
    // retrieval of input
    const dayOfTheWeek = document.querySelector("#date").value
    const month = document.querySelector("#month").value
    const year = document.querySelector("#year").value
    const gender = document.querySelector("#gender").value

    // calculation of the day of the week
   const DD = parseInt(document.querySelector("#date").value);
    const MM = parseInt(document.querySelector("#month").value);
    const year = parseInt(document.querySelector("#year").value);
    const gender = document.querySelector("#gender").value;
    let d = (DD + Math.floor(2.6 * MM - 0.2) - 2 * Math.floor(year / 100) + year + Math.floor(year / 4) + Math.floor(Math.floor(year / 100) / 4)) % 7;

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
    // Akan name output
    document.getElementById("result").textContent = `Your Akan name is ${akanName}`;
    document.getElementById("Akan-Name").value = akanName;
}