import './App.css';

function App() {

  var greeting = "";
  const img = "https://picsum.photos/200"; 
  const period = new Date();
  const date = period.getHours();
  const customStyle = {
    color : "black"
  }

  if ((date >= 0 ) && (date <= 11)) {
    greeting = "Good Morning";
    customStyle.color = "red";
  }else if ((date >= 12) && (date <= 17)) {
    greeting = "Good Afternoon";
    customStyle.color = "green";
  }else {
    greeting = "Good Evening";
    customStyle.color = "blue";
  }


  return (
    <div className="App">
     <h1 className="heading" style={customStyle}>{ greeting }</h1>
     {/* <h2>{ date }</h2> */}

     <img className="food-img" src={ img } alt="random images" />
     <img className="food-img" src="https://www.simplyrecipes.com/thmb/WFAZWL7N-orBG_wnB52Zun4xxhk=/3111x3111/smart/filters:no_upscale()/Simply-Recipes-Grilled-BBQ-Chicken-LEAD-10-03fd9892eaae4ce1a8a3f4c949657cfd.jpg" alt="chicken" />
     <img className="food-img" src="https://upload.wikimedia.org/wikipedia/commons/a/a3/Rostas_%28ready_and_served%29.JPG" alt="beef" />
     <img className="food-img" src="https://1.bp.blogspot.com/-0sdp9VGNcvo/XY4djJGAgTI/AAAAAAAASgg/YYd3cH_1V6oEuV6c42EYvSJIUr7U_eAcgCLcBGAsYHQ/s1600/easy-fish-fry-recipe.jpg" alt="fish" />

    </div>
  );
}

export default App;
