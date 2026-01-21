# Проверка настроек Cloudflare Pages

## Правильные настройки для вашего проекта:

### Build configuration:
- **Build command**: `npm run build`
- **Build output directory**: `dist`
- **Root directory**: `/` (или оставьте пустым)
- **Build comments**: Enabled (можно оставить)

### Git repository:
- ✅ `BogdanMod/matreshki_last` - правильно

### Branch control:
- **Production branch**: `main` - правильно
- **Automatic deployments**: Enabled - правильно

### Build watch paths:
- **Include paths**: `*` - правильно (следит за всеми изменениями)

## Что проверить:

1. **Build command** должен быть: `npm run build`
2. **Build output directory** должен быть: `dist` (не `build` или другое)
3. **Root directory** должен быть: `/` или пустым

## Если настройки отличаются:

1. Нажмите на иконку редактирования (✏️) рядом с "Build configuration"
2. Убедитесь, что:
   - Build command: `npm run build`
   - Build output directory: `dist`
   - Root directory: `/`
3. Сохраните изменения

## Важно:

Если вы видите "Workers & Pages" в названии - это нормально, Cloudflare объединил их в один раздел. Главное, что это Pages проект (не Worker).

