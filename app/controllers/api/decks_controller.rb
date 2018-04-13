class Api::DecksController < ApplicationController
  before_action :require_logged_in, only: [:create, :edit, :destroy]

  def index
    if params[:title]
      @decks = Deck.where(title: params[:title])
    elsif params[:id].nil?
      @decks = Deck.all
    else
      @decks = current_user.decks
    end
  end
# was able to create but error out if not create successfully
  def create
    @deck = Deck.new
    @deck.author_id = current_user.id
    @deck.title = params[:deck][:title]
    subject = Subject.all.find_by(title: params[:deck][:subject])
    @deck.subject_id = subject.id if subject
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
    @deck.title = params[:deck][:title]
    subject = Subject.all.find_by(title: params[:deck][:subject])
    @deck.subject_id = subject.id if subject
    # @deck.subject_id = params[:deck][:subjectId] unless params[:deck][:subjectId].nil?
    if @deck.update
      render json: @deck
    else
      render json: @deck.errors.full_messages, status: 422
    end
  end

  def destroy
    deck = Deck.find(params[:id])
    logout if current_user.id != deck.author_id 
    deck.delete
    render json: deck
  end

  private

  # def deck_params
  #   params.require(:deck).permit(:title, :author_id, :subject_id)
  # end
end
