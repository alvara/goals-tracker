import './App.scss';
import Nav from './components/Nav/Nav';
import Progress from './components/Progress/Progress';
import Summary from './components/Summary/Summary';

function App() {
  return (
    <div className="app">
      <Nav />
      <Summary />
      <Progress />
    </div>
  );
}

export default App;
