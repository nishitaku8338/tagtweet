class Tag < ApplicationRecord
  has_many :tweet_tag_relations
  has_many :tweets, through: :tweet_tag_relations

  validates :name, uniqueness: true  # 一意性の制約はモデル単位で設ける必要があるため、tagモデルに記述
end
