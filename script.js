function calculateAge() {
    let dt = document.getElementById("dob").value;
    if (!dt) {
        alert("Please select a date of birth.");
        return;
    }

    let dob = new Date(dt);
    let tod = new Date();

    let years = tod.getFullYear() - dob.getFullYear();
    let months = tod.getMonth() - dob.getMonth();
    let days = tod.getDate() - dob.getDate();

    // Adjust years and months
    if (months < 0 || (months === 0 && days < 0)) {
        years--;
        months += 12;
    }

    // Adjust days
    if (days < 0) {
        let previousMonth = new Date(tod.getFullYear(), tod.getMonth(), 0); // Last day of the previous month
        days += previousMonth.getDate(); // Add days from the previous month
        months--; // Decrement the month count
    }

    document.getElementById("result").innerText = "Age: " + years + " years, " + months + " months, and " + days + " days.";
}
