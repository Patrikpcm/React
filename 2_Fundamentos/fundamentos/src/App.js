//components
import FirstComponent from './components/FirstComponent';
import TemplateExpressions from './components/TemplatesExpressions';
import Events from './components/Events';

//style css
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Fundamentos React - Componentes</h1>
        <FirstComponent/>
        <TemplateExpressions/>
        <Events/>
      </header>
    </div>
  );
}

export default App;
