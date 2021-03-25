## ~~Leisurelyは，より快適にタスクを解消するためのToDoリストアプリです．~~
デモ環境：  https://leisurely-todo.vercel.app/

Vue3, Composition API, TailwindCSS, Firebase Authenticationなどを利用しています．  

Vue3で構築した静的なフロントサイトをVercelでホスティングし，APIサーバーはHerokuにデプロイしています．

特殊な機能をいくつか検討していましたが，開発期間の都合上シンプルなTodoリストの実装を行います．

## 未実装項目（2021.3.26 - 02:18時点）
### 認証
  - パスワード再設定
  - OAuth（Twitter, GitHubなど）
### TODOリスト
  - TodoItemとしてのリストレンダリング
  - TodoItemの作成，閲覧，編集，削除
  - TodoItemの並び替え
  - TodoItemの完了
