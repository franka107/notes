import { QuartzComponentConstructor } from "../types"
import style from "../styles/customFlashCard.scss"

// Define tu contenido de flashcards aquí
const defaultCards = [
  { front: "good", back: "at", category: "AT" },
  { front: "bad", back: "at", category: "AT" },
  { front: "interested", back: "in", category: "IN" },
  { front: "afraid", back: "of", category: "OF" },
  { front: "worried", back: "about", category: "ABOUT" },
  { front: "married", back: "to", category: "TO" },
  { front: "angry", back: "with", category: "WITH" },
  { front: "famous", back: "for", category: "FOR" },
  { front: "different", back: "from", category: "FROM" }
]

export default (() => {
  function FlashcardSystem() {
    // Creamos un identificador único para este conjunto de flashcards
    const containerId = `flashcards-${Math.random().toString(36).substring(2, 9)}`
    
    return (
      <div class="flashcards-wrapper">
        <div class="flashcard-container" id={containerId}>
          <div class="flashcard-stats">
            <span class="card-counter">Tarjeta 1 de {defaultCards.length}</span>
            <span class="card-category"></span>
          </div>
          
          <div class="flashcard">
            <div class="flashcard-inner">
              <div class="flashcard-front">
                <div class="card-content"></div>
                <div class="card-hint">Haz clic para ver la respuesta</div>
              </div>
              <div class="flashcard-back">
                <div class="card-content"></div>
              </div>
            </div>
          </div>
          
          <div class="flashcard-controls">
            <button class="prev-btn">Anterior</button>
            <button class="shuffle-btn">Barajar</button>
            <button class="next-btn">Siguiente</button>
          </div>
        </div>
      </div>
    )
  }

  // Este script se ejecuta después de que se carga el DOM
  FlashcardSystem.afterDOMLoaded = `
    document.addEventListener("nav", function setupFlashcards() {
      const containers = document.querySelectorAll('.flashcard-container');
      
      containers.forEach(container => {
        if (container.dataset.initialized) return;
        container.dataset.initialized = "true";
        
        // Elementos del DOM
        const flashcard = container.querySelector('.flashcard');
        const cardFront = container.querySelector('.flashcard-front .card-content');
        const cardBack = container.querySelector('.flashcard-back .card-content');
        const cardCounter = container.querySelector('.card-counter');
        const cardCategory = container.querySelector('.card-category');
        const prevBtn = container.querySelector('.prev-btn');
        const nextBtn = container.querySelector('.next-btn');
        const shuffleBtn = container.querySelector('.shuffle-btn');
        
        // Datos de flashcards
        const cards = ${JSON.stringify(defaultCards)};
        let shuffledCards = [...cards];
        let currentIndex = 0;
        let isFlipped = false;
        
        // Inicializar tarjetas
        shuffleCards();
        updateCard();
        
        // Manejar clic en la tarjeta
        flashcard.addEventListener('click', toggleFlip);
        
        // Botones de navegación
        prevBtn.addEventListener('click', showPrevCard);
        nextBtn.addEventListener('click', showNextCard);
        shuffleBtn.addEventListener('click', shuffleCards);
        
        // Funciones
        function toggleFlip() {
          isFlipped = !isFlipped;
          flashcard.classList.toggle('flipped', isFlipped);
        }
        

        function showPrevCard() {
          if (currentIndex > 0) {
            currentIndex--;
            isFlipped = false;
            updateCard();
          }
        }
        
        function showNextCard() {
          if (currentIndex < shuffledCards.length - 1) {
            currentIndex++;
            isFlipped = false;
            updateCard();
          }
        }
        
        function shuffleCards() {
          shuffledCards = [...cards].sort(() => Math.random() - 0.5);
          currentIndex = 0;
          isFlipped = false;
          updateCard();
        }
        
        function updateCard() {
          const card = shuffledCards[currentIndex];
          cardFront.textContent = card.front;
          cardBack.textContent = card.back;
          cardCounter.textContent = \`Tarjeta \${currentIndex + 1} de \${shuffledCards.length}\`;
          cardCategory.textContent = card.category ? \`Grupo: \${card.category}\` : '';
          flashcard.classList.toggle('flipped', isFlipped);
          
          // Actualizar estado de botones
          prevBtn.disabled = currentIndex === 0;
          nextBtn.disabled = currentIndex === shuffledCards.length - 1;
        }
        
        // Limpiar eventos al navegar
        window.addCleanup(() => {
          flashcard.removeEventListener('click', toggleFlip);
          prevBtn.removeEventListener('click', showPrevCard);
          nextBtn.removeEventListener('click', showNextCard);
          shuffleBtn.removeEventListener('click', shuffleCards);
        });
      });
    });
    
    // Trigger inicial para la página actual
    document.dispatchEvent(new Event('nav'));
  `

  FlashcardSystem.css = style
  return FlashcardSystem
}) satisfies QuartzComponentConstructor