class Paint < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  validates :title, presence: :true
  validates :description, presence: :true
  validates :category, presence: :true
  validates :photo, presence: true

  belongs_to :user
  has_many :reviews
  mount_uploader :photo, PhotoUploader
end
