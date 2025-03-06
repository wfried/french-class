import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState<'accueil' | 'explication' | 'exercices' | 'quiz'>('accueil');

  return (
    <div className="app-container">
      <header>
        <h1>Imparfait vs Passé Composé</h1>
        <nav>
          <button 
            className={activeSection === 'accueil' ? 'active' : ''} 
            onClick={() => setActiveSection('accueil')}
          >
            Accueil
          </button>
          <button 
            className={activeSection === 'explication' ? 'active' : ''} 
            onClick={() => setActiveSection('explication')}
          >
            Explications
          </button>
          <button 
            className={activeSection === 'exercices' ? 'active' : ''} 
            onClick={() => setActiveSection('exercices')}
          >
            Exercices
          </button>
          <button 
            className={activeSection === 'quiz' ? 'active' : ''} 
            onClick={() => setActiveSection('quiz')}
          >
            Quiz
          </button>
        </nav>
      </header>

      <main>
        {activeSection === 'accueil' && <Accueil />}
        {activeSection === 'explication' && <Explication />}
        {activeSection === 'exercices' && <Exercices />}
        {activeSection === 'quiz' && <Quiz />}
      </main>

      <footer>
        <p>Créé pour les élèves de Français 2</p>
      </footer>
    </div>
  )
}

function Accueil() {
  return (
    <div className="section accueil">
      <h2>Bienvenue!</h2>
      <p>Cette application va t'aider à comprendre la différence entre l'imparfait et le passé composé.</p>
      <div className="info-cards">
        <div className="card">
          <h3>L'imparfait</h3>
          <p>Pour décrire des actions continues, habituelles ou des situations dans le passé.</p>
          <p>Exemple: <em>Je jouais au foot tous les jours.</em></p>
        </div>
        <div className="card">
          <h3>Le passé composé</h3>
          <p>Pour des actions complètes ou des événements spécifiques dans le passé.</p>
          <p>Exemple: <em>J'ai joué au foot hier.</em></p>
        </div>
      </div>
      <p className="instructions">Clique sur "Explications" pour en savoir plus, ou essaie les exercices et le quiz!</p>
    </div>
  )
}

