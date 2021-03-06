if (location.pathname.match("tweets/new")){  // 新規投稿画面で動く関数を用意する
  document.addEventListener("DOMContentLoaded", () => {
    const inputElement = document.getElementById("tweets_tag_name");
    inputElement.addEventListener("keyup", () => {
      const keyword = document.getElementById("tweets_tag_name").value;
    });
    console.log("読み込み完了");  //localhost:3000/tweets/new 
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
