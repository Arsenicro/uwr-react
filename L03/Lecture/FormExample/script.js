const form = document.getElementById("quiz-form");
const input = document.getElementById("answer-input");
const submitBtn = document.getElementById("submit-btn");
const errorMessage = document.getElementById("error-message");
const successMessage = document.getElementById("success-message");
const quizContainer = document.getElementById("quiz-container");

function setTypingState() {
  // Logic: Enable button if not empty
  if (input.value.trim().length > 0) {
    submitBtn.disabled = false;
  } else {
    submitBtn.disabled = true;
  }

  // Logic: Hide error when user starts correcting the mistake
  // Checking style.display directly (imperative)
  if (errorMessage.style.display === "block") {
    errorMessage.style.display = "none";
    input.style.borderColor = "";
  }
}

function setSubmittingState() {
  submitBtn.disabled = true;
  submitBtn.textContent = "Checking...";
  input.disabled = true;
}

function setErrorState() {
  // Re-enable form
  submitBtn.disabled = false;
  submitBtn.textContent = "Submit Answer";
  input.disabled = false;

  // Show error
  errorMessage.style.display = "block";
  input.style.borderColor = "red";

  // Focus back on input
  input.focus();
}

function setSuccessState() {
  // Hide the form container
  quizContainer.style.display = "none";

  // Show success message
  successMessage.style.display = "block";
}

// Input Event - Handles 'Typing' state and transitions out of 'Error' state
input.addEventListener("input", function () {
  setTypingState();
});

// Submit Event - Handles transition to 'Submitting' state, then 'Success' or 'Error'
form.addEventListener("submit", function (event) {
  event.preventDefault();

  setSubmittingState();

  const answer = input.value.trim().toLowerCase();

  // Simulate network request with setTimeout
  setTimeout(() => {
    if (answer === "paris") {
      setSuccessState();
    } else {
      setErrorState();
    }
  }, 1500); // 1.5s delay to show loading state
});
