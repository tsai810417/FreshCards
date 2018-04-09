class Api::QuestionsController < ApplicationController
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



end
