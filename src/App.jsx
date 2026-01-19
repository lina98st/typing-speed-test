import { useState, useEffect } from 'react'
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
  console.log("Button clicked! New level:", level); 
  setDifficulty(level);
}

function handleModeChange(mode) {
  console.log("Mode Button clicked", mode);
  setMode(mode);
}

//fetch api for json text
async function loadPassages() {
  const url = "/data.json";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const result = await response.json();
    console.log(result);
    return result;  
  } catch (error) {
    console.error(error.message);
  }
}

//load json data with useEffect
useEffect(() => {
  const fetchData = async () => {
    const data = await loadPassages();
    if (data) {
      console.log(data);
    }
  };
  
  fetchData();
}, []);

//load right difficulty list 
  function selectRandomPassage(allData, difficultyLevel) {
const array = allData[difficultyLevel]
  const index = Math.floor(Math.random() * array.length)
return array[index].text  
  }

  return (
    <div className="app">
      <Header />
      <div className="controls-container">
             <Stats />
      <ControlPanel difficulty={difficulty} onDifficultyChange={handleDifficultyChange}
      mode={mode} onModeChange={handleModeChange}/> 
      </div>
      {!showResults && <TypingArea />}
      {showResults && <Results />}
    </div>
  )
}

export default App