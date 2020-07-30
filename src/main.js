var saveIdeaButton = document.querySelector(".save-idea-button");
var titleInput = document.querySelector(".title-input");
var bodyInput = document.querySelector(".body-input");
var searchInput = document.querySelector(".search-idea-input");
var ideaCardArea = document.querySelector(".idea-cards");
var showStarredButton = document.querySelector(".show-starred");
var showAllButton = document.querySelector(".show-all");
var searchIdeas = document.querySelector(".search-idea-input");
var modal = document.querySelector(".modal");
var nav = document.querySelector(".menu");
var bodyHeader = document.querySelector(".h3-body");
var titleHeader = document.querySelector(".h3-title");
var modalShowStarred = document.querySelector(".modal-starred");
var modalShowAll = document.querySelector(".modal-all");

var savedIdeas = [];

window.addEventListener("load", parseSavedIdeas);
window.addEventListener("keyup", function(event) {
  if (event.target.className === "title-input" || event.target.className === "body-input") {
     keyHandler();
  }

  if (event.target.className === "search-idea-input"){
    checkValues();
  }
});

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

  if (event.target.className.includes("show-starred")) {
    toggleSaved(event);
  }

  if (event.target.className.includes("show-all")) {
    toggleAll(event);
  }

  if (event.target.className.includes("hamburger-button")) {
    showModal(event);
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
};

function keyHandler() {
  titleInput.value !== "" && bodyInput.value !== "" ? enableButton() : disableButton();
};

function checkValues() {
  for (var i = 0; i < savedIdeas.length; i++) {
    if (!savedIdeas[i].title.includes(searchIdeas.value) || !savedIdeas[i].body.includes(searchIdeas.value)) {
      var notDisplayed = document.getElementById(savedIdeas[i].id);
      notDisplayed.classList.add("hidden");
    }

    if (savedIdeas[i].title.includes(searchIdeas.value) || savedIdeas[i].body.includes(searchIdeas.value)) {
      var notStarredCard = document.getElementById(savedIdeas[i].id);
      notStarredCard.classList.remove("hidden");
    }
  }
};

function createIdeaCard(event) {
  var newIdea = new Idea(titleInput.value, bodyInput.value);
  savedIdeas.unshift(newIdea);
  clearFields();
  displayIdeas(savedIdeas[0]);
  disableButton();
  newIdea.saveToStorage();
};

function removeCard(event) {
  var selectedIdea = event.target.closest(".idea-box");
  var selectedID = event.target.id;
  for (var i = 0; i < savedIdeas.length; i++) {
    if (savedIdeas[i].id == selectedID) {
      savedIdeas[i].deleteFromStorage();
      savedIdeas.splice(i, 1);
      selectedIdea.remove();
    }
  }
};

function displayIdeas(newIdea) {
  var htmlStar = newIdea.star ? "assets/star-active.svg" : "assets/star.svg";
  var savedIdeaCard = `
    <div class="idea-box" id="${newIdea.id}">
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

function toggleStars(event) {
  var selectedID = event.target.id;
    for (var i = 0; i < savedIdeas.length; i++) {
      if (savedIdeas[i].id == selectedID) {
        event.target.src = savedIdeas[i].updateIdea();
    }
  }
};

function toggleSaved() {
  for (var i = 0; i < savedIdeas.length; i++) {
    if (!savedIdeas[i].star) {
      var notStarredCard = document.getElementById(savedIdeas[i].id);
      notStarredCard.classList.add("hidden");
    }
  }
  toggleHidden();
};

function toggleAll() {
  for (var i = 0; i < savedIdeas.length; i++) {
    var notStarredCard = document.getElementById(savedIdeas[i].id);
    notStarredCard.classList.remove("hidden");
  }
  toggleHidden();
};

function toggleHidden() {
  showStarredButton.classList.toggle("hidden");
  showAllButton.classList.toggle("hidden");
  modalShowStarred.classList.toggle("hidden");
  modalShowAll.classList.toggle("hidden");
};

function clearFields() {
  titleInput.value = "";
  bodyInput.value = "";
};

function enableButton() {
  saveIdeaButton.classList.add("save-idea-active");
};

function disableButton() {
  saveIdeaButton.classList.remove("save-idea-active");
};

function showModal(event) {
  modal.classList.toggle("hidden");
  nav.classList.toggle("hidden");
  titleHeader.classList.toggle("hide-input-text");
  bodyHeader.classList.toggle("hide-input-text");
};
