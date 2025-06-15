const numberBtns = document.querySelectorAll(".number");
const submitBtn = document.getElementById("submit");
const quest = document.querySelector(".quest");
const answer = document.querySelector(".answer");
const rateAgain = document.getElementById("rate-again");
const selectedRatings = document.getElementById("select");
let bRatings = 0;


Array.from(numberBtns).forEach(function (button) {
    button.addEventListener("click", function(event) {
    bRatings = event.target.dataset.rating;
    })
})

submitBtn.addEventListener("click", submit);

function submit() {
    selectedRatings.innerText = bRatings;
    quest.style.display = "none";
    answer.style.display = "block";
    selectedRatings.textContent = `You selected ${bRatings} out of 5`;
}

rateAgain.addEventListener("click", () => {
    answer.style.display = "none";
    quest.style.display = "block";
})





