import { useState, useEffect } from 'react'
import './App.css'
import { useLanguage } from './contexts/LanguageContext'
import { LanguageSelector } from './components/LanguageSelector'

function App() {
  const [activeSection, setActiveSection] = useState<'accueil' | 'explication' | 'exercices' | 'quiz'>('accueil');
  const { t } = useLanguage();

  return (
    <div className="app-container">
      <header>
        <div className="header-content">
          <h1>Imparfait vs Passé Composé</h1>
          <LanguageSelector />
        </div>
        <nav>
          <button 
            className={activeSection === 'accueil' ? 'active' : ''} 
            onClick={() => setActiveSection('accueil')}
          >
            {t('nav.home')}
          </button>
          <button 
            className={activeSection === 'explication' ? 'active' : ''} 
            onClick={() => setActiveSection('explication')}
          >
            {t('nav.explanations')}
          </button>
          <button 
            className={activeSection === 'exercices' ? 'active' : ''} 
            onClick={() => setActiveSection('exercices')}
          >
            {t('nav.exercises')}
          </button>
          <button 
            className={activeSection === 'quiz' ? 'active' : ''} 
            onClick={() => setActiveSection('quiz')}
          >
            {t('nav.quiz')}
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
        <p>{t('footer.text')}</p>
      </footer>
    </div>
  )
}

function Accueil() {
  const { t } = useLanguage();
  
  return (
    <div className="section accueil">
      <h2>{t('home.welcome')}</h2>
      <p>{t('home.intro')}</p>
      <div className="info-cards">
        <div className="card">
          <h3>{t('home.imparfait.title')}</h3>
          <p>{t('home.imparfait.desc')}</p>
          <p>{t('home.example')} <em>{t('home.imparfait.example')}</em></p>
        </div>
        <div className="card">
          <h3>{t('home.passecompose.title')}</h3>
          <p>{t('home.passecompose.desc')}</p>
          <p>{t('home.example')} <em>{t('home.passecompose.example')}</em></p>
        </div>
      </div>
      <p className="instructions">{t('home.instructions')}</p>
    </div>
  )
}

