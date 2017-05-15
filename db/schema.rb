# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170515003336) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "banks", force: :cascade do |t|
    t.string "name", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "cards", force: :cascade do |t|
    t.string "name", null: false
    t.integer "annual_fee_cents"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "network_id"
    t.bigint "bank_id"
    t.index ["bank_id"], name: "index_cards_on_bank_id"
    t.index ["network_id"], name: "index_cards_on_network_id"
  end

  create_table "networks", force: :cascade do |t|
    t.string "name", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "reward_currencies", force: :cascade do |t|
    t.string "name", null: false
    t.decimal "value_cents", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "rewards", force: :cascade do |t|
    t.bigint "card_id"
    t.bigint "spend_category_id"
    t.bigint "reward_currency_id"
    t.decimal "percentage", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["card_id"], name: "index_rewards_on_card_id"
    t.index ["reward_currency_id"], name: "index_rewards_on_reward_currency_id"
    t.index ["spend_category_id"], name: "index_rewards_on_spend_category_id"
  end

  create_table "spend_categories", force: :cascade do |t|
    t.string "name", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_foreign_key "cards", "banks"
  add_foreign_key "cards", "networks"
  add_foreign_key "rewards", "cards"
  add_foreign_key "rewards", "reward_currencies"
  add_foreign_key "rewards", "spend_categories"
end
