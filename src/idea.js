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
    console.log(this.id);
    var retrieveRemovedIdeas = localStorage.getItem("storedIdeas");
    var parseRemovedIdeas = JSON.parse(retrieveRemovedIdeas);
    console.log(parseRemovedIdeas)
    for (var i = 0; i < parseRemovedIdeas.length; i++) {
      if (parseRemovedIdeas[i].id == this.id) {
        parseRemovedIdeas.splice(i, 1)
      };
    }
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

// JSON.parse the local storage to gain access to individual objects.
// looping through the objects finding the targeted id of the one clicked
// remove!
// put back in storage.
// update view
// the end
