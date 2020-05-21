# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_05_09_012417) do

  create_table "quotes", force: :cascade do |t|
    t.integer "devis"
    t.string "client"
    t.string "adresse_site"
    t.date "date"
    t.string "form_gender"
    t.string "firstname"
    t.string "lastname"
    t.string "adresse"
    t.string "zipcode"
    t.string "city"
    t.string "email"
    t.string "adresse2"
    t.string "zipcode2"
    t.string "city2"
    t.string "phone"
    t.string "ceiling_m"
    t.string "ceiling_price"
    t.string "ceiling_total"
    t.string "forfait1e"
    t.string "check_walls"
    t.string "form_peinture"
    t.string "walls_m"
    t.string "walls_coef"
    t.string "walls_price"
    t.string "walls_tot"
    t.string "walls_total"
    t.string "services_total"
    t.string "totalht"
    t.string "totalttc"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

end
