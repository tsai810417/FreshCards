# FreshCard     
FreshCard is an application cloning from Brainscape and built on Ruby on Rails and React-Redux that provides the users functionalities such as creating decks of flashcards, managing their decks and studying them.       
### Demo            
[Live demo](https://freshcard.herokuapp.com/#/)
### Set Up               
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
### Key Features
* Store the digested password using `BCrypt::Password` when a user signing up

* Landing page have links to direct a user to the places in the application

* Frontend routes had separated to normal route, auth route, and protected route to redirect user when they are in inappropriate route determine by whether they are logged in or not

* Logged in users can add, edit, delete their decks and also manage the flashcards of the decks created by them

* Logged in users can study decks and rate the mastery level of each question

* The the mastery percentage of current deck will be calculated and displayed dynamically as making progress studying a deck

* The profile pages will show the decks created by user or user had studied before

* There is a search bar in the header, user can search by the title and directed to the deck any time

*


###











//
