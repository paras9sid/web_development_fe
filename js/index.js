// form and form events

const form = document.querySelector(".feedback-form");
const p = document.querySelector("p");

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
        p.setAttribute("class", "success"); 
        p.textContent = "Feedback Submitted!, ty! :)"
    }else{
        p.setAttribute("class", "error");
        p.textContent = "Pl check uname and feedback again.. :("
    }

    console.log(userResult, feedbackResult);    
});

form.username.addEventListener("keyup", (e) => { // keyup - user releases the key
    // console.log(e);
    // console.log(e.target.value);
    const userResult = usernamePattern.test(e.target.value);
    if(userResult){
        form.username.setAttribute("class", "accepted");
    }else{
        form.username.setAttribute("class", "rejected");
    }
    // console.log(userResult);

});


form.feedback.addEventListener("keyup", (e) => { // keyup - user releases the key
    const feedbackResult = feedbackPattern.test(e.target.value);
    if(feedbackResult){
        form.feedback.setAttribute("class", "accepted");
    }else{
        form.feedback.setAttribute("class", "rejected");
    }
    // console.log(feedbackResult);

});