function Explication() {
  const [activeTab, setActiveTab] = useState<'imparfait' | 'passeCompose' | 'comparaison'>('imparfait');

  return (
    <div className="section explication">
      <div className="tabs">
        <button 
          className={activeTab === 'imparfait' ? 'active' : ''} 
          onClick={() => setActiveTab('imparfait')}
        >
          L'imparfait
        </button>
        <button 
          className={activeTab === 'passeCompose' ? 'active' : ''} 
          onClick={() => setActiveTab('passeCompose')}
        >
          Le passé composé
        </button>
        <button 
          className={activeTab === 'comparaison' ? 'active' : ''} 
          onClick={() => setActiveTab('comparaison')}
        >
          Comparaison
        </button>
      </div>

      <div className="tab-content">
        {activeTab === 'imparfait' && (
          <div>
            <h2>L'imparfait</h2>
            <h3>Quand utiliser l'imparfait?</h3>
            <ul>
              <li>Pour décrire une situation ou un contexte dans le passé</li>
              <li>Pour parler d'actions habituelles ou répétées dans le passé</li>
              <li>Pour décrire des actions en cours dans le passé</li>
              <li>Pour parler d'états physiques ou émotionnels dans le passé</li>
            </ul>

            <h3>Formation</h3>
            <p>Radical de la 1ère personne du pluriel au présent (nous) + terminaisons:</p>
            <div className="conjugaison">
              <p>je <strong>-ais</strong></p>
              <p>tu <strong>-ais</strong></p>
              <p>il/elle/on <strong>-ait</strong></p>
              <p>nous <strong>-ions</strong></p>
              <p>vous <strong>-iez</strong></p>
              <p>ils/elles <strong>-aient</strong></p>
            </div>

            <h3>Exemples</h3>
            <ul>
              <li>Quand j'étais petit, je jouais souvent au parc.</li>
              <li>Il faisait beau hier, mais j'avais trop de devoirs.</li>
              <li>Nous mangions toujours à 19h.</li>
            </ul>
          </div>
        )}

        {activeTab === 'passeCompose' && (
          <div>
            <h2>Le passé composé</h2>
            <h3>Quand utiliser le passé composé?</h3>
            <ul>
              <li>Pour parler d'actions complètes et finies dans le passé</li>
              <li>Pour une séquence d'événements</li>
              <li>Pour des actions avec un début et une fin clairs</li>
              <li>Pour des actions spécifiques à un moment précis</li>
            </ul>

            <h3>Formation</h3>
            <p>Auxiliaire (avoir ou être) conjugué au présent + participe passé</p>
            <div className="conjugaison">
              <h4>Avec avoir:</h4>
              <p>j'<strong>ai</strong> mangé</p>
              <p>tu <strong>as</strong> mangé</p>
              <p>il/elle/on <strong>a</strong> mangé</p>
              <p>nous <strong>avons</strong> mangé</p>
              <p>vous <strong>avez</strong> mangé</p>
              <p>ils/elles <strong>ont</strong> mangé</p>

              <h4>Avec être (verbes de mouvement et réfléchis):</h4>
              <p>je <strong>suis</strong> allé(e)</p>
              <p>tu <strong>es</strong> allé(e)</p>
              <p>il <strong>est</strong> allé / elle <strong>est</strong> allée</p>
              <p>nous <strong>sommes</strong> allé(e)s</p>
              <p>vous <strong>êtes</strong> allé(e)(s)</p>
              <p>ils <strong>sont</strong> allés / elles <strong>sont</strong> allées</p>
            </div>

            <h3>Exemples</h3>
            <ul>
              <li>J'ai mangé un sandwich à midi.</li>
              <li>Hier, nous sommes allés au cinéma.</li>
              <li>Elle a fini ses devoirs à 18h.</li>
            </ul>
          </div>
        )}

        {activeTab === 'comparaison' && (
          <div>
            <h2>Comparaison: Imparfait vs Passé Composé</h2>
            
            <div className="comparison-table">
              <div className="imparfait-col">
                <h3>L'imparfait</h3>
                <p>Action <strong>continue</strong> ou <strong>habituelle</strong></p>
                <p>Décrit le <strong>contexte</strong> ou la <strong>situation</strong></p>
                <p>Pas de durée précise</p>
                <p>Répond à: <strong>Comment c'était?</strong></p>
              </div>
              <div className="passe-compose-col">
                <h3>Le passé composé</h3>
                <p>Action <strong>complète</strong> ou <strong>ponctuelle</strong></p>
                <p>Raconte <strong>ce qui s'est passé</strong></p>
                <p>Moment spécifique</p>
                <p>Répond à: <strong>Qu'est-ce qui s'est passé?</strong></p>
              </div>
            </div>

            <h3>Phrases avec les deux temps</h3>
            <ul>
              <li>Il <strong>pleuvait</strong> (imparfait - contexte) quand je <strong>suis sorti</strong> (passé composé - action ponctuelle).</li>
              <li>Je <strong>dormais</strong> (imparfait - action en cours) quand le téléphone <strong>a sonné</strong> (passé composé - interruption).</li>
              <li>Quand j'<strong>étais</strong> petit (imparfait - période), j'<strong>ai visité</strong> Paris deux fois (passé composé - événement spécifique).</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}

function Exercices() {
  const [currentExercise, setCurrentExercise] = useState(0);
  const [userAnswers, setUserAnswers] = useState<string[]>(Array(exerciseData.length).fill(''));
  const [showResults, setShowResults] = useState(false);

  const exerciseData = [
    {
      id: 1,
      sentence: "Quand j'étais petit, je _____ (jouer) souvent au parc.",
      options: ["jouais", "ai joué"],
      correctAnswer: "jouais",
      explanation: "Imparfait pour une habitude dans le passé."
    },
    {
      id: 2,
      sentence: "Hier, j'_____ (aller) au cinéma avec mes amis.",
      options: ["allais", "suis allé"],
      correctAnswer: "suis allé",
      explanation: "Passé composé pour un événement spécifique et fini."
    },
    {
      id: 3, 
      sentence: "Pendant que je _____ (faire) mes devoirs, ma mère _____ (préparer) le dîner.",
      options: ["faisais / préparait", "ai fait / a préparé", "faisais / a préparé"],
      correctAnswer: "faisais / préparait",
      explanation: "Imparfait pour deux actions simultanées qui servent de contexte."
    },
    {
      id: 4,
      sentence: "L'année dernière, nous _____ (visiter) le musée du Louvre.",
      options: ["visitions", "avons visité"],
      correctAnswer: "avons visité",
      explanation: "Passé composé pour une action terminée à un moment précis."
    },
    {
      id: 5,
      sentence: "Quand j'_____ (être) enfant, je _____ (avoir) un chien.",
      options: ["étais / avais", "ai été / ai eu", "étais / ai eu"],
      correctAnswer: "étais / avais",
      explanation: "Imparfait pour décrire une situation passée et une possession."
    }
  ];

  const handleSelectAnswer = (answer: string) => {
    const newAnswers = [...userAnswers];
    newAnswers[currentExercise] = answer;
    setUserAnswers(newAnswers);
  };

  const goToNextExercise = () => {
    if (currentExercise < exerciseData.length - 1) {
      setCurrentExercise(currentExercise + 1);
    } else {
      setShowResults(true);
    }
  };

  const goToPreviousExercise = () => {
    if (currentExercise > 0) {
      setCurrentExercise(currentExercise - 1);
    }
  };

  const restartExercises = () => {
    setCurrentExercise(0);
    setUserAnswers(Array(exerciseData.length).fill(''));
    setShowResults(false);
  };

  const calculateScore = () => {
    return exerciseData.reduce((score, exercise, index) => {
      return score + (userAnswers[index] === exercise.correctAnswer ? 1 : 0);
    }, 0);
  };

  if (showResults) {
    const score = calculateScore();
    return (
      <div className="section exercices results">
        <h2>Résultats</h2>
        <p className="score">Ton score: {score}/{exerciseData.length}</p>
        
        <div className="results-list">
          {exerciseData.map((exercise, index) => (
            <div key={exercise.id} className={`result-item ${userAnswers[index] === exercise.correctAnswer ? 'correct' : 'incorrect'}`}>
              <p>{exercise.sentence}</p>
              <p>Ta réponse: <strong>{userAnswers[index] || "Pas de réponse"}</strong></p>
              <p>Réponse correcte: <strong>{exercise.correctAnswer}</strong></p>
              <p>{exercise.explanation}</p>
            </div>
          ))}
        </div>
        
        <button className="restart-btn" onClick={restartExercises}>
          Recommencer
        </button>
      </div>
    );
  }

  const exercise = exerciseData[currentExercise];
  
  return (
    <div className="section exercices">
      <h2>Exercices</h2>
      <p className="progress">Exercice {currentExercise + 1}/{exerciseData.length}</p>
      
      <div className="exercise-container">
        <p className="exercise-sentence">{exercise.sentence}</p>
        
        <div className="options">
          {exercise.options.map((option) => (
            <button
              key={option}
              className={userAnswers[currentExercise] === option ? 'selected' : ''}
              onClick={() => handleSelectAnswer(option)}
            >
              {option}
            </button>
          ))}
        </div>
        
        <div className="navigation-buttons">
          <button 
            onClick={goToPreviousExercise} 
            disabled={currentExercise === 0}
          >
            Précédent
          </button>
          <button onClick={goToNextExercise}>
            {currentExercise === exerciseData.length - 1 ? 'Voir les résultats' : 'Suivant'}
          </button>
        </div>
      </div>
    </div>
  );
}

function Quiz() {
  const [gameState, setGameState] = useState<'start' | 'playing' | 'gameOver'>('start');
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [timeLeft, setTimeLeft] = useState(20);
  const [mistakes, setMistakes] = useState(0);
  const [timerActive, setTimerActive] = useState(false);

  const quizData = [
    {
      id: 1,
      scenario: "Tu racontes ton week-end à ton ami:",
      question: "Samedi, je _____ au cinéma avec ma famille.",
      options: ["allais", "suis allé(e)"],
      correctAnswer: "suis allé(e)",
      tense: "passé composé",
      explanation: "C'est une action ponctuelle et terminée à un moment précis (samedi)."
    },
    {
      id: 2,
      scenario: "Tu décris ton enfance:",
      question: "Quand j'étais petit(e), je _____ du piano tous les jours.",
      options: ["jouais", "ai joué"],
      correctAnswer: "jouais",
      tense: "imparfait",
      explanation: "C'est une habitude dans le passé."
    },
    {
      id: 3,
      scenario: "Tu racontes ta journée d'hier:",
      question: "Pendant que je _____ mes devoirs, quelqu'un _____ à la porte.",
      options: ["faisais / a frappé", "ai fait / frappait", "faisais / frappait"],
      correctAnswer: "faisais / a frappé",
      tense: "imparfait + passé composé",
      explanation: "L'imparfait pour l'action en cours (contexte) et le passé composé pour l'interruption."
    },
    {
      id: 4,
      scenario: "Tu parles de tes vacances de l'été dernier:",
      question: "L'été dernier, nous _____ à la plage tous les jours car il _____ très beau.",
      options: ["sommes allés / faisait", "allions / a fait", "sommes allés / a fait"],
      correctAnswer: "sommes allés / faisait",
      tense: "passé composé + imparfait",
      explanation: "Le passé composé pour l'habitude avec une période définie, l'imparfait pour décrire le temps qu'il faisait."
    },
    {
      id: 5,
      scenario: "Tu racontes un accident:",
      question: "Je _____ tranquillement quand soudain, j'_____ un bruit étrange.",
      options: ["marchais / ai entendu", "ai marché / entendais", "marchais / entendais"],
      correctAnswer: "marchais / ai entendu",
      tense: "imparfait + passé composé",
      explanation: "L'imparfait pour décrire la situation et le passé composé pour l'événement soudain."
    },
    {
      id: 6,
      scenario: "Tu racontes ton voyage:",
      question: "Nous _____ à Paris pendant deux semaines et nous _____ la tour Eiffel.",
      options: ["sommes restés / avons visité", "restions / visitions", "sommes restés / visitions"],
      correctAnswer: "sommes restés / avons visité",
      tense: "passé composé + passé composé",
      explanation: "Le passé composé pour deux actions terminées dans le passé."
    },
    {
      id: 7,
      scenario: "Tu parles de ton ancien professeur:",
      question: "Mon ancien professeur _____ toujours des histoires intéressantes et _____ beaucoup.",
      options: ["racontait / riait", "a raconté / a ri", "racontait / a ri"],
      correctAnswer: "racontait / riait",
      tense: "imparfait + imparfait",
      explanation: "L'imparfait pour décrire des habitudes et caractéristiques dans le passé."
    },
    {
      id: 8,
      scenario: "Tu expliques pourquoi tu étais en retard:",
      question: "Je _____ en retard parce que mon réveil ne _____ pas sonné.",
      options: ["étais / avait", "ai été / a", "ai été / avait"],
      correctAnswer: "ai été / avait",
      tense: "passé composé + plus-que-parfait",
      explanation: "Le passé composé pour l'événement principal, le plus-que-parfait pour l'action antérieure."
    }
  ];

  // Set up the timer
  useEffect(() => {
    let timer: number | undefined;
    
    if (gameState === 'playing' && timeLeft > 0 && timerActive) {
      timer = window.setInterval(() => {
        setTimeLeft((prevTime) => {
          if (prevTime <= 1) {
            // Time's up, move to next question
            if (currentQuestion < quizData.length - 1) {
              setCurrentQuestion(prev => prev + 1);
              setMistakes(prev => prev + 1);
              return 20; // Reset timer
            } else {
              // End game if it was the last question
              setGameState('gameOver');
              return 0;
            }
          }
          return prevTime - 1;
        });
      }, 1000);
    }
    
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [gameState, timeLeft, currentQuestion, timerActive, quizData.length]);

  const handleStartGame = () => {
    setGameState('playing');
    setScore(0);
    setCurrentQuestion(0);
    setTimeLeft(20);
    setMistakes(0);
    setTimerActive(true);
  };

  const handleAnswer = (selectedAnswer: string) => {
    const isCorrect = selectedAnswer === quizData[currentQuestion].correctAnswer;
    
    if (isCorrect) {
      setScore(score + 10);
    } else {
      setMistakes(mistakes + 1);
    }
    
    // Move to next question or end game
    if (currentQuestion < quizData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setTimeLeft(20); // Reset timer for next question
    } else {
      setGameState('gameOver');
      setTimerActive(false);
    }
  };

  if (gameState === 'start') {
    return (
      <div className="section quiz">
        <h2>Quiz - Imparfait ou Passé Composé?</h2>
        <div className="quiz-intro">
          <p>Ce quiz va tester ta compréhension de l'imparfait et du passé composé.</p>
          <p>Tu as 20 secondes pour répondre à chaque question.</p>
          <p>Choisis la forme verbale correcte pour chaque phrase.</p>
          <button className="start-btn" onClick={handleStartGame}>
            Commencer le Quiz!
          </button>
        </div>
      </div>
    );
  }

  if (gameState === 'gameOver') {
    return (
      <div className="section quiz game-over">
        <h2>Quiz Terminé!</h2>
        <p className="final-score">Score Final: {score} points</p>
        <p>Erreurs: {mistakes}</p>
        <p>Perfection: {mistakes === 0 ? "Oui! 🌟" : "Pas encore"}</p>
        
        <button className="restart-btn" onClick={handleStartGame}>
          Rejouer
        </button>
      </div>
    );
  }

  const question = quizData[currentQuestion];

  return (
    <div className="section quiz playing">
      <div className="quiz-header">
        <p className="score">Score: {score}</p>
        <p className="time-left">Temps: {timeLeft}s</p>
        <p className="question-number">Question {currentQuestion + 1}/{quizData.length}</p>
      </div>
      
      <div className="question-container">
        <p className="scenario">{question.scenario}</p>
        <p className="question">{question.question}</p>
        
        <div className="quiz-options">
          {question.options.map((option) => (
            <button key={option} onClick={() => handleAnswer(option)}>
              {option}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App