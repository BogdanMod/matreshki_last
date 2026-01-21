# Деплой на Cloudflare Pages

## Вариант 1: Через веб-интерфейс (рекомендуется)

1. Зайдите на https://dash.cloudflare.com/
2. Войдите или зарегистрируйтесь (бесплатно)
3. Перейдите в **Pages** → **Create a project**
4. Выберите **Connect to Git**
5. Подключите репозиторий GitHub: `https://github.com/BogdanMod/matreshki_last`
6. Настройки сборки:
   - **Framework preset**: Vite
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
7. Нажмите **Save and Deploy**
8. Через несколько минут сайт будет доступен по адресу: `https://matreshki.pages.dev` (или ваш кастомный домен)

## Вариант 2: Через Wrangler CLI

```bash
# Авторизация
npx wrangler pages login

# Деплой
npx wrangler pages deploy dist --project-name=matreshki
```

## Преимущества Cloudflare Pages:
- ✅ Бесплатно
- ✅ Без лимитов на деплои
- ✅ Быстрый CDN
- ✅ Автоматический деплой из GitHub
- ✅ SSL сертификат включен

