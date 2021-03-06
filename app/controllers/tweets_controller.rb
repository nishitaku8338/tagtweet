class TweetsController < ApplicationController

  def index
  @tweets = Tweet.all.order(created_at: :desc)  # 投稿内容が新しい順で表示されるようにする
  end

  def new
    @tweet = TweetsTag.new  # Formオブジェクトに対してnewメソッドを使用する
  end

  def create
    @tweet = TweetsTag.new(tweet_params)  # 24行目「message」、「name」が送信できるように設定する
    if @tweet.valid?
      @tweet.save
      return redirect_to root_path  # もしデータベースに保存できたらトップページへ
    else
      render "new"  # 保存できなければ再度newアクションが起動する
    end
  end

  # searchアクションでは検索を行い、その結果を返す。
  def search
    return nil if params[:keyword] == ""
    tag = Tag.where(['name LIKE ?', "%#{params[:keyword]}%"])
    render json:{ keyword: tag }
  end

  private
  
  def tweet_params
    params.require(:tweets_tag).permit(:message, :name)  # 12行目で引数として呼び出し
  end
end
