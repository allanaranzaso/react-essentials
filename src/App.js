import './App.css';
import dice from "./dice6.png";

function Header(props) {
  return (
    <header>
      <h1>{props.name}'s Kitchen. Age: {props.age}</h1>
    </header>
  )
}

function Main(props) {
  return (
    <section>
      <p>We serve the most {props.adjective} food around.</p>
      <img src={dice} alt="dice"/>
      <ul style={{textAlign: "left"}}>
        {props.dishes.map((dish) => (
        <li key={dish.id}>{dish.title}</li>
        ))}
      </ul>
    </section>
  );
}

function Footer(props) {
  return (
    <footer>
      <p>Published {props.year} </p>
    </footer>
  )
}

const dishes = [
  "Macaroni and Cheese",
  "Salmon",
  "Tofu with Vegetables",
  "Truffle pasta",
  "Spaghetti with meatballz"
]

const dishObjects = dishes.map((dish, i) => ({id: i, title: dish}));

function App() {
  return (
    <div className="App">
      <Header name="Cindy" age="2" />
      <Main adjective="amazing" dishes={dishObjects} />
      <Footer year={new Date().getFullYear()} />
    </div>
  );
}

export default App;
