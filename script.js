function calculateAge() {
    let dob = document.getElementById("dob").value;
    
    if (dob === "") {
        document.getElementById("result").innerHTML = "Please select your date of birth!";
        return;
    }

    let dobDate = new Date(dob);
    let today = new Date();

    let ageYears = today.getFullYear() - dobDate.getFullYear();
    let ageMonths = today.getMonth() - dobDate.getMonth();
    let ageDays = today.getDate() - dobDate.getDate();

    // Adjust months & years if necessary
    if (ageDays < 0) {
        ageMonths--;
        let prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
        ageDays += prevMonth.getDate();
    }

    if (ageMonths < 0) {
        ageYears--;
        ageMonths += 12;
    }

    document.getElementById("result").innerHTML = 
        `You are <span>${ageYears}</span> years, <span>${ageMonths}</span> months, and <span>${ageDays}</span> days old.`;
}
