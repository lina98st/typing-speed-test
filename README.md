# Typing Speed Test

A typing speed test application built with React and Vite as part of the Frontend Mentor challenge.

**Challenge by [Frontend Mentor](https://www.frontendmentor.io/challenges/typing-speed-test)**

## Project Overview

This project is a full-featured typing speed test that allows users to practice their typing skills with different difficulty levels and test modes. The application tracks performance metrics in real-time and stores personal bests using localStorage.

## Features

### Completed Features
- Multiple difficulty levels (Easy, Medium, Hard)
- Two test modes: Timed (60s countdown) and Passage mode (no time limit)
- Dynamic difficulty and mode selection with visual feedback
- JSON data loading with random passage selection
- Responsive design with custom styling

### In Progress
- Real-time WPM and accuracy tracking
- Visual feedback for typing (correct/incorrect characters)
- Timer functionality
- Results screen with performance metrics
- Personal best tracking with localStorage
- Confetti animation for high scores

## Tech Stack

- React 18
- Vite
- CSS3 (Custom Properties)
- Google Fonts (Sora)

## Installation and Setup
```bash
# Clone the repository
git clone https://github.com/lina98st/typing-speed-test.git

# Navigate to project directory
cd typing-speed-test

# Install dependencies
npm install

# Run development server
npm run dev
```

## Project Structure
```
typing-speed-test/
├── public/
│   └── data.json           # Passage data organized by difficulty
├── src/
│   ├── assets/
│   │   └── images/         # Logo and image assets
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Stats.jsx
│   │   ├── ControlPanel.jsx
│   │   ├── TypingArea.jsx
│   │   └── Results.jsx
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
└── README.md
```

## Current Implementation

### Difficulty Selection
Users can select between three difficulty levels (Easy, Medium, Hard) which determines the complexity of the typing passage.

### Mode Selection
- **Timed Mode**: 60-second countdown timer
- **Passage Mode**: Timer counts up with no time limit

### Data Loading
Passages are loaded from a local JSON file and randomly selected based on the chosen difficulty level.

## Deployment

This project can be deployed using:
- [Vercel](https://vercel.com/)
- [Netlify](https://www.netlify.com/)
- [GitHub Pages](https://pages.github.com/)

## Development Notes

This project is being built as a learning exercise for React fundamentals including:
- State management with useState
- Side effects with useEffect
- Component composition and props
- Event handling
- Data fetching and JSON parsing

## License

This project is part of the Frontend Mentor challenge platform and is free to use for practice and learning purposes.

## Acknowledgments

- Challenge provided by [Frontend Mentor](https://www.frontendmentor.io)
- Design assets and specifications by Frontend Mentor