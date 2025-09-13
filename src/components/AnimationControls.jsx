function AnimationControls({ isAnimating, onToggle, animationSpeed, onSpeedChange }) {
  const speeds = [
    { value: 0.5, label: '느림' },
    { value: 1, label: '보통' },
    { value: 1.5, label: '빠름' },
    { value: 2, label: '매우 빠름' }
  ]

  return (
    <div className="animation-controls">
      <div className="speed-controls">
        <label htmlFor="speed-select">댄스 속도:</label>
        <select 
          id="speed-select"
          value={animationSpeed} 
          onChange={(e) => onSpeedChange(Number(e.target.value))}
          className="speed-select"
        >
          {speeds.map(speed => (
            <option key={speed.value} value={speed.value}>
              {speed.label}
            </option>
          ))}
        </select>
      </div>
      
      <div className="keyboard-hint">
        <p>⌨️ 스페이스바를 눌러서도 댄스를 시작/중지할 수 있어요!</p>
      </div>
    </div>
  )
}

export default AnimationControls