class HyakuninController < ApplicationController
  def index
  end

  def game
    poems = Poem.all
    @read_poems = poems.sample(50)
    display_poems = @read_poems.sample(25)
    read_poem = read_poem()
    render json: {read_poem: read_poem, display_poems: display_poems, read_poems: @read_poems}
  end

  def game_react
  end

  def read_poem
    read_poem = @read_poems.sample(1).first
    @read_poems.delete(read_poem)
    return read_poem
  end
end
