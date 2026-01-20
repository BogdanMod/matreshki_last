# Инструкция: Создание нового проекта на Vercel

## Способ 1: Через Vercel Dashboard (Рекомендуется)

### Шаг 1: Создайте новый проект
1. Откройте https://vercel.com/dashboard
2. Нажмите "Add New..." → "Project"
3. Выберите репозиторий `BogdanMod/matreshki_last`

### Шаг 2: Настройте проект
- **Project Name**: `matreshki-new` (или любое другое уникальное имя)
- **Framework Preset**: Vite (определится автоматически)
- **Root Directory**: `.` (оставьте пустым)
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`

### Шаг 3: Задеплойте
- Нажмите "Deploy"
- Дождитесь завершения деплоя
- Получите ссылку на проект!

## Способ 2: Удалить старую связь и создать новую

Если хотите использовать CLI, выполните:

```bash
# Удалить связь со старым проектом
rm -rf .vercel

# Создать новый проект (Vercel спросит создать новый проект)
vercel

# Ответьте на вопросы:
# - Set up and deploy? Yes
# - Link to existing project? No
# - What's your project's name? matreshki-new
# - In which directory is your code located? ./

# После деплоя
vercel --prod
```

## Текущая ссылка на деплой

Из последнего деплоя была создана ссылка:
**https://matreshki-co-travel-agency-h5p57ftzc-bogdanmods-projects.vercel.app**

Но деплой был прерван. Лучше создать проект через веб-интерфейс - это самый надежный способ.

