import './App.css';
import NavBar from './Components/NavBar';
import ListOfArticles from './Components/listOfArticles';





function App() {
  return (
    <div className="App">
      
      <Header></Header>
      
      <NavBar></NavBar>
      <ListOfArticles></ListOfArticles>
    </div>
  );
}

const Header = () => {
  return <h1> News App</h1>;
};




export default App;
