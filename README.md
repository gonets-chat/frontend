# OpenVerse frontend

Отдельный frontend-сервис на React, TypeScript, Vite и React Router. FastAPI
остаётся backend-сервисом и предоставляет HTTP- и WebSocket-контракты.

## Запуск

Сначала запусти FastAPI на порту `8000`, затем frontend:

```powershell
cd frontend
npm run dev
```

Открой `http://localhost:5173`.

Vite перенаправляет запросы `/auth`, `/chat`, `/users` и `/ws` в FastAPI. Перед
подключением WebSocket добавь `http://localhost:5173` в локальный
`WS_ALLOWED_ORIGINS`.

## Структура

- `src/main.tsx` — вход в React-приложение.
- `src/app/router.tsx` — маршруты приложения.
- `src/App.tsx` — общий layout и навигация.
- `src/pages/` — компоненты отдельных страниц.
- `vite.config.ts` — dev-сервер и прокси к FastAPI.

## План обучения

1. Разобрать JSX и компонент `HomePage`.
2. Разобрать `useState` и обработчик нажатия.
3. Добавить новый маршрут самостоятельно.
4. Получить первые данные из FastAPI.
5. Перенести список чатов и подключить WebSocket.

Первое упражнение: добавь четвёртую карточку в массив `topics` внутри
`HomePage.tsx` и объясни, почему интерфейс обновится без прямого изменения DOM.
