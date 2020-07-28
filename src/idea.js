class Idea {
  constructor(title, body, id, star) {
    this.title = title;
    this.body = body;
    this.id = Date.now() + Math.random();
    this.star =  star || false;
  }

  saveToStorage() {
    var stringifiedIdea = JSON.stringify(savedIdeas);
    localStorage.setItem("storedIdeas", stringifiedIdea);
  }

  deleteFromStorage() {
    return console.log("hi!")
  }
  updateIdea() {
    this.star = !this.star;
      this.saveToStorage();
      if (this.star) {
        return "assets/star-active.svg";
      }
      else {
        return "assets/star.svg";
      }
}
}
