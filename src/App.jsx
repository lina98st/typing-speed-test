import { useState } from 'react'
import Header from './components/Header'
import Stats from './components/Stats'
import ControlPanel from './components/ControlPanel'
import TypingArea from './components/TypingArea'
import Results from './components/Results'

function App() {
  const [currentPassage, setCurrentPassage] = useState("");
  const [difficulty, setDifficulty] = useState("easy");
  const [mode, setMode] = useState("timed");
  const [isTestActive, setIsTestActive] = useState(false);
  const [showResults, setShowResults] = useState(false);

  return (
    <div className="app">
      <Header />
      <Stats />
      <ControlPanel />
      {!showResults && <TypingArea />}
      {showResults && <Results />}
    </div>
  )
}

export default App