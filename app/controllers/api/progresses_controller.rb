class Api::ProgressesController < ApplicationController
  # def index
  #   @progresses = current_user.progresses
  # end

  def show
    @progress = Progress.find_by(deck_id: params[:id], user_id: current_user.id)

    if @progress.nil?
      @progress = Progress.new()
      render json: { mastery: 0 }
    end
  end

  def update
    @progress = Progress.find_by(user_id: current_user.id, question_id: params[:progress][:questionId], deck_id: params[:progress][:deckId])
    if @progress.nil?
      @progress = Progress.new()
      @progress.user_id = current_user.id
      @progress.question_id = params[:progress][:questionId]
      @progress.deck_id = params[:progress][:deckId]
      @progress.score = params[:progress][:score]
      @progress.save
    else
      @progress.score = params[:progress][:score]
      @progress.save
    end

    render 'api/progresses/show'
    # PATCH request, need user id, q id, deck id.
    # check, is there a progerss already?
    # if not, make a new progress with the score.
    # if there is, update the score.

    # after score is updated, get the deck. call deck.progress(id). then return it:
    # return { progress: 80 }
    #this data will be put into the progress key of the state.
  end
end