function Explication() {
  const [activeTab, setActiveTab] = useState<'imparfait' | 'passeCompose' | 'comparaison'>('imparfait');
  const { t } = useLanguage();

  return (
    <div className="section explication">
      <div className="tabs">
        <button 
          className={activeTab === 'imparfait' ? 'active' : ''} 
          onClick={() => setActiveTab('imparfait')}
        >
          {t('explanations.imparfait.tab')}
        </button>
        <button 
          className={activeTab === 'passeCompose' ? 'active' : ''} 
          onClick={() => setActiveTab('passeCompose')}
        >
          {t('explanations.passecompose.tab')}
        </button>
        <button 
          className={activeTab === 'comparaison' ? 'active' : ''} 
          onClick={() => setActiveTab('comparaison')}
        >
          {t('explanations.comparison.tab')}
        </button>
      </div>

      <div className="tab-content">
        {activeTab === 'imparfait' && (
          <div>
            <h2>{t('explanations.imparfait.title')}</h2>
            <h3>{t('explanations.imparfait.when')}</h3>
            <ul>
              <li>{t('explanations.imparfait.use1')}</li>
              <li>{t('explanations.imparfait.use2')}</li>
              <li>{t('explanations.imparfait.use3')}</li>
              <li>{t('explanations.imparfait.use4')}</li>
            </ul>

            <h3>{t('explanations.formation')}</h3>
            <p>{t('explanations.imparfait.formation')}</p>
            <div className="conjugaison">
              <p>je <strong>-ais</strong></p>
              <p>tu <strong>-ais</strong></p>
              <p>il/elle/on <strong>-ait</strong></p>
              <p>nous <strong>-ions</strong></p>
              <p>vous <strong>-iez</strong></p>
              <p>ils/elles <strong>-aient</strong></p>
            </div>

            <h3>{t('explanations.examples')} <span className="note">{t('explanations.note')}</span></h3>
            <ul>
              <li>Quand j'étais petit, je jouais souvent au parc.</li>
              <li>Il faisait beau hier, mais j'avais trop de devoirs.</li>
              <li>Nous mangions toujours à 19h.</li>
            </ul>
          </div>
        )}

        {activeTab === 'passeCompose' && (
          <div>
            <h2>{t('explanations.passecompose.title')}</h2>
            <h3>{t('explanations.passecompose.when')}</h3>
            <ul>
              <li>{t('explanations.passecompose.use1')}</li>
              <li>{t('explanations.passecompose.use2')}</li>
              <li>{t('explanations.passecompose.use3')}</li>
              <li>{t('explanations.passecompose.use4')}</li>
            </ul>

            <h3>{t('explanations.formation')}</h3>
            <p>{t('explanations.passecompose.formation')}</p>
            <div className="conjugaison">
              <h4>{t('explanations.auxiliary.avoir')}</h4>
              <p>j'<strong>ai</strong> mangé</p>
              <p>tu <strong>as</strong> mangé</p>
              <p>il/elle/on <strong>a</strong> mangé</p>
              <p>nous <strong>avons</strong> mangé</p>
              <p>vous <strong>avez</strong> mangé</p>
              <p>ils/elles <strong>ont</strong> mangé</p>

              <h4>{t('explanations.auxiliary.etre')}</h4>
              <p>je <strong>suis</strong> allé(e)</p>
              <p>tu <strong>es</strong> allé(e)</p>
              <p>il <strong>est</strong> allé / elle <strong>est</strong> allée</p>
              <p>nous <strong>sommes</strong> allé(e)s</p>
              <p>vous <strong>êtes</strong> allé(e)(s)</p>
              <p>ils <strong>sont</strong> allés / elles <strong>sont</strong> allées</p>
            </div>

            <h3>{t('explanations.examples')} <span className="note">{t('explanations.note')}</span></h3>
            <ul>
              <li>J'ai mangé un sandwich à midi.</li>
              <li>Hier, nous sommes allés au cinéma.</li>
              <li>Elle a fini ses devoirs à 18h.</li>
            </ul>
          </div>
        )}

        {activeTab === 'comparaison' && (
          <div>
            <h2>{t('explanations.comparison.title')}</h2>
            
            <div className="comparison-table">
              <div className="imparfait-col">
                <h3>{t('explanations.imparfait.title')}</h3>
                <p>{t('explanations.imparfait.action')}</p>
                <p>{t('explanations.imparfait.describes')}</p>
                <p>{t('explanations.imparfait.duration')}</p>
                <p>{t('explanations.imparfait.answers')}</p>
              </div>
              <div className="passe-compose-col">
                <h3>{t('explanations.passecompose.title')}</h3>
                <p>{t('explanations.passecompose.action')}</p>
                <p>{t('explanations.passecompose.describes')}</p>
                <p>{t('explanations.passecompose.duration')}</p>
                <p>{t('explanations.passecompose.answers')}</p>
              </div>
            </div>

            <h3>{t('explanations.comparison.phrases')} <span className="note">{t('explanations.note')}</span></h3>
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
  const { t } = useLanguage();
  const [currentExercise, setCurrentExercise] = useState(0);
  const [userAnswers, setUserAnswers] = useState<string[]>(Array(exerciseData.length).fill(''));
  const [showResults, setShowResults] = useState(false);

  const exerciseData = [
    {
      id: 1,
      sentence: "Quand j'étais petit, je _____ (jouer) souvent au parc.",
      options: ["jouais", "ai joué"],
      correctAnswer: "jouais",
      explanation: t('exercises.exp.imparfait.habit')
    },
    {
      id: 2,
      sentence: "Hier, j'_____ (aller) au cinéma avec mes amis.",
      options: ["allais", "suis allé"],
      correctAnswer: "suis allé",
      explanation: t('exercises.exp.passecompose.specific')
    },
    {
      id: 3, 
      sentence: "Pendant que je _____ (faire) mes devoirs, ma mère _____ (préparer) le dîner.",
      options: ["faisais / préparait", "ai fait / a préparé", "faisais / a préparé"],
      correctAnswer: "faisais / préparait",
      explanation: t('exercises.exp.imparfait.simultaneous')
    },
    {
      id: 4,
      sentence: "L'année dernière, nous _____ (visiter) le musée du Louvre.",
      options: ["visitions", "avons visité"],
      correctAnswer: "avons visité",
      explanation: t('exercises.exp.passecompose.precise')
    },
    {
      id: 5,
      sentence: "Quand j'_____ (être) enfant, je _____ (avoir) un chien.",
      options: ["étais / avais", "ai été / ai eu", "étais / ai eu"],
      correctAnswer: "étais / avais",
      explanation: t('exercises.exp.imparfait.situation')
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
        <h2>{t('exercises.results.title')}</h2>
        <p className="score">{t('exercises.score')} {score}/{exerciseData.length}</p>
        
        <div className="results-list">
          {exerciseData.map((exercise, index) => (
            <div key={exercise.id} className={`result-item ${userAnswers[index] === exercise.correctAnswer ? 'correct' : 'incorrect'}`}>
              <p>{exercise.sentence}</p>
              <p>{t('exercises.answer')} <strong>{userAnswers[index] || t('exercises.noAnswer')}</strong></p>
              <p>{t('exercises.correctAnswer')} <strong>{exercise.correctAnswer}</strong></p>
              <p>{exercise.explanation}</p>
            </div>
          ))}
        </div>
        
        <button className="restart-btn" onClick={restartExercises}>
          {t('exercises.restart')}
        </button>
      </div>
    );
  }

  const exercise = exerciseData[currentExercise];
  
  return (
    <div className="section exercices">
      <h2>{t('exercises.title')}</h2>
      <p className="progress">{t('exercises.progress')} {currentExercise + 1}/{exerciseData.length}</p>
      
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
            {t('exercises.previous')}
          </button>
          <button onClick={goToNextExercise}>
            {currentExercise === exerciseData.length - 1 ? t('exercises.results') : t('exercises.next')}
          </button>
        </div>
      </div>
    </div>
  );
}

function Quiz() {
  const { t } = useLanguage();
  const [gameState, setGameState] = useState<'start' | 'playing' | 'gameOver'>('start');
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [timeLeft, setTimeLeft] = useState(20);
  const [mistakes, setMistakes] = useState(0);
  const [timerActive, setTimerActive] = useState(false);
  const [feedback, setFeedback] = useState<'correct' | 'incorrect' | null>(null);
  const [answeredQuestions, setAnsweredQuestions] = useState<number[]>([]);
  const [incorrectAnswers, setIncorrectAnswers] = useState<{questionId: number, selectedAnswer: string}[]>([]);

  // All 50 possible quiz questions
  const allQuizQuestions = [
    // Original 8 questions
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
    },
    
    // Additional 42 questions
    {
      id: 9,
      scenario: "Tu parles de ta routine d'avant:",
      question: "Quand j'_____ à l'école primaire, je _____ à pied tous les jours.",
      options: ["étais / allais", "ai été / suis allé(e)", "étais / suis allé(e)"],
      correctAnswer: "étais / allais",
      tense: "imparfait + imparfait",
      explanation: "L'imparfait pour décrire une routine ou une habitude dans le passé."
    },
    {
      id: 10,
      scenario: "Tu parles d'un événement précis:",
      question: "Hier soir, nous _____ un excellent dîner au restaurant.",
      options: ["avons mangé", "mangions"],
      correctAnswer: "avons mangé",
      tense: "passé composé",
      explanation: "Le passé composé pour une action terminée à un moment précis (hier soir)."
    },
    {
      id: 11,
      scenario: "Tu décris le temps lors d'un événement:",
      question: "Quand nous sommes arrivés à la plage, il _____ et le soleil _____.",
      options: ["pleuvait / brillait", "a plu / a brillé", "pleuvait / a brillé"],
      correctAnswer: "pleuvait / brillait",
      tense: "imparfait + imparfait",
      explanation: "L'imparfait pour décrire les conditions météorologiques qui forment le contexte."
    },
    {
      id: 12,
      scenario: "Tu racontes une rencontre importante:",
      question: "J'_____ mes clés quand j'_____ mon ancien camarade de classe.",
      options: ["ai perdu / ai rencontré", "perdais / ai rencontré", "perdais / rencontrais"],
      correctAnswer: "ai perdu / ai rencontré",
      tense: "passé composé + passé composé",
      explanation: "Le passé composé pour deux actions ponctuelles successives."
    },
    {
      id: 13,
      scenario: "Tu parles de ton état dans le passé:",
      question: "Je _____ très fatigué après l'examen, alors je _____ une sieste.",
      options: ["étais / ai fait", "ai été / faisais", "ai été / ai fait"],
      correctAnswer: "étais / ai fait",
      tense: "imparfait + passé composé",
      explanation: "L'imparfait pour décrire un état et le passé composé pour une action qui en résulte."
    },
    {
      id: 14,
      scenario: "Tu parles d'une action interrompue:",
      question: "Je _____ la télé quand mon téléphone _____.",
      options: ["regardais / a sonné", "ai regardé / sonnait", "regardais / sonnait"],
      correctAnswer: "regardais / a sonné",
      tense: "imparfait + passé composé",
      explanation: "L'imparfait pour une action en cours, le passé composé pour l'interruption."
    },
    {
      id: 15,
      scenario: "Tu racontes un événement passé:",
      question: "L'an dernier, je _____ mon diplôme et je _____ mon premier emploi.",
      options: ["obtenais / trouvais", "ai obtenu / ai trouvé", "ai obtenu / trouvais"],
      correctAnswer: "ai obtenu / ai trouvé",
      tense: "passé composé + passé composé",
      explanation: "Le passé composé pour des événements ponctuels et terminés."
    },
    {
      id: 16,
      scenario: "Tu parles de ton ancienne maison:",
      question: "Quand j'_____ enfant, nous _____ dans une grande maison près de la mer.",
      options: ["étais / habitions", "ai été / avons habité", "étais / avons habité"],
      correctAnswer: "étais / habitions",
      tense: "imparfait + imparfait",
      explanation: "L'imparfait pour décrire des situations durables dans le passé."
    },
    {
      id: 17,
      scenario: "Tu parles de ta matinée aujourd'hui:",
      question: "Ce matin, je _____ à 7h et je _____ directement à la douche.",
      options: ["me réveillais / allais", "me suis réveillé(e) / suis allé(e)", "me suis réveillé(e) / allais"],
      correctAnswer: "me suis réveillé(e) / suis allé(e)",
      tense: "passé composé + passé composé",
      explanation: "Le passé composé pour des actions terminées dans un passé proche."
    },
    {
      id: 18,
      scenario: "Tu racontes une surprise:",
      question: "Pendant que nous _____, nos amis nous _____ une fête surprise.",
      options: ["dormions / ont préparé", "avons dormi / préparaient", "dormions / préparaient"],
      correctAnswer: "dormions / ont préparé",
      tense: "imparfait + passé composé",
      explanation: "L'imparfait pour une action en cours et le passé composé pour une action complète."
    },
    {
      id: 19,
      scenario: "Tu parles de tes vacances d'enfance:",
      question: "Chaque été, nous _____ en Bretagne et nous _____ à la plage.",
      options: ["allions / jouions", "sommes allés / avons joué", "allions / avons joué"],
      correctAnswer: "allions / jouions",
      tense: "imparfait + imparfait",
      explanation: "L'imparfait pour des habitudes ou des activités régulières dans le passé."
    },
    {
      id: 20,
      scenario: "Tu parles d'un moment précis:",
      question: "À midi exactement, le président _____ son discours devant la foule.",
      options: ["commençait", "a commencé"],
      correctAnswer: "a commencé",
      tense: "passé composé",
      explanation: "Le passé composé pour un événement ponctuel à un moment précis."
    },
    {
      id: 21,
      scenario: "Tu décris ta réaction à une nouvelle:",
      question: "Quand j'_____ la nouvelle, j'_____ très surpris(e).",
      options: ["ai appris / étais", "apprenais / ai été", "apprenais / étais"],
      correctAnswer: "ai appris / étais",
      tense: "passé composé + imparfait",
      explanation: "Le passé composé pour l'événement déclencheur et l'imparfait pour l'état qui en résulte."
    },
    {
      id: 22,
      scenario: "Tu parles d'une activité passée:",
      question: "Autrefois, les gens _____ leur linge à la main.",
      options: ["lavaient", "ont lavé"],
      correctAnswer: "lavaient",
      tense: "imparfait",
      explanation: "L'imparfait pour une habitude ou une action typique dans le passé."
    },
    {
      id: 23,
      scenario: "Tu racontes un événement sportif:",
      question: "À la fin du match, notre équipe _____ et tout le monde _____.",
      options: ["gagnait / applaudissait", "a gagné / a applaudi", "a gagné / applaudissait"],
      correctAnswer: "a gagné / a applaudi",
      tense: "passé composé + passé composé",
      explanation: "Le passé composé pour des actions ponctuelles successives."
    },
    {
      id: 24,
      scenario: "Tu décris l'ambiance d'une soirée:",
      question: "Pendant la fête, la musique _____ forte et les gens _____.",
      options: ["était / dansaient", "a été / ont dansé", "était / ont dansé"],
      correctAnswer: "était / dansaient",
      tense: "imparfait + imparfait",
      explanation: "L'imparfait pour décrire l'ambiance et les actions en cours."
    },
    {
      id: 25,
      scenario: "Tu racontes une dispute:",
      question: "Nous _____ quand soudain, elle _____ et _____.",
      options: ["discutions / s'est levée / est partie", "avons discuté / se levait / partait", "discutions / se levait / partait"],
      correctAnswer: "discutions / s'est levée / est partie",
      tense: "imparfait + passé composé + passé composé",
      explanation: "L'imparfait pour l'action en cours, le passé composé pour les actions ponctuelles qui suivent."
    },
    {
      id: 26,
      scenario: "Tu parles de tes goûts d'enfance:",
      question: "Quand j'étais petit(e), je _____ les épinards mais j'_____ le chocolat.",
      options: ["détestais / adorais", "ai détesté / ai adoré", "détestais / ai adoré"],
      correctAnswer: "détestais / adorais",
      tense: "imparfait + imparfait",
      explanation: "L'imparfait pour exprimer des goûts ou des préférences dans le passé."
    },
    {
      id: 27,
      scenario: "Tu racontes un déménagement:",
      question: "Nous _____ dans notre nouvelle maison le 15 juin dernier.",
      options: ["emménagions", "avons emménagé"],
      correctAnswer: "avons emménagé",
      tense: "passé composé",
      explanation: "Le passé composé pour un événement ponctuel à une date précise."
    },
    {
      id: 28,
      scenario: "Tu parles d'un accident:",
      question: "La route _____ mouillée quand la voiture _____ dans le fossé.",
      options: ["était / est tombée", "a été / tombait", "était / tombait"],
      correctAnswer: "était / est tombée",
      tense: "imparfait + passé composé",
      explanation: "L'imparfait pour décrire les circonstances et le passé composé pour l'événement principal."
    },
    {
      id: 29,
      scenario: "Tu parles d'un spectacle:",
      question: "Le concert _____ à 20h et _____ trois heures.",
      options: ["commençait / durait", "a commencé / a duré", "a commencé / durait"],
      correctAnswer: "a commencé / a duré",
      tense: "passé composé + passé composé",
      explanation: "Le passé composé pour des faits précis et délimités dans le temps."
    },
    {
      id: 30,
      scenario: "Tu décris ton ancienne école:",
      question: "Mon école primaire _____ grande et _____ un beau jardin.",
      options: ["était / avait", "a été / a eu", "était / a eu"],
      correctAnswer: "était / avait",
      tense: "imparfait + imparfait",
      explanation: "L'imparfait pour décrire des caractéristiques physiques dans le passé."
    },
    {
      id: 31,
      scenario: "Tu racontes une découverte:",
      question: "Je _____ dans le grenier quand j'_____ une vieille photo de famille.",
      options: ["cherchais / ai trouvé", "ai cherché / trouvais", "cherchais / trouvais"],
      correctAnswer: "cherchais / ai trouvé",
      tense: "imparfait + passé composé",
      explanation: "L'imparfait pour l'action en cours et le passé composé pour l'événement ponctuel."
    },
    {
      id: 32,
      scenario: "Tu parles d'une série d'actions:",
      question: "Hier, je _____ mes courses, puis je _____ à la maison et je _____ le dîner.",
      options: ["ai fait / suis rentré(e) / ai préparé", "faisais / rentrais / préparais", "ai fait / rentrais / ai préparé"],
      correctAnswer: "ai fait / suis rentré(e) / ai préparé",
      tense: "passé composé + passé composé + passé composé",
      explanation: "Le passé composé pour une série d'actions successives et terminées."
    },
    {
      id: 33,
      scenario: "Tu décris un paysage:",
      question: "Le soleil _____ et les oiseaux _____ quand nous sommes arrivés à la campagne.",
      options: ["brillait / chantaient", "a brillé / ont chanté", "a brillé / chantaient"],
      correctAnswer: "brillait / chantaient",
      tense: "imparfait + imparfait",
      explanation: "L'imparfait pour décrire le cadre ou l'arrière-plan d'une scène."
    },
    {
      id: 34,
      scenario: "Tu racontes un événement historique:",
      question: "En 1789, la Révolution française _____ et le peuple _____ la Bastille.",
      options: ["commençait / prenait", "a commencé / a pris", "a commencé / prenait"],
      correctAnswer: "a commencé / a pris",
      tense: "passé composé + passé composé",
      explanation: "Le passé composé pour des événements historiques précis."
    },
    {
      id: 35,
      scenario: "Tu parles de ta formation:",
      question: "Pendant que j'_____ à l'université, j'_____ aussi un emploi à temps partiel.",
      options: ["étais / avais", "ai été / ai eu", "étais / ai eu"],
      correctAnswer: "étais / avais",
      tense: "imparfait + imparfait",
      explanation: "L'imparfait pour des situations parallèles et continues dans le passé."
    },
    {
      id: 36,
      scenario: "Tu racontes une action soudaine:",
      question: "Nous _____ tranquillement quand soudain le tonnerre _____.",
      options: ["dînions / a grondé", "avons dîné / grondait", "dînions / grondait"],
      correctAnswer: "dînions / a grondé",
      tense: "imparfait + passé composé",
      explanation: "L'imparfait pour l'action en cours et le passé composé pour l'événement soudain."
    },
    {
      id: 37,
      scenario: "Tu racontes une première fois:",
      question: "La première fois que j'_____ à Paris, j'_____ la tour Eiffel.",
      options: ["allais / visitais", "suis allé(e) / ai visité", "allais / ai visité"],
      correctAnswer: "suis allé(e) / ai visité",
      tense: "passé composé + passé composé",
      explanation: "Le passé composé pour des actions ponctuelles et uniques."
    },
    {
      id: 38,
      scenario: "Tu décris une personne:",
      question: "Ma grand-mère _____ très gentille et elle me _____ toujours des histoires.",
      options: ["était / racontait", "a été / a raconté", "était / a raconté"],
      correctAnswer: "était / racontait",
      tense: "imparfait + imparfait",
      explanation: "L'imparfait pour les descriptions de personnes et les actions habituelles."
    },
    {
      id: 39,
      scenario: "Tu parles d'une réalisation:",
      question: "Après de nombreux essais, elle _____ enfin son examen.",
      options: ["réussissait", "a réussi"],
      correctAnswer: "a réussi",
      tense: "passé composé",
      explanation: "Le passé composé pour un accomplissement, une réussite ponctuelle."
    },
    {
      id: 40,
      scenario: "Tu expliques un changement:",
      question: "Avant, je _____ peur des chiens, mais après avoir adopté Rex, je _____ à les aimer.",
      options: ["avais / ai commencé", "ai eu / commençais", "avais / commençais"],
      correctAnswer: "avais / ai commencé",
      tense: "imparfait + passé composé",
      explanation: "L'imparfait pour une situation passée, le passé composé pour le changement."
    },
    {
      id: 41,
      scenario: "Tu racontes une surprise:",
      question: "Elle _____ son gâteau d'anniversaire quand ses amis _____.",
      options: ["préparait / sont arrivés", "a préparé / arrivaient", "préparait / arrivaient"],
      correctAnswer: "préparait / sont arrivés",
      tense: "imparfait + passé composé",
      explanation: "L'imparfait pour l'action en cours, le passé composé pour l'arrivée soudaine."
    },
    {
      id: 42,
      scenario: "Tu parles de ton alimentation passée:",
      question: "Quand j'étais adolescent(e), je _____ rarement des légumes.",
      options: ["mangeais", "ai mangé"],
      correctAnswer: "mangeais",
      tense: "imparfait",
      explanation: "L'imparfait pour une habitude alimentaire dans le passé."
    },
    {
      id: 43,
      scenario: "Tu racontes des vacances:",
      question: "L'été dernier, nous _____ en Espagne et nous _____ la mer tous les jours.",
      options: ["allions / profitions de", "sommes allés / avons profité de", "sommes allés / profitions de"],
      correctAnswer: "sommes allés / avons profité de",
      tense: "passé composé + passé composé",
      explanation: "Le passé composé pour des actions terminées pendant une période définie."
    },
    {
      id: 44,
      scenario: "Tu expliques une rencontre:",
      question: "Je _____ mes courses quand je _____ Thomas, mon ami d'enfance.",
      options: ["faisais / ai rencontré", "ai fait / rencontrais", "ai fait / ai rencontré"],
      correctAnswer: "faisais / ai rencontré",
      tense: "imparfait + passé composé",
      explanation: "L'imparfait pour l'activité en cours, le passé composé pour la rencontre imprévue."
    },
    {
      id: 45,
      scenario: "Tu décris un changement d'état:",
      question: "Quand elle _____ la nouvelle, elle _____ très heureuse.",
      options: ["a appris / était", "apprenait / a été", "apprenait / était"],
      correctAnswer: "a appris / a été",
      tense: "passé composé + passé composé",
      explanation: "Le passé composé pour un événement et le changement d'état qui en résulte."
    },
    {
      id: 46,
      scenario: "Tu racontes une tradition familiale:",
      question: "Chaque Noël, ma famille _____ un grand repas et nous _____ des cadeaux.",
      options: ["préparait / échangions", "a préparé / avons échangé", "préparait / avons échangé"],
      correctAnswer: "préparait / échangions",
      tense: "imparfait + imparfait",
      explanation: "L'imparfait pour des traditions ou des habitudes régulières dans le passé."
    },
    {
      id: 47,
      scenario: "Tu racontes un incident:",
      question: "Elle _____ quand elle _____ sur une pierre et _____.",
      options: ["courait / a trébuché / est tombée", "a couru / trébuchait / tombait", "courait / trébuchait / tombait"],
      correctAnswer: "courait / a trébuché / est tombée",
      tense: "imparfait + passé composé + passé composé",
      explanation: "L'imparfait pour l'action en cours, le passé composé pour les incidents ponctuels."
    },
    {
      id: 48,
      scenario: "Tu parles d'une décision:",
      question: "Après avoir réfléchi pendant des mois, j'_____ finalement de changer de travail.",
      options: ["décidais", "ai décidé"],
      correctAnswer: "ai décidé",
      tense: "passé composé",
      explanation: "Le passé composé pour une décision prise à un moment précis."
    },
    {
      id: 49,
      scenario: "Tu racontes une observation:",
      question: "Pendant que je _____ par la fenêtre, j'_____ un arc-en-ciel.",
      options: ["regardais / ai vu", "ai regardé / voyais", "regardais / voyais"],
      correctAnswer: "regardais / ai vu",
      tense: "imparfait + passé composé",
      explanation: "L'imparfait pour l'action continue, le passé composé pour la découverte soudaine."
    },
    {
      id: 50,
      scenario: "Tu expliques un ancien état:",
      question: "Autrefois, tout le village _____ de l'agriculture et les gens _____ une vie simple.",
      options: ["vivait / menaient", "a vécu / ont mené", "vivait / ont mené"],
      correctAnswer: "vivait / menaient",
      tense: "imparfait + imparfait",
      explanation: "L'imparfait pour décrire un mode de vie ou un état durable dans le passé."
    }
  ];
  
  // Randomly select 8 questions for this quiz session
  const getRandomQuestions = () => {
    const shuffled = [...allQuizQuestions].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 8);
  };
  
  // We'll use currentQuestions state instead of this static assignment

  // Set up the timer
  useEffect(() => {
    let timer: number | undefined;
    
    if (gameState === 'playing' && timeLeft > 0 && timerActive && feedback === null) {
      timer = window.setInterval(() => {
        setTimeLeft((prevTime) => {
          if (prevTime <= 1) {
            // Time's up, record this as an incorrect answer
            setMistakes(prev => prev + 1);
            const currentQuestionId = currentQuestions[currentQuestion].id;
            
            // Show "timeout" feedback
            setFeedback('incorrect');
            setAnsweredQuestions([...answeredQuestions, currentQuestionId]);
            
            // Add to incorrect answers
            setIncorrectAnswers([
              ...incorrectAnswers, 
              {
                questionId: currentQuestionId,
                selectedAnswer: "⏱️ Time's up"
              }
            ]);
            
            // Move to next question after showing feedback
            setTimeout(() => {
              setFeedback(null);
              
              if (currentQuestion < currentQuestions.length - 1) {
                setCurrentQuestion(prev => prev + 1);
                return 20; // Reset timer
              } else {
                // End game if it was the last question
                setGameState('gameOver');
                return 0;
              }
            }, 1500);
            
            return 0; // Stop the timer
          }
          return prevTime - 1;
        });
      }, 1000);
    }
    
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [gameState, timeLeft, currentQuestion, timerActive, currentQuestions.length, feedback, answeredQuestions, incorrectAnswers]);

  // State to store the current set of questions
  const [currentQuestions, setCurrentQuestions] = useState<typeof allQuizQuestions>(getRandomQuestions());
  
  const handleStartGame = () => {
    // Get a new set of random questions each time
    const newQuestions = getRandomQuestions();
    setCurrentQuestions(newQuestions);
    
    setGameState('playing');
    setScore(0);
    setCurrentQuestion(0);
    setTimeLeft(20);
    setMistakes(0);
    setTimerActive(true);
    setFeedback(null);
    setAnsweredQuestions([]);
    setIncorrectAnswers([]);
  };

  const handleAnswer = (selectedAnswer: string) => {
    const isCorrect = selectedAnswer === currentQuestions[currentQuestion].correctAnswer;
    const currentQuestionId = currentQuestions[currentQuestion].id;
    
    // Show feedback
    setFeedback(isCorrect ? 'correct' : 'incorrect');
    setAnsweredQuestions([...answeredQuestions, currentQuestionId]);
    
    if (isCorrect) {
      setScore(score + 10);
    } else {
      setMistakes(mistakes + 1);
      // Store incorrect answer for final results
      setIncorrectAnswers([
        ...incorrectAnswers, 
        {
          questionId: currentQuestionId,
          selectedAnswer: selectedAnswer
        }
      ]);
    }
    
    // Set a timeout to move to the next question after showing feedback
    setTimeout(() => {
      setFeedback(null);
      
      // Move to next question or end game
      if (currentQuestion < currentQuestions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setTimeLeft(20); // Reset timer for next question
      } else {
        setGameState('gameOver');
        setTimerActive(false);
      }
    }, 1500); // Show feedback for 1.5 seconds
  };

  if (gameState === 'start') {
    return (
      <div className="section quiz">
        <h2>{t('quiz.title')}</h2>
        <div className="quiz-intro">
          <p>{t('quiz.intro1')}</p>
          <p>{t('quiz.intro2')}</p>
          <p>{t('quiz.intro3')}</p>
          <button className="start-btn" onClick={handleStartGame}>
            {t('quiz.start')}
          </button>
        </div>
      </div>
    );
  }

  if (gameState === 'gameOver') {
    return (
      <div className="section quiz game-over">
        <h2>{t('quiz.gameover')}</h2>
        <p className="final-score">{t('quiz.finalscore')} {score} points</p>
        <p>{t('quiz.errors')} {mistakes}</p>
        <p>{t('quiz.perfect')} {mistakes === 0 ? t('quiz.perfect.yes') : t('quiz.perfect.no')}</p>
        
        {incorrectAnswers.length > 0 && (
          <div className="incorrect-answers">
            <h3>{t('quiz.incorrect.heading')}</h3>
            <div className="results-list">
              {incorrectAnswers.map((item) => {
                // Find matching question in the full list of questions
                const question = allQuizQuestions.find(q => q.id === item.questionId);
                if (!question) return null;
                
                return (
                  <div key={question.id} className="result-item incorrect">
                    <p className="scenario">{question.scenario}</p>
                    <p className="question">{question.question}</p>
                    <p>{t('exercises.answer')} <strong>{item.selectedAnswer}</strong></p>
                    <p>{t('exercises.correctAnswer')} <strong>{question.correctAnswer}</strong></p>
                    <p><span className="tense-label">{question.tense}:</span> {question.explanation}</p>
                  </div>
                );
              })}
            </div>
          </div>
        )}
        
        <button className="restart-btn" onClick={handleStartGame}>
          {t('quiz.replay')}
        </button>
      </div>
    );
  }

  const question = currentQuestions[currentQuestion];

  return (
    <div className="section quiz playing">
      <div className="quiz-header">
        <p className="score">{t('quiz.score')} {score}</p>
        <p className="time-left">{t('quiz.time')} {timeLeft}s</p>
        <p className="question-number">{t('quiz.question')} {currentQuestion + 1}/{currentQuestions.length}</p>
      </div>
      
      <div className="question-container">
        <p className="scenario">{question.scenario}</p>
        <p className="question">{question.question}</p>
        
        {feedback && (
          <div className={`feedback ${feedback}`}>
            {feedback === 'correct' 
              ? <p>{t('quiz.feedback.correct')}</p> 
              : <p>{t('quiz.feedback.incorrect')}</p>
            }
            {feedback === 'incorrect' && (
              <p className="correct-answer">{t('exercises.correctAnswer')} <strong>{question.correctAnswer}</strong></p>
            )}
          </div>
        )}
        
        <div className="quiz-options">
          {question.options.map((option) => {
            const isAnswered = answeredQuestions.includes(question.id);
            const isCorrectAnswer = option === question.correctAnswer;
            const buttonClass = isAnswered
              ? isCorrectAnswer
                ? 'correct'
                : option === answeredQuestions[answeredQuestions.length - 1] ? 'incorrect' : ''
              : '';
            
            return (
              <button 
                key={option} 
                onClick={() => !isAnswered && handleAnswer(option)}
                className={buttonClass}
                disabled={isAnswered || feedback !== null}
              >
                {option}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App