var hamburgerButton = document.querySelector(".hamburger-button");
var showStarredButton = document.querySelector(".show-starred");
var saveIdeaButton = document.querySelector(".save-idea-button");
var searchIdeaButton = document.querySelector(".search-idea-button");
var titleInput = document.querySelector(".title-input");
var bodyInput = document.querySelector(".body-input");
var searchInput = document.querySelector(".search-idea-input");
//possible local selectors below
var ideaCardArea = document.querySelector(".idea-cards");

var savedIdeas = [];

//create another html tag for the active red star, apply hidden value to it
//in the CSS.
//add conditional to event listener to target the star onclick
//T O G G L E


window.addEventListener("click", function(event) {
  if (event.target.className === "box-x") {
    removeCard(event);
  }
  if (titleInput.value !== "" && bodyInput.value !== "" && event.target === saveIdeaButton) {
    createIdeaCard(event);
  }
  if (event.target.className === "box-star") {
    toggleStars(event);
  }
});
window.addEventListener("keyup", keyHandler);

function createIdeaCard(event) {
    var newIdea = new Idea(titleInput.value, bodyInput.value);
    savedIdeas.push(newIdea);
    clearFields();
    displayIdeas(newIdea);
    disableButton();
};

function removeCard(event) {
    var selectedIdea = event.target.closest(".idea-box");
    var selectedID = event.target.id;
    for (var i = 0; i < savedIdeas.length; i++) {
      if (savedIdeas[i].id == selectedID) {
        savedIdeas.splice(i, 1);
        selectedIdea.remove();
      }
    }
  };

function toggleStars(event) {
  if (event.target.src == "file:///Users/brigette.doelp/turing/mod1repeat/ideabox-boilerplate/assets/star.svg") {
    event.target.src = "file:///Users/brigette.doelp/turing/mod1repeat/ideabox-boilerplate/assets/star-active.svg"
  } else {
    event.target.src = "file:///Users/brigette.doelp/turing/mod1repeat/ideabox-boilerplate/assets/star.svg"
  }

  console.log(event.target)
  // event.target.src = "box-star"

  // inactive.classList.add("hidden");
  // active.classList.remove("hidden");
  // var inactiveStar = event.target
  // var star = event.target.src
  // star = "assets/star-active.svg"
  // star.classList.toggle("hidden")
  // console.log(event.target)
  //if box-star does not have a hidden, give it one onclick, remove hidden from other star

  }

  function clearFields() {
    titleInput.value = ""; //check into a built in method that will do this same thing Only Nifty-er
    bodyInput.value = "";
  };

function keyHandler(){
  titleInput.value !== "" && bodyInput.value !== "" ? enableButton() : disableButton();
};

function displayIdeas(newIdea) {
  var savedIdeaCard = `
    <div class="idea-box">
      <div class="box-header">
        <img src="assets/star.svg" alt="Inactive Star Icon" class="box-star">
        <img src="assets/delete.svg" alt="Delete Icon" class="box-x" id="${newIdea.id}">
      </div>
      <div>
        <h2 class="header-text">${newIdea.title}</h2>
        <p class="body-text">${newIdea.body}</p>
      </div>
      <div class=" box-footer">
        <img src="assets/comment.svg" alt="Add Comment Icon">
        <h3 class="header-text">Comment</h3>
      </div>
    </div>
  `;
  ideaCardArea.insertAdjacentHTML("afterbegin", savedIdeaCard);
};
//
function enableButton(){
  saveIdeaButton.classList.add("save-idea-active");
};

function disableButton(){
  saveIdeaButton.classList.remove("save-idea-active");
};
