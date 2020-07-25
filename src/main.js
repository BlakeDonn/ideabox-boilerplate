var hamburgerButton = document.querySelector(".hamburger-button");
var showStarredButton = document.querySelector(".show-starred");
var saveIdeaButton = document.querySelector(".save-idea-button");
var searchIdeaButton = document.querySelector(".search-idea-button");
var ideaStar = document.querySelector(".box-star");
var ideaDelete = document.querySelector(".box-x");
var titleInput = document.querySelector(".title-input");
var bodyInput = document.querySelector(".body-input");
var searchInput = document.querySelector(".search-idea-input");

var savedIdeas = [];

window.addEventListener("click", eventHandler);

function eventHandler(event) {
  if (titleInput.value === "" && bodyInput.value === "" && event.target === saveIdeaButton) {
    var newIdea = new Idea(titleInput.value, bodyInput.value)
    savedIdeas.push(newIdea)
  }
};




//in the eventHandler write logic that grabs .value of input fields
//instantiates a new instance of the class Idea
//have populated card pop up on screen.
.
