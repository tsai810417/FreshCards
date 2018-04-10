class Api::SearchController < ApplicationController
  def index
    @decks = Deck.all
    
  end
end
