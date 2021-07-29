import './App.css';

function App() {

  const yName = "James";
  // const year = ""; 

  return (
    <div className="App">
     <p>Created by { yName }</p>
     <p>Copyright &copy; { new Date().getFullYear() }</p>
     
    </div>
  );
}

export default App;
