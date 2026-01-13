function ControlPanel({ difficulty, onDifficultyChange }) {
  return (
    <div className="control-panel">
      {/* Difficulty selector */}
      <div className="control-group">
        <label>Difficulty:</label>
        <div className="button-group">
<button className={difficulty === "easy" ? "btn active" : "btn"} onClick={() => onDifficultyChange("easy")}>Easy</button>
<button className={difficulty === "medium" ? "btn active" : "btn"} onClick={() => onDifficultyChange("medium")}>Medium</button>
<button className={difficulty === "hard" ? "btn active" : "btn"} onClick={() => onDifficultyChange("hard")}>Hard</button>
        </div>
      </div>

      {/* Mode selector */}
      <div className="control-group">
        <label>Mode:</label>
        <div className="button-group">
          <button className="btn active">Timed (60s)</button>
          <button className="btn">Passage</button>
        </div>
      </div>

      {/* Restart button (will be added later) */}
    </div>
  )
}

export default ControlPanel