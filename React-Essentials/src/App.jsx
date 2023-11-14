import reactImg from './assets/react-core-concepts.png';
// import componentsImg from './assets/components.png';
import { CORE_CONCEPTS } from './data.js';
// index.html --> main.jsx(root.render(App.jsx)) --> App.jsx
// JS code using non-standard JS code/ JS syntax extension (HTML and JS code)
const reactDescriptions = [`Fundamental`, `Crucial`, `Core`];
function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

function Header() {
  const description = reactDescriptions[genRandomInt(2)];

  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}

// {} as param: used to destructure the first parameter of this function; object destructuring allows us to target the different properties of the incoming object by name
// {} in return: curly braces can be used to output dynamic values/JS expressions in JSX
function CoreConcept({image, title, description}) {     
  return (
    <li>
      <img src={image} alt={title} />      
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}

// METHOD1: props(parameter): = an object, the key-value value below
// function CoreConcept(props) {    
//     return (
//       <li>
//         <img src={props.image} alt={props.title} />
//         <h3>{props.title}</h3>
//         <p>{props.description}</p>
//       </li>
//     );
//   }


// component functions can be used like regular HTML elements inside JSX Code
// to output the content of the header component as part of our app, use it in App component

//  React components are just JS functions that returns JSX code
function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
          
            {/* 
            // METHOD1
            <CoreConcept     // custom HTML attributes, key-value pair will be input to the function above
              title = 'components'
              description = 'The core UI building block - compose the user interface by combining multiple components.'
              image = componentsImg
            />
            // METHOD2
            <CoreConcept     // custom HTML attributes, key-value pair will be input to the function above
              title = {CORE_CONCEPTS[0].title}
              description = {CORE_CONCEPTS[0].description}
              image = {CORE_CONCEPTS[0].image}
            // METHODS3
            <CoreConcept concept={CORE_CONCEPTS[0]}/>
            />  
            */}
            
            <CoreConcept {...CORE_CONCEPTS[0]}/>
            <CoreConcept {...CORE_CONCEPTS[1]}/>
            <CoreConcept {...CORE_CONCEPTS[2]}/>
            <CoreConcept {...CORE_CONCEPTS[3]}/>
            
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
