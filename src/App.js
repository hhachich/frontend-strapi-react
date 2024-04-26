import './App.css';
import axios from 'axios';

function App() {

  // pour ajouter les relation comme les images on ajoute le populate
  const fetchPoducts = async()=>{
    const res = await axios.get(process.env.REACT_APP_API_URL+"/products?populate=*",{
      headers:{
        Authorization : "bearer " + process.env.REACT_APP_API_TOKEN
      }
    })
    console.log(res.data.data)
  }
  fetchPoducts()
  return (
    <>
        <p>Hello</p>
    </>
  );
}

export default App;
