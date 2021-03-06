Formオブジェクト
Formオブジェクトは、
1つのフォーム送信で複数のモデルを更新するときに使用するツール。

自分で定義したクラスをモデルのように扱うことができる。
このFormオブジェクトは、
「ActiveModel::Model」というモジュールを読み込むことで使うことができる。

ActiveModel::Model
「ActiveModel::Model」とは、
Active Recordの場合と同様に「form_for」や、
「render」などのヘルパーメソッドを使えるようになるツール。
また、「モデル名の調査」や「バリデーション」の機能も使えるようになる。

クラスにActiveModel::Modelをincludeすると、
そのクラスのインスタンスはActiveRecordを継承したクラスのインスタンスと同様に
form_with や render などのヘルパーメソッドの引数として扱え、
バリデーションの機能を使用できるようになる。

Formオブジェクトパターンを実装するために、
ActiveModel::Modelをincludeしたクラスのことを
「Formオブジェクト」と呼ぶこともある。


Formオブジェクトを導入
まずは、「modelsディレクトリ」に「tweets_tag.rb」を作成する。
配置は以下の通り。

app
  models
    tweets_tag.rb (ファイル)
    tag.rb (ファイル)

Formオブジェクトと中間テーブルを用いる際は、
中間テーブルにレコードを作成する記述が必要になる。
バリデーションも一緒に記述する。