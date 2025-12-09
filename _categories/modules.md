---
title: "Modules"
weight: 2
---

A curated list of Drupal modules created specifically to address unique Japanese needs, standards, and integrations.

Missing a module? The website is open-source, you can contribute [here](https://github.com/remisimaer/wadrop.github.io).

* * *

### Search API Japanese Normalizer

This module provides a processor for the Search API that standardizes variations in Japanese text, such as full-width and half-width characters or different Katakana representations. By normalizing these inputs, it significantly improves search accuracy and consistency for Japanese content.

**Developed by:** [Studio Umi](https://www.drupal.org/studio-umi)

[View on Drupal.org](https://www.drupal.org/project/search_api_japanese_normalizer)

* * *

### Search API Japanese Tokenizer

Unlike English, Japanese text does not use spaces to separate words, which can make standard search indexing imprecise. This module solves that issue by using natural language processing (supporting TinySegmenter, MeCab, and Sudachi) to correctly segment and index Japanese text at the word level, rather than relying on basic N-gram methods.

**Developed by:** [Studio Umi](https://www.drupal.org/studio-umi)

[View on Drupal.org](https://www.drupal.org/project/search_api_japanese_tokenizer)

* * *

### Search API Kana Convert

This module acts as a wrapper for PHP's mb_convert_kana function, allowing the Search API to convert between various Japanese character types (Hiragana, Katakana, Zenkaku, and Hankaku). This normalization ensures that a user searching in one character type can still find content written in another.

**Developed by:** [Studio Umi](https://www.drupal.org/studio-umi)

[View on Drupal.org](https://www.drupal.org/project/search_api_kana_convert)

* * *

### Commerce PayPay

This module integrates PayPay, a widely used mobile payment service in Japan, into Drupal Commerce. It allows customers to pay via QR codes and supports essential e-commerce features such as authorization, capture, refunds, and a sandbox mode for testing.

**Developed by:** [remi-simaer](https://www.drupal.org/u/remi-simaer)

[View on Drupal.org](https://www.drupal.org/project/commerce_paypay)

* * *

### LINE Add Friend

This module integrates LINE's Social Plugins to display an "Add Friend" button on your Drupal site. It allows visitors to easily follow a LINE Official Account and offers flexible configuration options, including button size, language settings, and block placement.

**Developed by:** [remi-simaer](https://www.drupal.org/u/remi-simaer)

[View on Drupal.org](https://www.drupal.org/project/line_add_friend)

* * *

### JapaneseEraFormatter

Designed for sites requiring traditional date formatting, this module converts standard Western calendar dates into the Japanese era format (e.g., Reiwa, Heisei, Showa). It provides a custom field formatter compatible with any datetime field in Drupal.

**Developed by:** [umekikazuya](https://www.drupal.org/u/umekikazuya)

[View on Drupal.org](https://www.drupal.org/project/japanese_era_formatter)

* * *