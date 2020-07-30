class Idea {
  constructor(title, body, id, star) {
    this.title = title;
    this.body = body;
    this.id = id || Date.now() + Math.random();
    this.star =  star || false;
  }

  saveToStorage() {
    var stringifiedIdea = JSON.stringify(savedIdeas);
    localStorage.setItem("storedIdeas", stringifiedIdea);
  }

  deleteFromStorage() {
    var retrieveRemovedIdeas = localStorage.getItem("storedIdeas");
    var parseRemovedIdeas = JSON.parse(retrieveRemovedIdeas);
    for (var i = 0; i < parseRemovedIdeas.length; i++) {
      if (parseRemovedIdeas[i].id == this.id) {
        parseRemovedIdeas.splice(i, 1);
      };
    }
    var stringifiedRemovedIdeas = JSON.stringify(parseRemovedIdeas);
    localStorage.setItem("storedIdeas", stringifiedRemovedIdeas);
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
  };
