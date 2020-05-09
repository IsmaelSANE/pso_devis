class CreateQuotes < ActiveRecord::Migration[6.0]
  def change
    create_table :quotes do |t|
      t.integer :devis
      t.string :client
      t.string :adresse_site
      t.date :date

      t.timestamps
    end
  end
end
