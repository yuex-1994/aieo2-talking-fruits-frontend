# Talking Fruits Frontend

A playful Next.js app where users pick a fruit, type a message, and make the fruit "talk" with a simple animation.

## Features

- Choose from multiple fruits (Apple, Banana, Orange, Grape, Strawberry, Watermelon, Pineapple, Pear, Cherry, Peach)
- Enter a custom message
- Trigger a short "talking" animation with the `Speak!` button
- Responsive UI with Tailwind CSS and reusable UI components

## Tech Stack

- Next.js (App Router)
- React
- TypeScript
- Tailwind CSS

## Getting Started

### 1) Install dependencies

```bash
npm install
```

### 2) Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

- `npm run dev` - Start local development server
- `npm run build` - Build production bundle
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Project Structure

- `app/page.tsx` - Main page (fruit selector + message input)
- `components/talking-fruit.tsx` - Fruit display, emoji mapping, and animation state rendering
- `app/globals.css` - Global styles and theme tokens

## Customization

- Add or remove fruits in `app/page.tsx` (`fruits` array)
- Update fruit emoji mapping in `components/talking-fruit.tsx` (`fruitEmojis`)
- Adjust global colors and theme tokens in `app/globals.css`

## Deployment

Deploy easily with Vercel:

1. Push this project to GitHub
2. Import the repository in Vercel
3. Deploy (default Next.js settings work)
