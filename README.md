# Athelatic - Workout Generator

A smart, interactive workout generator built with React that creates personalized exercise routines based on your training preferences.

## Overview

**Athelatic** removes the guesswork from workout planning. Simply select your workout type, target muscle groups, and training goal—the app instantly generates a complete workout with exercise assignments, reps, tempos, and rest periods.

## Features

###  Smart Workout Generation
- **Dynamic Exercise Selection**: Intelligently selects exercises from a comprehensive database based on your targets
- **Compound + Accessory Distribution**: Automatically balances compound and accessory movements according to your training scheme
- **Tempo & Rep Assignment**: Calculates optimal reps and tempo based on your training goal (strength, power, hypertrophy, etc.)
- **No Repetition**: Ensures exercise variety within each workout

###  Three-Step Configuration
1. **Pick Your Poison** - Choose your workout type:
   - Individual (muscle group focused)
   - Upper/Lower splits
   - Push/Pull/Legs
   - And more...

2. **Lock on Targets** - Select 1-2 muscle groups to focus on
   - Adaptive selection based on workout type
   - Clear visual feedback

3. **Become Juggernaut** - Select your training goal:
   - Strength & Power
   - Hypertrophy
   - Endurance
   - And additional schemes

###  Responsive Design
- Mobile, tablet, and desktop optimized
- Dark theme with gradient UI
- Smooth animations and interactive elements
- Font Awesome icons for better UX

## Tech Stack

- **Frontend**: React 19 with Vite
- **Styling**: Tailwind CSS v4 with Lightning CSS
- **Code Quality**: ESLint with React-specific rules
- **Dev Server**: Vite with Hot Module Replacement (HMR)

## Project Structure

```
src/
├── components/
│   ├── Button.jsx          # Reusable button component
│   ├── ExerciseCard.jsx    # Individual exercise display
│   ├── Generator.jsx       # Main workout configuration UI
│   ├── Hero.jsx            # Landing section
│   ├── SectionWraper.jsx   # Layout wrapper component
│   └── Workout.jsx         # Workout display section
├── utils/
│   ├── exercise.js         # Exercise database (exercises, schemes, tempos)
│   └── functions.js        # Workout generation logic
├── App.jsx                 # Main application component
├── index.css               # Global styles
└── main.jsx                # React entry point
```

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The app will be available at `http://localhost:5173` with hot module replacement enabled.

### Build

```bash
npm run build
```

### Preview

```bash
npm run preview
```

### Lint

```bash
npm run lint
```

## How It Works

1. **Workout Type Selection**: Choose between individual muscle groups or predefined splits
2. **Muscle Group Filtering**: The app filters exercises matching your selected muscles
3. **Exercise Distribution**: Distributes exercises between compound and accessory based on your goal scheme
4. **Randomization**: Randomly selects appropriate exercises while preventing repetition
5. **Customization**: Assigns tempo, reps, and rest periods based on your training objective
6. **Display**: Shows your complete workout with exercise details

## Dependencies

### Main
- `react` - UI library
- `react-dom` - React DOM rendering
- `@tailwindcss/vite` - Tailwind CSS integration

### Dev
- `vite` - Build tool and dev server
- `eslint` - Code quality
- `tailwindcss` - Utility-first CSS framework
- `@vitejs/plugin-react` - React support for Vite

---

