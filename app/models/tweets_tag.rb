class TweetsTag  # modelsディレクトリ直下にファイルを作成し、クラスを定義
  # form_withメソッドに対応する機能とバリデーションを行う機能を持たせる
  # includeするとform_with や render などのヘルパーメソッドの引数として扱え、バリデーションの機能を使用できるようになる
  include ActiveModel::Model

  # 保存したい複数のテーブルのカラム名全てを属性値として扱えるようにする
  attr_accessor :message, :name

  # バリデーションの処理
  with_options presence: true do
    validates :message
    validates :name
  end

  # データをテーブルに保存する処理
  def save
    tweet = Tweet.create(message: message)
    # 「first_or_initialize」は、whereメソッドと併用。
    # whereで検索した条件のレコードがあればそのレコードのインスタンスを返し、なければ新しくインスタンスを作るメソッド
    tag = Tag.where(name: name).first_or_initialize
    tag.save

    TweetTagRelation.create(tweet_id: tweet.id, tag_id: tag.id)
  end
end