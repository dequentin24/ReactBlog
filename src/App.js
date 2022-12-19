import Posts from './Posts';
import Navbar from './Navbar';
import Home from './Home';

function App() {
  return (
    <>
    <Navbar />
      
    <div className="App">
     <Home />
    <Posts />
    </div>
    </>
  );
}

export default App;
