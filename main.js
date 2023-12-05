function removeActive() {
    ratingsEls.forEach((ratingEl) => {
        ratingEl.classList.remove("active");
    });
}

let selectedRating = "";
const btnEl = document.getElementById("btn");
const containerEl = document.getElementById("container");

const ratingsEls = document.querySelectorAll(".ratings");
//document is used for targeting everything inside the browser (whole document) and 
// querySelectorAll is used for targeting every class inside the document

ratingsEls.forEach((ratingEls) => {
    ratingEls.addEventListener("click", (event) => {
        console.log(event.target.innerText || event.target.parentNode.innerText);
        //parentNode is used for taking the text when the emoji is clicked

        removeActive();
        selectedRating = event.target.innerText || event.target.parentNode.innerText;

        event.target.classList.add("active")
        event.target.parentNode.classList.add("active")
    });
});

btnEl.addEventListener("click", ()=>{
    if(selectedRating !== "") {
        containerEl.innerHTML = `
        <strong>Thank you!</strong>
        <br />
        <br />
        <strong>Feedback: ${selectedRating}</strong>
        <p>We'll use your feedback to improve our customer support.</p>
        `;
    }
})