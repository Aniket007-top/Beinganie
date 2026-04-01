# Beinganie

Beinganie is a free educational platform focused on teaching:

- Artificial Intelligence
- Internet of Things
- Robotics

The project is built as a modern Next.js learning platform with interactive labs, layered learning paths, and free-resource-first content.

## Overview

Beinganie is designed to help learners move from beginner to advanced understanding across future technologies. The platform includes structured subject pages, level-based curriculum routes, and interactive "Play and Learn" labs that make abstract concepts more visual and practical.

## Tech Stack

- Next.js App Router
- React
- Tailwind CSS
- Framer Motion
- Lucide React
- TypeScript

## Main Features

- Futuristic responsive homepage
- Dedicated learning tracks for AI, IoT, and Robotics
- Three-level learning structure for each subject:
  - Beginner
  - Intermediate
  - Advanced
- Interactive labs:
  - AI Lab: Train the Model
  - IoT Lab: Smart Home Architect
  - Robotics Lab: Code the Rover
- Dark and light mode support
- Resource cards and downloadable notes
- Local progress tracking with `localStorage`

## Routes

- `/`
- `/ai`
- `/ai/beginner`
- `/ai/intermediate`
- `/ai/advanced`
- `/iot`
- `/iot/beginner`
- `/iot/intermediate`
- `/iot/advanced`
- `/robotics`
- `/robotics/beginner`
- `/robotics/intermediate`
- `/robotics/advanced`

## Project Structure

```text
app/
  ai/
  iot/
  robotics/
  globals.css
  layout.tsx
  page.tsx
components/
  code-the-rover.tsx
  hero-section.tsx
  learning-module.tsx
  level-page.tsx
  site-header.tsx
  smart-home-architect.tsx
  subject-page.tsx
  train-the-model.tsx
lib/
  learning-paths.ts
```

## Run Locally

```bash
npm install
npm run dev
```

Open:

```text
http://localhost:3000
```

## Production Checks

```bash
npm run lint
npm run build
```

## Notes

- The active application is the Next.js app inside this repository.
- Legacy static template files are still present for reference, but the main project experience runs through Next.js.

## Mission

Knowledge is free for everyone.
