attr_accessorの詳細説明
attr_accessorメソッドについて

Ruby on RailsにおけるモデルはActiveRecordを継承している。
ActiveRecordを継承することで、
モデル名に対応したテーブルのカラム名をもとに、自動的に以下の2点を行う。

・値の取得ができるメソッドの定義（ゲッター）
・値の更新ができるメソッドの定義（セッター）
Orderモデルと連携するordersテーブルには、priceカラムが存在します。

したがって、
これまでのアプリケーションでは@order.priceでpriceの情報が取得できていましたし、
@order.price = 5000のように上書きすることができる。

クレジットカード決済機能導入前のOrderモデル（Orderクラス）のイメージとしては以下のようになる。 

以下はイメージとして考える
Ruby on Railsの挙動を正確に表現したものではない。
【例】クレジットカード決済機能導入前のOrderモデルにおけるゲッターとセッターのイメージ

# 以下はOrderモデルのイメージ
class Order
  def price #ゲッター
    @price
  end

  def price=(price) #セッター
    @price = price
  end
end


# 以下はコントローラーからの呼び出しイメージ

@order = Order.new
@order.price = 3000
  #=> セッターが設定してるので、priceを3000と設定できる
puts @order.price
  #=> ゲッターが設定してあるので、3000が出力される


上記の記述は、Rubyのattr_accessorメソッドを使用することで、
以下のように省略することができます。

【例】attr_accessorを用いたゲッターとセッターの省略
# 以下はOrderモデルのイメージ
class Order
  attr_accessor :price
end


# 以下はコントローラーからの呼び出しイメージ

@order = Order.new
@order.price = 3000
  #=> セッターが設定してるので、priceを3000と設定できる
puts @order.price
  #=> ゲッターが設定してあるので、3000が出力される

これがattr_accessorメソッドの役割


attr_accessor
記述したクラスに、
ゲッターとセッターを定義してくれるメソッドです。
与えられた引数をもとに属性を設定し、
これを取得するメソッド（ゲッター）と更新するメソッド（セッター）を定義してくれます。

Ruby on Railsにおいては、
ActiveRecordを継承することで、
テーブルに存在するカラムについて上記までを自動的に行っています。

そして、今回実装の途中で直面したエラーは、
Orderモデルでordersテーブルには存在しないtokenの属性が使えないことが原因である為
以下のような記述を行ってエラーが生じていたといえます。

【例】今回直面したエラーの状態

# 以下はOrderモデルのイメージ
class Order
  attr_accessor :price
end


# 以下はコントローラーからの呼び出しイメージ

@order = Order.new
@order.price = 3000
  #=> セッターが設定してるので、priceを3000と設定できる
puts @order.price
  #=> ゲッターが設定してあるので、3000が出力される
@order.token = "tok_0000000000"
  #=> token属性を定義していないのでエラーがでる
puts @order.token
  #=> token属性を定義していないのでエラーがでる


そこで、今回の実装と同様にattr_accessorメソッドでtokenを指定する。
エラーが出現せずに処理が完了する。

【例】tokenについても取り扱えるようにする

# 以下はOrderモデルのイメージ
class Order
  attr_accessor :price, :token
end


# 以下はコントローラーからの呼び出しイメージ

@order = Order.new
@order.price = 3000
  #=> セッターが設定してるので、priceを3000と設定できる
puts @order.price
  #=> ゲッターが設定してあるので、3000が出力される
@order.token = "tok_0000000000"
  #=> セッターが設定してるので、tokenを"tok_0000000000"と設定できる
puts @order.token
  #=> ゲッターが設定してあるので、"tok_0000000000"が出力される


実際には、Ruby on Railsにおけるモデルの処理はもっと複雑な機構が絡み合っている。
しかし、大まかな流れは上記で説明したとおり。

「モデルに対応するテーブルのカラム名以外の属性を扱いたい場合は、
attr_accessorを用いて追加する」と覚えておく。
この考え方は、フォームオブジェクトにおいても応用することができる。