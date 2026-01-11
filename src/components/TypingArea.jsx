function TypingArea() {
  return (
    <div className="typing-area">
      {/* Start button and instructions */}
      <div className="start-section">
        <button className="start-button">Start Typing Test</button>
        <p className="instruction-text">Or click the text and start typing</p>
      </div>

      {/* The passage text that user will type */}
      <div className="passage-container">
        <p className="passage-text">
          {/* This will show the passage from data.json later */}
          The sun rose over the quiet town. Birds sang in the trees as people woke up and started their day.
        </p>
      </div>

      {/* Hidden input field for capturing typing */}
      <input 
        type="text" 
        className="typing-input"
        placeholder="Start typing..."
        style={{ opacity: 0, position: 'absolute' }}
      />
    </div>
  )
}

export default TypingArea