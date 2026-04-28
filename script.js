function getAkanName() {
    //  retrieve user input
    const day = parseInt(document.querySelector('#day').value);
    const month = parseInt(document.querySelector('#month').value);
    const year = parseInt(document.querySelector('#year').value);
    const gender = document.querySelector('input[name="gender"]:checked');

    // extract CC & YY
    const CC = Math.floor(year / 100);
    const YY = year % 100;
    const MM = month;
    const DD = day;

    let d = ((CC / 4 - 2 * CC - 1) + (5 * YY / 4) + ((26 * (MM + 1)) / 10) + DD) % 7;
    d = Math.floor(d);

    if (d < 0) {
        d = (d + 7) % 7;
    }
    //  Akan names
    const maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    const femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
    const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let akanName;
    if (gender.value === "Male") {
        akanName = maleNames[d];
    } else {
        akanName = femaleNames[d];
    }
    // Display the Akan name
    document.querySelector('#result').textContent = `You were born on a ${dayNames[d]}, your Akan name is ${akanName}.`;
}