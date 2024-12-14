const interestForm = document.getElementById("interest-Form");

interestForm.addEventListener("submit", function calculate(e) {
    e.preventDefault();

    const totalAmount = document.getElementById("total-amount");
    const principalInput = document.getElementById("principal"); // Corrected ID
    const rateInput = document.getElementById("rate");
    const yearsInput = document.getElementById("years");

    let principle = Number(principalInput.value); // Corrected variable
    let rate = Number(rateInput.value / 100);
    let years = Number(yearsInput.value);

    // Validate principle
    if (principle < 0 || isNaN(principle)) {
        principle = 0;
        principalInput.value = 0;
    }

    // Validate rate
    if (rate < 0 || isNaN(rate)) {
        rate = 0;
        rateInput.value = 0;
    }

    // Validate years
    if (years < 0 || isNaN(years)) {
        years = 0;
        yearsInput.value = 0;
    }

    // Calculate result
    const result = principle * Math.pow(1 + rate, years);

    // Display result
    totalAmount.innerHTML = `Your investment will be worth <strong>${result.toLocaleString(undefined, {
        style: "currency",
        currency: "USD",
    })}</strong> with simple interest.`;
    
});
