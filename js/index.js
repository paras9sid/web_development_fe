// form and form events

const form = document.querySelector(".feedback-form");
form.addEventListener("submit", (e) => {
    e.preventDefault(); // prevent submitting and refreshing of form upon clicking submit
    // console.log(e);
    console.log(form.username.value); // value of username input box
    console.log(form.feedback.value); // value we enter in textrea after submit will show
});