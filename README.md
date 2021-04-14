## Vue3, TypeScriptのチュートリアル用リポジトリです
デモ環境：  https://leisurely-todo.vercel.app/
※ まだ正常に動作しません

Vue3, Composition API, TailwindCSS, Firebase Authenticationなどを利用しています．  

Vue3で構築した静的なフロントサイトをVercelでホスティングし，APIサーバーはHerokuにデプロイしています．

特殊な機能をいくつか検討していましたが，開発期間の都合上シンプルなTodoリストの実装を行います．

- 登録不要のTODOリスト機能
  - 作成
  - 削除
- Authenticationによるメールアドレスでのユーザー登録
- Express（https://github.com/you-5805/todo-express-tutorial） でユーザーとTODOリストデータの紐付け
