// import componentsImg from './assets/components.png';
import { CORE_CONCEPTS } from './data.js';
import Header from './components/Header.jsx';
import CoreConcept from './components/CoreConcept.jsx';
import TabButton from './components/TabButton.jsx';
// index.html --> main.jsx(root.render(App.jsx)) --> App.jsx
// JS code using non-standard JS code/ JS syntax extension (HTML and JS code)


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

            <CoreConcept {...CORE_CONCEPTS[0]} />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />

          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          {/* menu is HTML element, and is used to create a list of buttons */}
          <menu>
            <TabButton>Components</TabButton>
            <TabButton>JSX</TabButton>
            <TabButton>Props</TabButton>
            <TabButton>State</TabButton>
          </menu>
        </section>
      </main>
    </div>
  );
}

export default App;
