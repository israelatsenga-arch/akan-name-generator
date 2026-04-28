function getAkanName() {
    // retrieval of input
    const dayOfTheWeek = document.querySelector("#date").value
    const month = document.querySelector("#month").value
    const year = document.querySelector("#year").value
    const gender =document.querySelector("#gender").value
}
// validation of input
if (dayOfTheWeek === "" || month === "" || year === "" || gender === "") {
    alert("Please fill in all the data")
}
else if (dayOfTheWeek < 1 || dayOfTheWeek > 31) {
    alert("Please enter a valid date")
}
else if (month < 1 || month > 12) {
    alert("Please enter a valid month")
}
else if (year < 1900 || year > 2026) {
    alert("Please enter a valid year")  
}
