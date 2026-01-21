# Исправление настроек Cloudflare

## Проблема
В настройках Cloudflare видно "Workers & Pages", но deploy command обязателен.

## Решение

### Вариант 1: Использовать пустую команду
В поле "Deploy command" введите:
```
echo "Deploy completed"
```
Или просто:
```
true
```

### Вариант 2: Убедитесь, что это Pages проект, а не Worker
1. Удалите текущий проект (если это Worker)
2. Создайте новый проект через **Pages** (не Workers)
3. В Pages deploy command не нужен

### Вариант 3: Правильные настройки для Pages
Если это действительно Pages проект:
- **Build command**: `npm run build`
- **Deploy command**: оставьте пустым или `echo "done"`
- **Root directory**: `/` (или оставьте пустым)
- **Output directory**: `dist`

### Вариант 4: Если это Worker (неправильно)
Если вы создали Worker вместо Pages:
1. Удалите Worker проект
2. Создайте новый проект через **Pages** → **Create a project** → **Connect to Git**
3. Выберите репозиторий `BogdanMod/matreshki_last`
4. Framework preset: **Vite**
5. Build command: `npm run build`
6. Build output directory: `dist`
7. Deploy command: оставьте пустым (Pages не требует deploy command)

