// form and form events

const form = document.querySelector(".feedback-form");

// regular expression - regEx
const usernamePattern =/^[a-z0-9]{6,10}$/ ;
const feedbackPattern = /^.{20,50}$/;

form.addEventListener("submit", (e) => {
    e.preventDefault(); // prevent submitting and refreshing of form upon clicking submit
    // console.log(e);
    // console.log(form.username.value); // value of username input box
    // console.log(form.feedback.value); // value we enter in textrea after submit will show
    
    const userResult = usernamePattern.test(form.username.value);
    const feedbackResult = feedbackPattern.test(form.feedback.value);

    if(userResult && feedbackResult){
        console.log("Worked! :)")
    }else{
        console.log("Not Worked :(")
    }

    console.log(userResult, feedbackResult);    
});



