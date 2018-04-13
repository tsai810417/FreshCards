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
* Logged in users can add, edit, delete their decks and also manage the flashcards of the decks created by them.
  + Challenge 1: I wasn't able to get access to the deck id for redirecting to the deck show page of a new deck that haven't saved yet.

  + Solution 1: Instead of trying to get the id from the deck haven't created, I get the max id of the Deck class because I know that the new save deck's id will be the next number.

  + Challenge 2: There was an error happened if trying to iterate through the empty deck informations when the deck haven't been fetched yet. However, fetching deck is happening in componentDidMount, so the rendering will always error out.

  + Solution 2: I added a conditional to check if the deck's informations are ready to use. If it is ready, then iterate through them and render out; if not, will only rendering `Loading`.

  + Challenge 3: I found out when deleted a question from a deck, if the question is not the last question of the deck, the question deleted will still appear in the state.

  + Solution 3: I checked the state, found out the deck's questions is in an `Array` so when merged the id after the deleted one will be duplicated since the indices is swapped. To solve this, just simply return the deck informations after receiving it without merging.

* Logged in users can study decks and rate the mastery level of each question after they reveal the answer. Then the mastery percentage of current deck will be calculated and displayed.
  + Challenge 1: I was struggled what informations should be store in the database for the progress and what should be returning when fetching a progress. It seems the detailed informations of a progress is unnecessary, but on the other hand the you need all the progresses of this deck that belongs to current user to calculate the percent mastery.

  + Solution 1: In order to achieve the goal in a more efficient matter, I decided to calculate the percent mastery at the backend because in deck model, you have access to all the progresses that belongs to the deck and also the number of questions required for calculations. Then sent only the calculated information to frontend every time fetch progress or update progress happen.

  + Challenge 2: I found out that if just sum up all the progresses of a deck that belongs to current user and divide by the total questions, errors will happen if questions were removed from the deck. The percent mastery will be sum up all progresses including the one related to the deleted question and divide by the number of questions (the deleted question is not included).

  + Solution 2: There will be two ways to solve this problems. One is to pass the deleteQuestion action to progress reducer that will remove the progress when a deleteQuestion action is made. The other one is to 

###











//
