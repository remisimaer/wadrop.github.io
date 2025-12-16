---
title: "モジュール"
weight: 2
permalink: /categories/modules/
lang: ja
---

日本特有の要件や標準、外部サービス連携に対応するために開発された Drupal モジュールを厳選して紹介します。

モジュールを追加したいですか？ 本サイトはオープンソースです。こちらから貢献できます：

[貢献する](https://github.com/remisimaer/wadrop.github.io)

* * *

### Search API Japanese Normalizer

Search API 用のプロセッサを提供し、全角／半角、カタカナ表記の揺れなど、日本語テキストにありがちな差異を正規化します。入力の揺れを吸収することで、検索の精度と一貫性を大きく向上させます。

**開発者：** [Studio Umi](https://www.drupal.org/studio-umi)

[Drupal.org で見る](https://www.drupal.org/project/search_api_japanese_normalizer)

* * *

### Search API Japanese Tokenizer

日本語は英語のように空白で単語が区切られないため、標準的な検索インデックスでは精度が出にくいことがあります。本モジュールは自然言語処理（TinySegmenter / MeCab / Sudachi 対応）を用いて、日本語を適切に分かち書きし、N-gram のみに依存せず単語単位でインデックス化します。

**開発者：** [Studio Umi](https://www.drupal.org/studio-umi)

[Drupal.org で見る](https://www.drupal.org/project/search_api_japanese_tokenizer)

* * *

### Search API Kana Convert

PHP の `mb_convert_kana` をラップし、Search API の処理内でひらがな／カタカナ、全角／半角などの各種変換を行えるようにします。異なる文字種で検索しても目的のコンテンツに到達しやすくなります。

**開発者：** [Studio Umi](https://www.drupal.org/studio-umi)

[Drupal.org で見る](https://www.drupal.org/project/search_api_kana_convert)

* * *

### Commerce PayPay

日本で広く利用されているモバイル決済 PayPay を Drupal Commerce に統合します。QR コード決済に対応し、オーソリ（与信）、売上確定、返金、テスト用のサンドボックスモードなど、EC に必要な機能を提供します。

**開発者：** [remi-simaer](https://www.drupal.org/u/remi-simaer)

[Drupal.org で見る](https://www.drupal.org/project/commerce_paypay)

* * *

### LINE Add Friend

LINE のソーシャルプラグインを統合し、サイト上に「友だち追加」ボタンを表示できます。ボタンサイズや言語設定、ブロック配置など、柔軟な設定が可能です。

**開発者：** [remi-simaer](https://www.drupal.org/u/remi-simaer)

[Drupal.org で見る](https://www.drupal.org/project/line_add_friend)

* * *

### JapaneseEraFormatter

和暦表記が必要なサイト向けに、西暦の日付を（令和・平成・昭和などの）和暦へ変換します。Drupal の datetime フィールドに対して利用できるカスタムフォーマッタを提供します。

**開発者：** [umekikazuya](https://www.drupal.org/u/umekikazuya)

[Drupal.org で見る](https://www.drupal.org/project/japanese_era_formatter)

* * *
