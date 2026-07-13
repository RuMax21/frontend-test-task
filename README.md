# Frontend Test Task

Тестовое задание
Стек: React + Typescript + scss + RTK, бандлер - Vite

- **`/`** — Задание 1: мини-каталог товаров с поиском, фильтром по категории и корзиной на Redux Toolkit.
- **`/team`** — Задание 2: список участников команды, форма добавления, модальное окно с деталями, удаление с отменой.

## Запуск через Docker

```bash
docker build -t mini-store-team .
docker run -p 3000:3000 mini-store-team
```

Приложение будет доступно на `http://localhost:3000`.
