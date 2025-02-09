const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const feedback = document.getElementById("feedback");
const rating = document.getElementById("rating");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    validateInputs();
});

function validateInputs() {
    const usernameVal = username.value.trim();
    const emailVal = email.value.trim();
    const feedbackVal = feedback.value.trim();
    const ratingVal = rating.value.trim();

    if (usernameVal === "") {
        setError(username, "Username is required");
    } else {
        setSuccess(username);
    }

    if (emailVal === "") {
        setError(email, "Email is required");
    } else if (!validateEmail(emailVal)) {
        setError(email, "Please enter a valid email");
    } else {
        setSuccess(email);
    }

    if (feedbackVal === "") {
        setError(feedback, "Please give your feedback");
    } else if (feedbackVal.length > 150) {
        setError(feedback, "Feedback must be below 150 characters");
    } else {
        setSuccess(feedback);
    }

    if (ratingVal === "") {
        setError(rating, "Rating is required");
    } else if (isNaN(ratingVal) || ratingVal < 1 || ratingVal > 5) {
        setError(rating, "Please enter a valid rating (1 to 5)");
    } else {
        setSuccess(rating);
    }
}
function setError(element, message) {
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector(".error");

    errorElement.innerText = message;
    inputGroup.classList.add("error");
    inputGroup.classList.remove("success");
}
function setSuccess(element) {
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector(".error");

    errorElement.innerText = "";
    inputGroup.classList.add("success");
    inputGroup.classList.remove("error");
}
const validateEmail = (email) => {
    return String(email)
        .toLowerCase()
        .match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/);
};