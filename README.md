# FreshCard     
FreshCard is an application cloning from Brainscape and built on Ruby on Rails and React-Redux that provides the users functionalities such as creating decks of flashcards, managing their decks and studying them.       
## Demo                         
[Live demo](https://freshcard.herokuapp.com/#/)
## Set Up                              
You will need `Rails 5.1.6` and `Postgres` installed on your machine. Before start running the application, you will clone this repo and setup the environment in terminal:
```command
$ git clone https://github.com/tsai810417/FreshCards.git

$ cd FreshCards

$ npm install

$ bundle install

$ rails db:setup

$ rails server
```
You will now be able to access the application at localhost:3000.

To get full access to the application, you will have to either sign up as a new user or try the guest login.
## Key Features
* Store the digested password using `BCrypt::Password` when a user signing up

* Landing page have links to direct a user to the places in the application

* Frontend routes had separated to normal route, auth route, and protected route to redirect user when they are in inappropriate route determine by whether they are logged in or not

* Any user can view the flashcards of a deck, but not able to interact with the study feature

* Logged in users can add, edit, delete their decks

* The profile pages will show the decks created by user or user had studied before with the percentage mastery

* There is a search bar in the header, user can search by the title and directed to the deck from any page in the application

* The deck show page will list out the title, subject, and all the flashcards of the deck.

* If you are the author of the deck, you will be able to add flashcards or remove cards in the deck show page

### Studying Decks
The studying page will show each card's questions first and then after you have an answer to that question or you want to see the answer, you can reveal the answer and rate the mastery level of that question and continue to next card.
![question](https://github.com/tsai810417/resources/blob/master/study_question.png?raw=true)

![answer](https://github.com/tsai810417/resources/blob/master/study_answer.png?raw=true)

To decide whether showing the question or answer, I set a state `reveal: boolean`, once this slice of state changed the container will re-render the answer to the according to the question.
The percent mastery is calculated and update every time a user submit a mastery level of a flashcard.

### User Profile Page
The profile page will present the data of a user's decks and also the decks that the user had studied before.
When the deck belongs to the current user, there will be buttons to edit, add flashcards or delete a deck.
When the user studied another user's deck,  there will only show the precent mastery by the user on that deck.

![profile](https://github.com/tsai810417/resources/blob/master/profile.png?raw=true)

## Planning for the Project
Before start working on the project, I created a blueprint while designing what features will be required and what wireframe to expect.
The blueprint can be found in [wiki](https://github.com/tsai810417/FreshCards/wiki)


## Technologies
The backend is built on Ruby on Rails.
The database is managed by Postgres.
The frontend is built on React-Redux which gives store to handle different slice of state easier.

## Future Directions
* Work on refactoring the code.
* Add some animations to this application to make it more interesting.
* Badges (associated with progress).
