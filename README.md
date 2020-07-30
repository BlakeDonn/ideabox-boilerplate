# Ideabox Group Project

### Project Description ###

This was a group project that was designed to store and organize ideas. A user can input a title and body for the idea. The user can also delete ideas, favourite them, and filter the ideas by those favourites. The user's ideas are saved to `localStorage`, so they persist on page refresh, assuring that the ideas recorded on the site are saved for the user. The website is responsive, and adjusts layouts to suit desktop, tablet, and mobile views.

## Learning Goals ##

* Continue to improve on building responsive client-side applications with good user feedback.
* Understand how to implement client-side data persistence using `localStorage`.
* Understand what it looks like to have a separate data model (using a class) and DOM model.
* Utilize `data-*` attributes.
* Incorporate & iterate over arrays in order to filter what is being displayed.
* Craft code with clean style, using small functions that show trends toward DRYness and SRP.
* Use and understand event delegation and bubbling.

## Planning ##

This group project was created using Atom as the text editor, and our project management was done through our private channel in slack. We referenced MDN documentation, lesson plans, CSS tricks, and our class notes for information. We contacted peers and mentors for support when we became stuck. Our remote repository is stored on GitHub.

We were given seven days to work on this project.

**Challenges**

* Following the git workflow with multiple branches and group members. This was especially challenging at times when multiple branches were open and actively being worked on at one time.
* Due to a global pandemic, the project needed to be done entirely remotely. All three members of the teams reside and did work across different time zones.
* Creating a smooth transition between mobile, tablet, and desktop view.

**Wins**

* Working on JavaScript, CSS, and HTML in a collaborative environment while working under deadlines.
* Learning how to use and manage `localStorage`.
* Becoming used to using media queries in CSS.
* Properly implementing event delegation.
* We are proud of the code that was written, and proud of the fact that the website functions as expected up through iteration 4.

### Functionality ###

![functionality of creating an idea card]()

**Main Page Functionality**

* When both the title and body input fields are filled out, the `Save Idea` button is activated. Upon clicking the button, an idea card is generated using the values of the input field filled out by the user.

* When the `star` is clicked on an idea card, the card is saved as a favourite. When the 'x' is clicked on an idea card, the card is deleted from the page.

* When the `Show Starred Ideas` button is clicked, only the idea cards that have been favourited will show on the screen. The button will then change to `Show All Ideas`, and upon click, all ideas will show on the screen.

* To search through the ideas made for a specific word or phrase, use the search bar. When typing the phrase, the idea cards will be filtered accordingly.

![starring an idea card]()

![deleting an idea card]()

![filtering starred idea cards]()

![searching for idea cards]()

**Tablet View**

![tablet view]()

**Mobile View**

![mobile view]()

**A Look Under The Hood**

This project was assigned with the idea that we will gain experience using the data model, as opposed to direct to `DOM` manipulation. A large focus of the project was also using local storage correctly and effectively.

We utilized the one global variable `var savedIdeas = [];` to store the ideas that the user creates and saves. Each time an idea is created, it is saved to `localStorage` using the method on the `Idea` class. Utilizing methods on the class constructor, we drew a firm line between the data model and the DOM. For example, in the `toggleStars()` function in `main.js`, we call a method that lives on the `Idea` class constructor. That method changes the star from white to red, and vice versa. When the function is called, we make sure to update the boolean value of `this.star` on the correct object instantiation of the `Idea class` in the `savedIdeas = [];` array. By updating the object in the array, we update the data model, which then in turn updates the `DOM`.

# Programming Languages Used #

* JavaScript
* HTML
* CSS

**Built With**

* Vanilla JavaScript
* HTML & CSS (boilerplate for both provided in the repo for the comp)

**Comp Given**

https://frontend.turing.io/projects/module-1/ideabox-group.html

**Contributors**

* [JP Carey](https://github.com/jaypeasee)
* [Blake Donnelly](https://github.com/BlakeDonn)
* [Brigette Doelp](https://github.com/BrigetteDoelp)

# Additional Links & Images #

* [DTR](https://docs.google.com/document/d/1_f7KysMA7bNwvIehP6DSN65d5NR8qETxnz6aV8C2noA/edit#heading=h.chdm4qbpmig5)
* [GitHub Pages](https://blakedonn.github.io/ideabox-boilerplate/)

**Wireframe**

![wireframe for mobile](https://i.imgur.com/qL8Cnly.png)
![wireframe for desktop](https://i.imgur.com/hdhP2xo.png)
