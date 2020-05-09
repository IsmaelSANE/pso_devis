# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Quote.create(devis: 9735, client: "Ismael SANE", adresse_site: "71 Rue du jardin public",
  date: Time.now.strftime("%d/%m/%Y"))
Quote.create(devis: 9736, client: "Zacharie SANE", adresse_site: "71 Rue du jardin public",
  date: Time.now.strftime("%d/%m/%Y"))
Quote.create(devis: 9737, client: "Evelyne MOR", adresse_site: "71 Rue du jardin public",
  date: Time.now.strftime("%d/%m/%Y"))
