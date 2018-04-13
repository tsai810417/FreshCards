class Api::QuestionsController < ApplicationController
  before_action :require_logged_in, only: [:create, :destroy]
  def create
    @question = Question.new
    @question.answer = params[:question][:answer]
    @question.body = params[:question][:body]
    @question.deck_id = params[:deck_id]
    if @question.save
      render json: @question
    else
      render json: @question.errors.full_messages, status: 422
    end
  end

  def destroy
    @question = Question.find(params[:id])
    break if current_user.id != @question.deck.author_id 
    @question.destroy
    @deck = @question.deck
    render '/api/decks/show'
  end


end
