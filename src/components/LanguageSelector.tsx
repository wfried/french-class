import { useLanguage } from '../contexts/LanguageContext';
import '../styles/LanguageSelector.css';

// Flag SVG URLs
const frenchFlag = 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Flag_of_France.svg';
const americanFlag = 'https://upload.wikimedia.org/wikipedia/commons/a/a4/Flag_of_the_United_States.svg';

export function LanguageSelector() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="language-selector">
      <button 
        className={`flag-button ${language === 'fr' ? 'active' : ''}`}
        onClick={() => setLanguage('fr')}
        aria-label="Français"
        title="Français"
      >
        <img src={frenchFlag} alt="Drapeau français" />
      </button>
      <button 
        className={`flag-button ${language === 'en' ? 'active' : ''}`}
        onClick={() => setLanguage('en')}
        aria-label="English"
        title="English"
      >
        <img src={americanFlag} alt="American flag" />
      </button>
    </div>
  );
}