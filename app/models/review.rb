class Review < ApplicationRecord
  validates :title, presence: :true
  validates :body, presence: :true
  validates :rating, presence: :true

  belongs_to :user
  belongs_to :paint
end
