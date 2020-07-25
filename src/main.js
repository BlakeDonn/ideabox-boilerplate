var hamburgerButton = document.querySelector(".hamburger-button");
var showStarredButton = document.querySelector(".show-starred");
var saveIdeaButton = document.querySelector(".save-idea-button");
var searchIdeaButton = document.querySelector(".search-idea-button");
var ideaStar = document.querySelector(".box-star");
var ideaDelete = document.querySelector(".box-x");
var titleInput = document.querySelector(".title-input");
var bodyInput = document.querySelector(".body-input");
var searchInput = document.querySelector(".search-idea-input");
//possible local selectors below
var ideaCardArea = document.querySelector(".idea-cards");

var savedIdeas = [];

window.addEventListener("click", clickHandler);
window.addEventListener("keyup", keyHandler);

function clickHandler(event) {
  if (titleInput.value !== "" && bodyInput.value !== "" && event.target === saveIdeaButton) {
    var newIdea = new Idea(titleInput.value, bodyInput.value);
    savedIdeas.push(newIdea);
    displayIdeas();
    titleInput.value = "";
    bodyInput.value = "";
    disableButton();
  }
};

function keyHandler(){
  titleInput.value !== "" && bodyInput.value !== "" ? enableButton() : disableButton();
}

function displayIdeas() {
  var savedIdeaCard = `
    <div class="idea-box">
      <div class="box-header">
        <img src="assets/star-active.svg" alt="Star Icon" class="box-star">
        <img src="assets/delete.svg" alt="Delete Icon" class="box-x">
      </div>
      <div>
        <h2 class="header-text">${titleInput.value}</h2>
        <p class="body-text">${bodyInput.value}</p>
      </div>
      <div class=" box-footer">
        <img src="assets/comment.svg" alt="Add Comment Icon">
        <h3 class="header-text">Comment</h3>
      </div>
    </div>
  `;
  ideaCardArea.insertAdjacentHTML("afterbegin", savedIdeaCard);
};

function enableButton(){
  saveIdeaButton.classList.add("save-idea-active");
};

function disableButton(){
  saveIdeaButton.classList.remove("save-idea-active");
};
