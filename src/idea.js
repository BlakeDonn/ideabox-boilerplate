class Idea {
  constructor(title, body) {
    this.id = Date.now();
    this.title = title;
    this.body = body;
    this.star = false;
  }

  saveToStorage() {
    var stringIdea = JSON.stringify(this);
    localStorage.setItem('localIdeas', stringIdea );
  }
  deleteFromStorage() {

  }
  updateIdea(event) {
    this.star = !this.star;
    if (this.star) {
      event.target.src = "assets/star-active.svg";
    }
    else {
      event.target.src = "assets/star.svg";
    }
  }
}
