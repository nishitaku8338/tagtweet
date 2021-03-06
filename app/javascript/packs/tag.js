if (location.pathname.match("tweets/new")){  // 新規投稿画面で動く関数を用意する
  document.addEventListener("DOMContentLoaded", () => {
    const inputElement = document.getElementById("tweets_tag_name");
    inputElement.addEventListener("keyup", () => {
      const keyword = document.getElementById("tweets_tag_name").value;
      console.log(keyword);  //localhost:3000/tweets/new 
    });
  });
};


// 非同期通信を行うまでの実装
// 新規投稿画面で動く関数を用意
// if (location.pathname.match("tweets/new")){
//   document.addEventListener("DOMContentLoaded", () => {
//     console.log("読み込み完了");
//   });
// };
// 編集できたらブラウザをリロードして、
// コンソール上に"読み込み完了"と表示できていればOK。

// 次に、タグの検索に必要な情報を取得する
// フォームに入力された文字列を取得。取得した文字列はタグを検索する際に使用する。
// まず、フォームに何かが入力されたときに発火する関数を定義する。イベントにはkeyupを指定する。
// 次に、定義した関数の中で、フォームに入力されている文字列を変数 keywordに代入する。
// 以下のように編集する。

// if (location.pathname.match("tweets/new")){
//   document.addEventListener("DOMContentLoaded", () => {
//     const inputElement = document.getElementById("tweets_tag_name");
//     inputElement.addEventListener("keyup", () => {
//       const keyword = document.getElementById("tweets_tag_name").value;
//     });
//   });
// };


// 変数keywordの中身を確認する
// フォームに入力されている文字列を取得できているか、
// 変数keywordの中身をコンソール上で確認する。
// 確認にはconsole.log()を用いる。

// if (location.pathname.match("tweets/new")){
//   document.addEventListener("DOMContentLoaded", () => {
//     const inputElement = document.getElementById("tweets_tag_name");
//     inputElement.addEventListener("keyup", () => {
//       const keyword = document.getElementById("tweets_tag_name").value;
//       console.log(keyword);
//     });
//   });
// };

// 編集後、フォームに何か入力して、
// 入力した文字がコンソール上に出力できていればok。
// イベント発火が確認ができたら、
// 非同期通信に必要なXMLHttpRequestオブジェクトを生成する。
// XMLHttpRequestオブジェクトを用いることで、任意のHTTPリクエストを送信できる。