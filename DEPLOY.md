# Инструкция по деплою на Vercel

## Способ 1: Через веб-интерфейс Vercel (Самый простой)

### Шаг 1: Подготовка проекта
Убедитесь, что проект готов:
- Все файлы сохранены
- `npm run build` работает без ошибок

### Шаг 2: Загрузка на GitHub (рекомендуется)
1. Создайте репозиторий на GitHub
2. Выполните в терминале:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin <URL_ВАШЕГО_РЕПОЗИТОРИЯ>
git push -u origin main
```

### Шаг 3: Деплой через Vercel
1. Откройте https://vercel.com
2. Войдите через GitHub
3. Нажмите "Add New..." → "Project"
4. Импортируйте ваш репозиторий
5. Vercel автоматически определит настройки:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`
6. Нажмите "Deploy"
7. Дождитесь окончания деплоя - получите ссылку на сайт!

---

## Способ 2: Через Vercel CLI (Командная строка)

### Шаг 1: Установка Vercel CLI (если не установлен)
```bash
npm i -g vercel
```

### Шаг 2: Логин в Vercel
```bash
vercel login
```
Откроется браузер для авторизации.

### Шаг 3: Деплой проекта
В корне проекта выполните:
```bash
cd /Users/bogdan.rudenko/Desktop/matreshki-co---travel-agency
vercel
```

Отвечайте на вопросы:
- **Set up and deploy?** → Yes
- **Which scope?** → Выберите свой аккаунт
- **Link to existing project?** → No (для первого раза)
- **What's your project's name?** → matreshki-co-travel-agency (или любое другое)
- **In which directory is your code located?** → ./
- **Want to override settings?** → No

### Шаг 4: Продакшн деплой
```bash
vercel --prod
```

---

## Способ 3: Через Vercel CLI с явными настройками

Если CLI спрашивает настройки, используйте:
- **Framework Preset**: Vite
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`
- **Development Command**: `npm run dev`

---

## Важные моменты

1. **Файл vercel.json** уже настроен - ничего менять не нужно
2. **После деплоя** проект будет доступен по адресу:
   `https://matreshki-co-travel-agency.vercel.app` (или ваш custom домен)
3. **Автоматические деплои**: Если подключили GitHub, каждый push в main автоматически деплоит проект
4. **Environment Variables**: Если нужны переменные окружения, добавьте их в настройках проекта на Vercel

---

## Проверка перед деплоем

Убедитесь, что локально всё работает:
```bash
npm run build
npm run preview
```

Если всё работает локально - смело деплойте!

---

## Проблемы?

- Если деплой падает с ошибкой - проверьте логи в Vercel Dashboard
- Убедитесь, что все зависимости указаны в `package.json`
- Проверьте, что `dist` папка создается после `npm run build`

