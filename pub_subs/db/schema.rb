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

ActiveRecord::Schema.define(version: 2019_10_09_130939) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "ingredients", force: :cascade do |t|
    t.string "name"
    t.string "category"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "ingredients_sandwiches", id: false, force: :cascade do |t|
    t.bigint "sandwich_id", null: false
    t.bigint "ingredient_id", null: false
    t.index ["sandwich_id", "ingredient_id"], name: "index_ingredients_sandwiches_on_sandwich_id_and_ingredient_id"
  end

  create_table "sandwiches", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.bigint "user_id"
    t.string "photo"
    t.bigint "ingredients_id"
    t.index ["ingredients_id"], name: "index_sandwiches_on_ingredients_id"
    t.index ["user_id"], name: "index_sandwiches_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "email"
    t.string "password_digest"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  add_foreign_key "sandwiches", "ingredients", column: "ingredients_id"
  add_foreign_key "sandwiches", "users"
end
