import catSvg from '../assets/images/cat.svg'
import { useAnimation } from '../hooks/useAnimation'
import AnimationControls from './AnimationControls'
import '../styles/animations.css'

function DancingCat() {
  const { 
    isAnimating, 
    animationSpeed, 
    toggleAnimation, 
    changeSpeed 
  } = useAnimation()

  return (
    <div className="dancing-cat-container">
      <div 
        className={`cat-wrapper ${isAnimating ? 'dancing' : ''}`}
        style={{ 
          animationDuration: isAnimating ? `${1/animationSpeed}s` : 'initial' 
        }}
      >
        <img 
          src={catSvg} 
          alt="Dancing Cat" 
          className="cat-image"
          onClick={toggleAnimation}
          style={{ 
            animationDuration: isAnimating ? `${0.6/animationSpeed}s, ${0.8/animationSpeed}s, ${2/animationSpeed}s` : 'initial' 
          }}
        />
      </div>
      
      <button 
        className="dance-button"
        onClick={toggleAnimation}
      >
        {isAnimating ? '춤 멈추기' : '춤 시작!'}
      </button>
      
      <AnimationControls 
        isAnimating={isAnimating}
        onToggle={toggleAnimation}
        animationSpeed={animationSpeed}
        onSpeedChange={changeSpeed}
      />
      
      <p className="instruction">
        고양이를 클릭하거나 버튼을 눌러서 춤춰보세요!
      </p>
    </div>
  )
}

export default DancingCat