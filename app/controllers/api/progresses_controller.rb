class Api::ProgressesController < ApplicationController
  def index
    @progresses = current_user.progresses
  end

  def update
    # PATCH request, need user id, q id, deck id.
    # check, is there a progerss already?
    # if not, make a new progress with the score.
    # if there is, update the score.

    # after score is updated, get the deck. call deck.progress(id). then return it:
    # return { progress: 80 }
    #this data will be put into the progress key of the state.
  end
end
