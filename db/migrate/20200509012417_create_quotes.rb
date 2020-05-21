class CreateQuotes < ActiveRecord::Migration[6.0]
  def change
    create_table :quotes do |t|
      t.integer :devis
      t.string :client
      t.string :adresse_site
      t.date :date
      t.string :form_gender
      t.string :firstname
      t.string :lastname
      t.string :adresse
      t.string :zipcode
      t.string :city
      t.string :email
      t.string :adresse2
      t.string :zipcode2
      t.string :city2
      t.string :phone
      t.string :ceiling_m
      t.string :ceiling_price
      t.string :ceiling_total
      t.string :forfait1e
      t.string :check_walls
      t.string :form_peinture
      t.string :walls_m
      t.string :walls_coef
      t.string :walls_price
      t.string :walls_tot
      t.string :walls_total
      t.string :services_total
      t.string :totalht
      t.string :totalttc


      t.timestamps
    end
  end
end
