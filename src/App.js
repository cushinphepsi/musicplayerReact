
import './App.css';
import Content from './component/Content/Content';
import Header from './component/Header/Header';
import { ProviderPlayer } from './context/Context';

function App() {

  return (
    <ProviderPlayer>
      <div className="player">
        <Header />
        <Content/>
      </div>fhf
    </ProviderPlayer>

  );
}

export default App;
