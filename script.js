
document.addEventListener('DOMContentLoaded', () => {
    const animatedText = document.querySelector('.animated-text');
  
    animatedText.addEventListener('mouseover', () => {
      animatedText.style.animation = 'rotateText 1s forwards';
    });
  
    animatedText.addEventListener('mouseout', () => {
      animatedText.style.animation = 'colorChange 3s infinite alternate';
    });
  });
  
  @keyframes rotateText {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
  