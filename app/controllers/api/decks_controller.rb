class Api::DecksController < ApplicationController
  before_action :require_logged_in, only: [:create, :edit, :destroy]

  def index
    if params[:id].nil?
      @decks = Deck.all
    else
      @decks = current_user.decks
    end
  end
# was able to create but error out if not create successfully
  def create
    @deck = Deck.new(deck_params)
    @deck.author_id = current_user.id
    if @deck.save
      render json: @deck
    else
      render json: @deck.errors.full_messages, status: 422
    end
  end

  def show
    @deck = Deck.find(params[:id])
  end

  def update
    @deck = Deck.find(params[:id])
    if @deck.update(deck_params)
      render json: @deck
    else
      render json: @deck.errors.full_messages, status: 422
    end
  end

  def destroy
    deck = Deck.find(params[:id])
    deck.delete
    render json: deck
  end
  private

  def deck_params
    params.require(:deck).permit(:title, :author_id, :subject_id)
  end
end
