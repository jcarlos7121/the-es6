class Post < ApplicationRecord
  validates :name, uniqueness: true
end
