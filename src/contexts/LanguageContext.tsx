import { createContext, useState, useContext, ReactNode } from 'react';

type Language = 'fr' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

// Create the context with a default value
const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Translations
const translations = {
  // Navigation
  'nav.home': {
    fr: 'Accueil',
    en: 'Home',
  },
  'nav.explanations': {
    fr: 'Explications',
    en: 'Explanations',
  },
  'nav.exercises': {
    fr: 'Exercices',
    en: 'Exercises',
  },
  'nav.quiz': {
    fr: 'Quiz',
    en: 'Quiz',
  },
  
  // Home page
  'home.welcome': {
    fr: 'Bienvenue!',
    en: 'Welcome!',
  },
  'home.intro': {
    fr: 'Cette application va t\'aider à comprendre la différence entre l\'imparfait et le passé composé.',
    en: 'This application will help you understand the difference between imparfait and passé composé.',
  },
  'home.imparfait.title': {
    fr: 'L\'imparfait',
    en: 'The Imparfait',
  },
  'home.imparfait.desc': {
    fr: 'Pour décrire des actions continues, habituelles ou des situations dans le passé.',
    en: 'Used to describe continuous actions, habits, or situations in the past.',
  },
  'home.example': {
    fr: 'Exemple:',
    en: 'Example:',
  },
  // Examples should remain in French in both languages
  'home.imparfait.example': {
    fr: 'Je jouais au foot tous les jours.',
    en: 'Je jouais au foot tous les jours.',
  },
  'home.passecompose.title': {
    fr: 'Le passé composé',
    en: 'The Passé Composé',
  },
  'home.passecompose.desc': {
    fr: 'Pour des actions complètes ou des événements spécifiques dans le passé.',
    en: 'Used for completed actions or specific events in the past.',
  },
  'home.passecompose.example': {
    fr: 'J\'ai joué au foot hier.',
    en: 'J\'ai joué au foot hier.',
  },
  'home.instructions': {
    fr: 'Clique sur "Explications" pour en savoir plus, ou essaie les exercices et le quiz!',
    en: 'Click on "Explanations" to learn more, or try the exercises and quiz!',
  },
  
  // Explanations page
  'explanations.imparfait.tab': {
    fr: 'L\'imparfait',
    en: 'Imparfait',
  },
  'explanations.passecompose.tab': {
    fr: 'Le passé composé',
    en: 'Passé Composé',
  },
  'explanations.comparison.tab': {
    fr: 'Comparaison',
    en: 'Comparison',
  },
  'explanations.imparfait.title': {
    fr: 'L\'imparfait',
    en: 'The Imparfait',
  },
  'explanations.imparfait.when': {
    fr: 'Quand utiliser l\'imparfait?',
    en: 'When to use the imparfait?',
  },
  'explanations.imparfait.use1': {
    fr: 'Pour décrire une situation ou un contexte dans le passé',
    en: 'To describe a situation or context in the past',
  },
  'explanations.imparfait.use2': {
    fr: 'Pour parler d\'actions habituelles ou répétées dans le passé',
    en: 'To talk about habitual or repeated actions in the past',
  },
  'explanations.imparfait.use3': {
    fr: 'Pour décrire des actions en cours dans le passé',
    en: 'To describe ongoing actions in the past',
  },
  'explanations.imparfait.use4': {
    fr: 'Pour parler d\'états physiques ou émotionnels dans le passé',
    en: 'To talk about physical or emotional states in the past',
  },
  'explanations.formation': {
    fr: 'Formation',
    en: 'Formation',
  },
  'explanations.imparfait.formation': {
    fr: 'Radical de la 1ère personne du pluriel au présent (nous) + terminaisons:',
    en: 'Stem from the first-person plural present tense (nous) + endings:',
  },
  'explanations.examples': {
    fr: 'Exemples',
    en: 'Examples',
  },
  'explanations.note': {
    fr: '(Les exemples restent en français)',
    en: '(Examples remain in French)',
  },
  'explanations.passecompose.title': {
    fr: 'Le passé composé',
    en: 'The Passé Composé',
  },
  'explanations.passecompose.when': {
    fr: 'Quand utiliser le passé composé?',
    en: 'When to use the passé composé?',
  },
  'explanations.passecompose.use1': {
    fr: 'Pour parler d\'actions complètes et finies dans le passé',
    en: 'To talk about complete and finished actions in the past',
  },
  'explanations.passecompose.use2': {
    fr: 'Pour une séquence d\'événements',
    en: 'For a sequence of events',
  },
  'explanations.passecompose.use3': {
    fr: 'Pour des actions avec un début et une fin clairs',
    en: 'For actions with a clear beginning and end',
  },
  'explanations.passecompose.use4': {
    fr: 'Pour des actions spécifiques à un moment précis',
    en: 'For specific actions at a precise moment',
  },
  'explanations.passecompose.formation': {
    fr: 'Auxiliaire (avoir ou être) conjugué au présent + participe passé',
    en: 'Auxiliary (avoir or être) conjugated in present tense + past participle',
  },
  'explanations.auxiliary.avoir': {
    fr: 'Avec avoir:',
    en: 'With avoir:',
  },
  'explanations.auxiliary.etre': {
    fr: 'Avec être (verbes de mouvement et réfléchis):',
    en: 'With être (movement and reflexive verbs):',
  },
  'explanations.comparison.title': {
    fr: 'Comparaison: Imparfait vs Passé Composé',
    en: 'Comparison: Imparfait vs Passé Composé',
  },
  'explanations.imparfait.action': {
    fr: 'Action continue ou habituelle',
    en: 'Continuous or habitual action',
  },
  'explanations.imparfait.describes': {
    fr: 'Décrit le contexte ou la situation',
    en: 'Describes the context or situation',
  },
  'explanations.imparfait.duration': {
    fr: 'Pas de durée précise',
    en: 'No precise duration',
  },
  'explanations.imparfait.answers': {
    fr: 'Répond à: Comment c\'était?',
    en: 'Answers: How was it?',
  },
  'explanations.passecompose.action': {
    fr: 'Action complète ou ponctuelle',
    en: 'Complete or punctual action',
  },
  'explanations.passecompose.describes': {
    fr: 'Raconte ce qui s\'est passé',
    en: 'Tells what happened',
  },
  'explanations.passecompose.duration': {
    fr: 'Moment spécifique',
    en: 'Specific moment',
  },
  'explanations.passecompose.answers': {
    fr: 'Répond à: Qu\'est-ce qui s\'est passé?',
    en: 'Answers: What happened?',
  },
  'explanations.comparison.phrases': {
    fr: 'Phrases avec les deux temps',
    en: 'Sentences with both tenses',
  },
  
  // Exercise page
  'exercises.title': {
    fr: 'Exercices',
    en: 'Exercises',
  },
  'exercises.progress': {
    fr: 'Exercice',
    en: 'Exercise',
  },
  'exercises.previous': {
    fr: 'Précédent',
    en: 'Previous',
  },
  'exercises.next': {
    fr: 'Suivant',
    en: 'Next',
  },
  'exercises.results': {
    fr: 'Voir les résultats',
    en: 'See results',
  },
  'exercises.results.title': {
    fr: 'Résultats',
    en: 'Results',
  },
  'exercises.score': {
    fr: 'Ton score:',
    en: 'Your score:',
  },
  'exercises.answer': {
    fr: 'Ta réponse:',
    en: 'Your answer:',
  },
  'exercises.correctAnswer': {
    fr: 'Réponse correcte:',
    en: 'Correct answer:',
  },
  'exercises.noAnswer': {
    fr: 'Pas de réponse',
    en: 'No answer',
  },
  'exercises.restart': {
    fr: 'Recommencer',
    en: 'Restart',
  },
  // Exercise explanations
  'exercises.exp.imparfait.habit': {
    fr: 'Imparfait pour une habitude dans le passé.',
    en: 'Imparfait for a habit in the past.',
  },
  'exercises.exp.passecompose.specific': {
    fr: 'Passé composé pour un événement spécifique et fini.',
    en: 'Passé composé for a specific and completed event.',
  },
  'exercises.exp.imparfait.simultaneous': {
    fr: 'Imparfait pour deux actions simultanées qui servent de contexte.',
    en: 'Imparfait for two simultaneous actions that provide context.',
  },
  'exercises.exp.passecompose.precise': {
    fr: 'Passé composé pour une action terminée à un moment précis.',
    en: 'Passé composé for a completed action at a specific time.',
  },
  'exercises.exp.imparfait.situation': {
    fr: 'Imparfait pour décrire une situation passée et une possession.',
    en: 'Imparfait to describe a past situation and possession.',
  },
  
  // Quiz page
  'quiz.title': {
    fr: 'Quiz - Imparfait ou Passé Composé?',
    en: 'Quiz - Imparfait or Passé Composé?',
  },
  'quiz.intro1': {
    fr: 'Ce quiz va tester ta compréhension de l\'imparfait et du passé composé.',
    en: 'This quiz will test your understanding of imparfait and passé composé.',
  },
  'quiz.intro2': {
    fr: 'Tu as 20 secondes pour répondre à chaque question.',
    en: 'You have 20 seconds to answer each question.',
  },
  'quiz.intro3': {
    fr: 'Choisis la forme verbale correcte pour chaque phrase.',
    en: 'Choose the correct verb form for each sentence.',
  },
  'quiz.start': {
    fr: 'Commencer le Quiz!',
    en: 'Start the Quiz!',
  },
  'quiz.score': {
    fr: 'Score:',
    en: 'Score:',
  },
  'quiz.time': {
    fr: 'Temps:',
    en: 'Time:',
  },
  'quiz.question': {
    fr: 'Question',
    en: 'Question',
  },
  'quiz.gameover': {
    fr: 'Quiz Terminé!',
    en: 'Quiz Completed!',
  },
  'quiz.finalscore': {
    fr: 'Score Final:',
    en: 'Final Score:',
  },
  'quiz.errors': {
    fr: 'Erreurs:',
    en: 'Errors:',
  },
  'quiz.perfect': {
    fr: 'Perfection:',
    en: 'Perfect Score:',
  },
  'quiz.perfect.yes': {
    fr: 'Oui! 🌟',
    en: 'Yes! 🌟',
  },
  'quiz.perfect.no': {
    fr: 'Pas encore',
    en: 'Not yet',
  },
  'quiz.replay': {
    fr: 'Rejouer',
    en: 'Play Again',
  },
  'quiz.incorrect.heading': {
    fr: 'Erreurs à corriger:',
    en: 'Errors to correct:',
  },
  'quiz.feedback.correct': {
    fr: 'Correct!',
    en: 'Correct!',
  },
  'quiz.feedback.incorrect': {
    fr: 'Incorrect!',
    en: 'Incorrect!',
  },
  
  // Footer
  'footer.text': {
    fr: 'Créé pour les élèves de Français 2',
    en: 'Created for French 2 students',
  },
};

// Provider component
export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('fr');

  // Translation function
  const t = (key: string): string => {
    if (translations[key] && translations[key][language]) {
      return translations[key][language];
    }
    return key; // Fallback to key if translation not found
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

// Custom hook to use the language context
export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}