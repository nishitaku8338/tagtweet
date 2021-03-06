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
        const tagName = XHR.response.keyword;  // レスポンスとして返ってくるデータを受け取る。responseプロパティを使用
        const searchResult = document.getElementById("search-result");  // search-resultというid名がついた要素を取得
        tagName.forEach((tag) => {  // 検索結果があるだけ以下の処理を繰り返す
          const childElement = document.createElement("div");  // タグ名を格納するための要素を用意 createElementメソッドを用いて、タグを表示させるための要素を生成
          childElement.setAttribute("class", "child");
          childElement.setAttribute("id", tag.id);  // 生成した要素に検索結果のタグ名を指定
          childElement.innerHTML = tag.name;  // タグを表示させるための要素(16行目)を、タグを表示させる場所(14行目の要素)に挿入する
          searchResult.appendChild(childElement);  // タグを表示させるための要素(16行目)を、タグを表示させる場所(14行目の要素)に挿入する
          // 挙動を確認したとき、複数のタグが表示されてしまうのは、現段階での仕様で、後ほど解消する。
          childElement.addEventListener("click", () => {  // タグを表示している要素にクリックイベントを指定
            document.getElementById("tweets_tag_name").value = childElement.textContent;  // フォームにタグ名を入力して、
            childElement.remove();  // タグを表示している要素を削除するようにする
          });
        });
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


// タグを表示させる処理を記述する
// タグを表示させる手順は以下の4つ。
// 下のコードと見比べながら、それぞれの手順を確認する。

// ① タグを表示させる場所を取得する
// 7行目では、search-resultというid名がついた要素を取得しています。

// ② タグ名を格納するための要素を用意する
// 9行目では、createElementメソッドを用いて、
// タグを表示させるための要素を生成している。
// 11行目では、生成した要素に検索結果のタグ名を指定している。

// ③ ②の要素にタグを挿入する
// 12行目では、②で用意した要素を①の要素に挿入している。
// それぞれinnerHTMLプロパティとappendChildメソッドを用いる。

// ④ ②と③の処理を、検索結果があるだけ繰り返す
// 8行目では、forEachを用いて繰り返し処理を行っている。

// 上記の4つの手順を参考にして、以下のように編集する。

// if (location.pathname.match("tweets/new")){
//   document.addEventListener("DOMContentLoaded", () => {
// # 省略
//       XHR.send();
//       XHR.onload = () => {
//         const tagName = XHR.response.keyword;
//         const searchResult = document.getElementById("search-result");
//         tagName.forEach((tag) => {
//           const childElement = document.createElement("div");
//           childElement.setAttribute("class", "child");
//           childElement.setAttribute("id", tag.id);
//           childElement.innerHTML = tag.name;
//           searchResult.appendChild(childElement);
//         });
//       };
//     });
//   });
// };

// 編集できたら、フォームに何か入力してみましょう。
// タグが作られていれば、正しく実装できている。
// 挙動を確認したとき、複数のタグが表示されてしまうのは、現段階での仕様で、後ほど解消する。


// クリックしたタグ名がフォームに入力されるようする
// タグを表示している要素にクリックイベントを指定する。
// クリックされたら、フォームにタグ名を入力して、
// タグを表示している要素を削除するようにする。
// 以下のように編集してください。
// if (location.pathname.match("tweets/new")){
//   document.addEventListener("DOMContentLoaded", () => {
// # 省略
//       XHR.send();
//       XHR.onload = () => {
//         const tagName = XHR.response.keyword;
//         const searchResult = document.getElementById("search-result");
//         tagName.forEach((tag) => {
//           const childElement = document.createElement("div");
//           childElement.setAttribute("class", "child");
//           childElement.setAttribute("id", tag.id);
//           childElement.innerHTML = tag.name;
//           searchResult.appendChild(childElement);
//           const clickElement = document.getElementById(tag.id);
//           // ↓↓ここから記述する
//           clickElement.addEventListener("click", () => {
//             document.getElementById("tweets_tag_name").value = clickElement.textContent;
//             clickElement.remove();
//           });
//         });
//         // ここまで記述する //
//       };
//     });
//   });
// };

// 編集できたら、インクリメンタルサーチを行って、
// 表示されたタグをクリックしてみる。
// クリックしたタグが消えて、
// フォームにクリックしたタグ名が入力されていればOK。

// しかし、
// このままだと同じタグが何度も表示されたままになってしまう。
// この原因は、インクリメンタルサーチが行われるたびに、
// 前回の検索結果を残したまま最新の検索結果を追加してしまうから。
// インクリメンタルサーチが行われるたびに、直前の検索結果を消すようにする。