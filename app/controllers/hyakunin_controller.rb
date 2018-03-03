class HyakuninController < ApplicationController
  def index
  end

  def game
    @poems = Poem.all
    @read_poems = @poems.sample(50)
    @use_poems = @read_poems.sample(25)
    getReadPoem()
  end

  def getReadPoem
    @read_poem = @read_poems.sample(1).first
    @read_poems.delete(@read_poem)
  end
end
