if (location.pathname.match("tweets/new")){  // 新規投稿画面で動く関数を用意する
  document.addEventListener("DOMContentLoaded", () => {
    const inputElement = document.getElementById("tweets_tag_name");
    inputElement.addEventListener("keyup", () => {
      const keyword = document.getElementById("tweets_tag_name").value;
      //console.log(keyword);  //localhost:3000/tweets/new
      const XHR = new XMLHttpRequest();  //XMLHttpRequestオブジェクトを生成、変数XHRに代入
      XHR.open("GET", `search/?keyword=${keyword}`, true);  // searchアクションへリクエストを送るように指定 openメソッド 第一引数：HTTPメソッド、第二引数：URL、第三引数：非同期通信 keywordは、5行目でフォームから取得した文字列のこと
      XHR.responseType = "json";  // コントローラーから返却されるデータの形式を、json形式に指定する
      XHR.send();  // リクエストの送信にはsendメソッドを用いる
      XHR.onload = () => {
        // console.log("非同期通信成功")  // 非同期通信が成功したときには、onloadプロパティに定義された関数が呼び出される
        const tagName = XHR.response.keyword  // レスポンスとして返ってくるデータを受け取る。responseプロパティを使用
      };
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


// XMLHttpRequestオブジェクトを用いてインスタンスを生成し、
// 変数XHRに代入する。
// if (location.pathname.match("tweets/new")){
//   document.addEventListener("DOMContentLoaded", () => {
//     const inputElement = document.getElementById("tweets_tag_name");
//     inputElement.addEventListener("keyup", () => {
//       const keyword = document.getElementById("tweets_tag_name").value;
//       const XHR = new XMLHttpRequest();  // 追加記述
//     })
//   });
// };


// openメソッドを用いてリクエストを定義
// openメソッドの第一引数にHTTPメソッド、第二引数にURL、
// 第三引数には非同期通信であることを示すためにtrueを指定。
// 以下のように編集する。
// if (location.pathname.match("tweets/new")){
//   document.addEventListener("DOMContentLoaded", () => {
//     const inputElement = document.getElementById("tweets_tag_name");
//     inputElement.addEventListener("keyup", () => {
//       const keyword = document.getElementById("tweets_tag_name").value;
//       const XHR = new XMLHttpRequest();
//       XHR.open("GET", `search/?keyword=${keyword}`, true);  // 編集する
//     })
//   });
// };
// 7行目で、searchアクションへリクエストを送るように指定している。
// keywordは、5行目でフォームから取得した文字列のこと。


// レスポンスの形式を指定する
// コントローラーから返却されるデータの形式には、
// JavaScriptと相性がよく、データとして取り扱いやすいjson形式を指定する。
// 以下のように編集。
// if (location.pathname.match("tweets/new")){
//   document.addEventListener("DOMContentLoaded", () => {
//     const inputElement = document.getElementById("tweets_tag_name");
//     inputElement.addEventListener("keyup", () => {
//       const keyword = document.getElementById("tweets_tag_name").value;
//       const XHR = new XMLHttpRequest();
//       XHR.open("GET", `search/?keyword=${keyword}`, true);
//       XHR.responseType = "json";  // 編集する
//     })
//   });
// };


// リクエストを送信する
// tag.jsからサーバーサイドに送信したいリクエストを定義できたので、
// 送信する処理を記述する。
// リクエストの送信にはsendメソッドを用いる。
// 以下のように編集してください。
// if (location.pathname.match("tweets/new")){
//   document.addEventListener("DOMContentLoaded", () => {
//     const inputElement = document.getElementById("tweets_tag_name");
//     inputElement.addEventListener("keyup", () => {
//       const keyword = document.getElementById("tweets_tag_name").value;
//       const XHR = new XMLHttpRequest();
//       XHR.open("GET", `search/?keyword=${keyword}`, true);
//       XHR.responseType = "json";
//       XHR.send();  // 編集する
//     })
//   });
// };

// 編集できたら、リクエストを送信できているかブラウザで確認する。
// フォームに何か入力してみる。
// 正しく動作していれば、レスポンスが返却されている。


// 非同期通信後の処理を実装を行う
// 次に、コントローラから返ってきた情報を元に、タグを表示させる実装を行う。
// まずは、非同期通信が成功したときに呼び出される関数を用意する。

// 関数を用意する
// 非同期通信が成功したときには、
// onloadプロパティに定義された関数が呼び出される。
// 以下のように編集する。
// if (location.pathname.match("tweets/new")){
//   document.addEventListener("DOMContentLoaded", () => {
// # 省略
//       XHR.send();
//       XHR.onload = () => {
//         console.log("非同期通信成功");
//       };
//     });
//   });
// };

// 編集できたら、フォームに文字を入力してみる。
// コンソール上に"非同期通信成功"と表示されたらOK。


// サーバーサイドからのレスポンスを受け取る
// サーバーサイドの処理が成功したときにレスポンスとして返ってくるデータを受け取る。
// データの受け取りには、responseプロパティを使用する。
// if (location.pathname.match("tweets/new")){
//   document.addEventListener("DOMContentLoaded", () => {
// # 省略
//       XHR.send();
//       XHR.onload = () => {
//         const tagName = XHR.response.keyword;  // データを受け取る
//       };
//     });
//   });
// };