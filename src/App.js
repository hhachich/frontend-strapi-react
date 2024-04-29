import "./App.css";
import Categories from "./components/Categories";
import Products from "./components/Products";

function App() {

  return (

    <div className="App">
      <header className="App-header">
        < h1>App</h1>
        <Categories />

        <Products />
      </header>

    </div>


  );
}

export default App;
