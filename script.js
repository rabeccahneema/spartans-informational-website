const review=document.getElementById("review");
const userName=document.getElementById("user-name");
const leftIcon=document.getElementsByClassName("left-icon")[0];
const rightIcon=document.getElementsByClassName("right-icon")[0];


leftIcon.addEventListener("click",()=>{
    review.textContent="I felt the cooperative treated me fairly throughout the loan process, and they were understanding when I had a slight delay in repayment.";
    userName.textContent="Uwimana Francine";
 })

rightIcon.addEventListener("click",()=>{
    review.textContent="The cooperative kept me informed about all loan terms and repayment schedules, which helped me plan my finances well.";
    userName.textContent="Ndahayo Innocent";
 })
