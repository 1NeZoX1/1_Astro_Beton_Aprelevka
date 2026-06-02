# ЛИДЕР БЕТОН ГРУПП: статический каталог

Astro-проект для SEO-сайта каталога бетона с генерацией страниц из `src/data/products.json`.

## Команды

```bash
npm install
npm run dev
npm run build
npm run preview
```

## Данные товаров

Файл `src/data/products.json` должен содержать только поля:

```json
{
  "category": "Бетон с ПМД",
  "title": "Бетон с ПМД-5 М500 B40 F150 W12 П3",
  "price": 7100
}
```

Производные поля (`slug`, `categorySlug`, `unit`, SEO-тексты, краткое описание) создаются автоматически в `src/lib/catalog.ts`.

## Домен

Перед продакшен-сборкой замените `site` в `astro.config.mjs` и `Sitemap` в `public/robots.txt` на реальный домен сайта.
