import Contacts from "../Contacts";
import Card from "./Card";
import Copy from "./Copyright";

function App() {
  

  return (
    <div>
      <h1 className="heading">My Contacts</h1>
     
      {Contacts.map(contact => (  
        <Card
        key = {contact.id}
        name = {contact.name}
        imgURL = {contact.imgURL}
        phone = {contact.phone}
        email = {contact.email}      
        />
      )
       )}

      <Copy />
    </div>
  );

}

export default App;
