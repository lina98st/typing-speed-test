function ControlPanel() {
  return (
    <div className="control-panel">
      {/* Difficulty selector */}
      <div className="control-group">
        <label>Difficulty:</label>
        <div className="button-group">
          <button className="btn active">Easy</button>
          <button className="btn">Medium</button>
          <button className="btn">Hard</button>
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