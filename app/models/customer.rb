class Customer < ApplicationRecord
  has_many :notes, dependent: :destroy
  has_many :orders, dependent: :destroy
end
