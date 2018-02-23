# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require "csv"
puts "Delete data"
Poem.delete_all
puts "Finish Deleting"

puts "Start Insert Poem"
CSV.foreach('db/hyakunin.csv') do |row|
    Poem.create do |u|
        u.id = row[0]
        u.kaminoku = row[1]
        u.shimonoku = row[2]
        u.kami_furigana = row[3]
        u.shimo_furigana = row[4]
        u.author = row[5]
    end
end
puts "End Insert Poem"