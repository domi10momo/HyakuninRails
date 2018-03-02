class HyakuninController < ApplicationController
  def index
  end

  def game
    @poems = Poem.all
    @use_poems = @poems.sample(25)
  end
end
