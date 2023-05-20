import logo3 from './fish.svg';
import logo4 from './logo.svg';
import {Testimonio} from './componentes/Testimonio';

import './App.css';

function App() {
  return (
    <div className='App'>
      <div className='contenedor-principal'>
        <h1>Magos de Final Fantasy</h1>
        <Testimonio 
        nombre='Mago Negro'
        pais='Final Fantasy'
        imagen='blackMage'
        cargo='Lit. adherente a la magia negra'
        empresa='aparece en diversas entregas de FF'
        testimonio='En la novelización de Memory of Heroes, Teol es un tipo silencioso cuyas palabras cuentan. Es un hombre bondadoso y tranquilo, muy inteligente y en sintonía con las bestias y otros aspectos de la naturaleza.' />
        <Testimonio
        nombre='Mago Blanco'
        pais='Final Fantasy'
        imagen='whiteMage'
        cargo='Lit. adherente a la magia blanca'
        empresa='aparece en diversas entregas de FF'
        testimonio='La magia blanca, el arte arcano del socorro, se concibió hace mucho tiempo para que el mundo supiera la comodidad' />
        <Testimonio
        nombre='Mago del tiempo'
        pais='Final Fantasy'
        imagen='timeMage'
        cargo='Lit. adherente a la magia del tiempo'
        empresa='aparece en diversas entregas de FF'
        testimonio='Su magia especial se llama Magia del tiempo y generalmente consiste en hechizos que aumentan o disminuyen la velocidad, como Lento y Prisa, y aquellos que manipulan las fuerzas de la gravedad, como Gravedad y Meteoro' />
      </div>
    </div>
  );
}
export default App;
