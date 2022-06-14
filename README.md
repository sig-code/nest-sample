<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>

## NestJS の環境構築用のリポジトリ

Docker + NestJS + Typeorm の構成になっています。<br>
とくにカスタマイズはしていません<br>
node イメージをもとに Nestjs/cli をインストールしています。<br>
<br>
このリポジトリをもとに環境構築する場合は下記の記事を参考にしてください<br>
https://zenn.dev/senri/articles/331162304a78e0
<br>
基本的には

```
docker compose up -d --build
```
コマンドで環境構築を完了することができると思われます。<br>
できなかったらすいません。<br>
<br>
また、マイグレーションコマンドを npm script にて簡便にしています。<br>
基本的にDockerコンテナ内で走らせます<br>
マイグレーションファイルを作成するとき<br>

```
npm run migration:generate [名前]
```

<br>
マイグレーションを走らせるとき<br>

```
npm run migration:run
```

<br>
マイグレーションの履歴を確認するとき<br>

```
npm run migration:status
```

<br>
マイグレーションの実行を戻したいとき<br>

```
npm run migration:revert
```

<br>
詳細はpackage.jsonを見てください
