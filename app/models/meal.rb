class Meal < ApplicationRecord
  has_and_belongs_to_many :ingredients
end
