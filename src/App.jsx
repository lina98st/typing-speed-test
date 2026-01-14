import { useState } from 'react'
import Header from './components/Header'
import Stats from './components/Stats'
import ControlPanel from './components/ControlPanel'
import TypingArea from './components/TypingArea'
import Results from './components/Results'
import './App.css';

function App() {
  const [currentPassage, setCurrentPassage] = useState("");
  const [difficulty, setDifficulty] = useState("easy");
  const [mode, setMode] = useState("timed");
  const [isTestActive, setIsTestActive] = useState(false);
  const [showResults, setShowResults] = useState(false);

function handleDifficultyChange(level) {
  console.log("Button clicked! New level:", level);  // ← Semikolon fehlt hier
  setDifficulty(level);
}


  return (
    <div className="app">
      <Header />
      <div className="controls-container">
             <Stats />
      <ControlPanel difficulty={difficulty} onDifficultyChange={handleDifficultyChange}/> 
      </div>
      {!showResults && <TypingArea />}
      {showResults && <Results />}
    </div>
  )
}

export default App