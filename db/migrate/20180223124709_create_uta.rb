class CreateUta < ActiveRecord::Migration[5.1]
  def change
    create_table :uta do |t|
      t.string :kaminoku
      t.string :shimonoku
      t.string :kami_furigana
      t.string :shimo_furigana
      t.string :author

      t.timestamps
    end
  end
end
