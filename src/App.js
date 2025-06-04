import React from 'react';
import './App.css';
import images from './assets/leclerc2.png';
import sf90 from './assets/sf90.webp';
import ferrari488 from './assets/488.jpg';
import natorze from './assets/natorze.webp';

function App() {
  return (
    <div>
      <header>
        <h1>Ferrari And Charles Leclerc</h1>
        <nav>
          <a href="#top" id="toTop">Strona główna</a>
          <a href="#history">Historia Ferrari</a>
          <a href="#charles">Charles Leclerc</a>
          <a href="#f1">Ferrari w F1</a>
          <a href="#gallery">Galeria</a>
        </nav>
      </header>

      <div className="container">
        <section id="home">
          <h2>Witamy na stronie Ferrari i Charlesa Leclerca</h2>
          <div className="section-content">
            <div className="left-column">
              <p>Scuderia Ferrari to jeden z najbardziej legendarnych zespołów wyścigowych na świecie. Charles Leclerc, młody talent z Monako, jest obecnie jednym z kierowców tej ikonicznej drużyny w Formule 1.</p>
              <div className="image-container">
                <img src={images} alt="Charles Leclerc w Ferrari" />
              </div>
            </div>
            <div className="right-column">
              <h3>Scuderia Ferrari</h3>
              <p>Ferrari to jeden z najstarszych i najbardziej utytułowanych zespołów w historii Formuły 1. Scuderia Ferrari to jeden z najbardziej znanych i utytułowanych zespołów wyścigowych w historii motorsportu. Działający od 1929 roku, zespół Ferrari 
                        jest najstarszym i najbardziej rozpoznawalnym uczestnikiem Mistrzostw Świata Formuły 1 (F1). Z jego historią związane są nie tylko niezwykłe osiągnięcia sportowe, ale także emocje, które towarzyszą milionom fanów na całym świecie.
                        Scuderia Ferrari została założona przez włoskiego inżyniera i przedsiębiorcę Enzo Ferrari w 1929 roku w Modenie, w północnych Włoszech. Początkowo zespół nie rywalizował w Formule 1, a był jedynie sekcją wyścigową dla prywatnych kierowców. Ferrari, które początkowo słynęło z produkcji samochodów sportowych, postanowiło rozszerzyć swoją działalność na wyścigi, co zapoczątkowało długą i bogatą historię zespołu. Już w 1947 roku, Enzo Ferrari zbudował pierwszy samochód wyścigowy pod własnym nazwiskiem – Ferrari 125 S, który stał się fundamentem sukcesów zespołu w późniejszych latach.</p>
            </div>
          </div>
        </section>

        <section id="history">
          <h2>Historia Ferrari</h2>
          <div className="section-content">
            <div className="left-column">
              <p>Ferrari zostało założone przez Enzo Ferrari w 1939 roku i od samego początku stawiało na wydajność i innowacje. W ciągu swojego istnienia zespół wygrał niezliczone mistrzostwa, zarówno w Formule 1, jak i innych wyścigach samochodowych.</p>
                    <p>Scuderia Ferrari wzięła udział w pierwszym wyścigu Formuły 1 w 1950 roku, kiedy to był to początek dominacji Ferrari na torach wyścigowych. Zespół był świadkiem wielu sukcesów, m.in. zdobycia mistrzostwa świata przez takie legendy jak Michael Schumacher czy Niki Lauda.</p>
            </div>
            <div className="right-column">
              <h3>Wielkie sukcesy</h3>
              <p>W historii Ferrari nie brakuje wielkich osiągnięć. Zespół zdobył nie tylko tytuły mistrzów świata, ale także odcisnął swoje piętno w wyścigach długodystansowych oraz w innych dyscyplinach sportów motorowych.</p>
            </div>
          </div>
        </section>

        <section id="f1">
          <h2>Ferrari w Formule 1</h2>
          <div className="section-content">
            <div className="left-column">
               <p>Scuderia Ferrari jest najstarszym zespołem w Formule 1, a jej historia w tym sporcie jest niezmiernie bogata. Zespół brał udział w każdym sezonie Formuły 1 od początku jej istnienia w 1950 roku.</p>
                    <p>W swojej historii Ferrari zdobyło wiele mistrzostw świata zarówno w klasyfikacji kierowców, jak i konstruktorów. Ferrari ma na swoim koncie takie nazwiska jak Michael Schumacher, Sebastian Vettel, Kimi Räikkönen, a także obecnego kierowcę – Charlesa Leclerca, który od 2019 roku jeździ dla Ferrari.</p>
            </div>
            <div className="right-column">
              <h3>Scuderia Ferrari dzisiaj</h3>
              <p>Obecnie Ferrari jest jednym z najważniejszych zespołów w F1, a ich występy wciąż przyciągają ogromną uwagę fanów na całym świecie.</p>
            </div>
          </div>
        </section>

        <section id="charles">
          <h2>Biografia Charlesa Leclerca</h2>
          <div className="section-content">
            <div className="left-column">
                              <p>Charles Leclerc urodził się 16 października 1997 roku w Monako. Zainspirowany wyścigami już od najmłodszych lat, zaczął swoją karierę w kartingu, a wkrótce potem przeszedł do Formuły 1, gdzie błyskawicznie zyskał uznanie.</p>
                    <p>Leclerc, w wieku zaledwie 21 lat, dołączył do Scuderia Ferrari w 2019 roku, stając się jednym z najmłodszych kierowców w historii zespołu. Od tamtej pory zyskał status jednej z najbardziej obiecujących gwiazd wyścigowych na świecie.</p>
            </div>
            <div className="right-column">
              <h3>Jego droga do Ferrari</h3>
                    <p>Charles przeszedł od kartingu do F1 w błyskawicznym tempie, zdobywając uznanie i pokazując swoje niesamowite umiejętności, co przyciągnęło uwagę Ferrari.</p>
            </div>
          </div>
        </section>

        <section id="gallery">
          <h2>Galeria</h2>
          <div className="gallery">
            <img src={sf90} alt="Ferrari SF90 Stradale" />
            <img src={ferrari488} alt="Ferrari 488 GT3" />
            <img src={natorze} alt="Charles Leclerc na torze" />
          </div>
        </section>
      </div>

      <footer>
        <p>Autor: Rafał Kaczyński | Nr indeksu: 119787</p>
      </footer>
    </div>
  );
}

export default App;
