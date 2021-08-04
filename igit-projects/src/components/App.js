import Footer from "./Footer";
import Header from "./Header";
import Note from "./Note";
import notes from "../notes";


function App() {
  
  
  return (
    <div className="App">

      <Header></Header>

      {notes.map(note => (

      <Note 
      key = { note.key }
      title = { note.title }
      content = { note.content }
      />

      ))
      }
      
      <Footer></Footer>
          
    </div>
    );
}

export default App;
