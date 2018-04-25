class Meal < ApplicationRecord
  has_and_belongs_to_many :ingredients
  has_many :orders
  monetize :price_centavos
end
