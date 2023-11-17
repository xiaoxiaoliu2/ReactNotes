// import componentsImg from './assets/components.png';
import { useState } from 'react';     // only call Hooks inside of component functions, and on the top level
import { CORE_CONCEPTS } from './data.js';
import { EXAMPLES } from './data.js';
import Header from './components/Header.jsx';
import CoreConcept from './components/CoreConcept.jsx';
import TabButton from './components/TabButton.jsx';
// index.html --> main.jsx(root.render(App.jsx)) --> App.jsx
// JS code using non-standard JS code/ JS syntax extension (HTML and JS code)


// component functions can be used like regular HTML elements inside JSX Code
// to output the content of the header component as part of our app, use it in App component

//  React components are just JS functions that returns JSX code
// react will only execute a component function once, when the button clicked, the whole app will not be eexecuted again, onely the console log message from inside the event handler function, so the normal variable will not work to update the UI, so we need to work with state
function App() {
  const [ selectedTopic, setSelectedTopic ] = useState();      // always return 2 elements in an array, 1. initial state value: current data snapshot for this component execution cycle 2. updated value, a function provided by react that can be executed to update this state(stored value), telling react that this component function must be executed again

  function handleSelect(selectedButton) {
    // selectedButton => `components`, `jsx`, `props`, `state`
    setSelectedTopic(selectedButton);
    console.log(selectedTopic);
  }

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
            <TabButton isSelected={selectedTopic ===`components`} onSelect={() => handleSelect(`components`)}>Components</TabButton>
            <TabButton isSelected={selectedTopic ===`jsx`} onSelect={() => handleSelect(`jsx`)}>JSX</TabButton>
            <TabButton isSelected={selectedTopic ===`props`} onSelect={() => handleSelect(`props`)}>Props</TabButton>
            <TabButton isSelected={selectedTopic ===`state`} onSelect={() => handleSelect(`state`)}>State</TabButton>
          </menu>
          {!selectedTopic ? (
          <p>Please select a topic.</p> 
          ): (
          <div id="tab-content">
          <h3>{EXAMPLES[selectedTopic].title}</h3>
          <p>{EXAMPLES[selectedTopic].description}</p>
          <pre>
            <code>{EXAMPLES[selectedTopic].code}</code>
          </pre>
        </div>
        )}

          
        </section>
      </main>
    </div>
  );
}

export default App;
