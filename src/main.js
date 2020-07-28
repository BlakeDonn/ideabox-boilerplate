var saveIdeaButton = document.querySelector(".save-idea-button");
var titleInput = document.querySelector(".title-input");
var bodyInput = document.querySelector(".body-input");
var searchInput = document.querySelector(".search-idea-input");
var ideaCardArea = document.querySelector(".idea-cards");

var savedIdeas = [];

window.addEventListener("load", parseSavedIdeas);
window.addEventListener("keyup", keyHandler);
window.addEventListener("click", function(event) {
  if (titleInput.value !== "" && bodyInput.value !== "" && event.target === saveIdeaButton) {
    createIdeaCard(event);
  }
  if (event.target.className === "box-x") {
    removeCard(event);
  }
  if (event.target.className === "box-star") {
    toggleStars(event);
  }
});

function parseSavedIdeas() {
  var retrieveSavedIdea = localStorage.getItem("storedIdeas");
  var parseSavedIdea = JSON.parse(retrieveSavedIdea);
  if (parseSavedIdea != null) {
    for (var i = 0; i < parseSavedIdea.length; i++) {
      var reinIdea = new Idea(parseSavedIdea[i].title, parseSavedIdea[i].body, parseSavedIdea[i].id, parseSavedIdea[i].star);
      savedIdeas.push(reinIdea);
      displayIdeas(savedIdeas[i]);
    }
  }
}

function keyHandler(){
  titleInput.value !== "" && bodyInput.value !== "" ? enableButton() : disableButton();
};

function createIdeaCard(event) {
  var newIdea = new Idea(titleInput.value, bodyInput.value);            // refactor
  savedIdeas.unshift(newIdea);
  clearFields();
  displayIdeas(savedIdeas[0]);
  disableButton();
  newIdea.saveToStorage();
};

function removeCard(event) {
  var selectedIdea = event.target.closest(".idea-box"); //buggy
  var selectedID = event.target.id;
  for (var i = 0; i < savedIdeas.length; i++) {
    if (savedIdeas[i].id == selectedID) {
      savedIdeas[i].deleteFromStorage()
      savedIdeas.splice(i, 1);
      selectedIdea.remove();
    }
  }
};

function displayIdeas(newIdea) {
  var htmlStar = newIdea.star ? "assets/star-active.svg" : "assets/star.svg";
  var savedIdeaCard = `
    <div class="idea-box">
      <div class="box-header">
        <img src="${htmlStar}" alt="Inactive Star Icon" class="box-star" id ="${newIdea.id}">
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
    </div>`;
  ideaCardArea.insertAdjacentHTML("afterbegin", savedIdeaCard);
};

function toggleStars(event){
  var selectedID = event.target.id;
    for (var i = 0; i < savedIdeas.length; i++) {
      if (savedIdeas[i].id == selectedID) {
        event.target.src = savedIdeas[i].updateIdea();
    }
  }
};

function clearFields() {
  titleInput.value = ""; //check into a built in method that will do this same thing Only Nifty-er
  bodyInput.value = "";
};

function enableButton(){
  saveIdeaButton.classList.add("save-idea-active");
};

function disableButton(){
  saveIdeaButton.classList.remove("save-idea-active");
};

//
