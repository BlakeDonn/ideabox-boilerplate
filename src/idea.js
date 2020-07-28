class Idea {
  constructor(title, body) {
    this.id = Date.now();
    this.title = title;
    this.body = body;
    this.star = false;
  }
  saveToStorage() {
    var stringifiedIdea = JSON.stringify(savedIdeas);
    localStorage.setItem("storedIdeas", stringifiedIdea);
    console.log(localStorage.storedIdeas);
  }
  deleteFromStorage() {

  }
  updateIdea() {
    this.star = !this.star;
    if (this.star) {
      return "assets/star-active.svg";
    }
    else {
      return "assets/star.svg";
    }
  }
}
