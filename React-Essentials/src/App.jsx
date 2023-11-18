// import componentsImg from './assets/components.png';
import { useState } from 'react';     // only call Hooks inside of component functions, and on the top level
import { CORE_CONCEPTS } from './data.js';
import { EXAMPLES } from './data.js';
import Header from './components/Header.jsx';
import CoreConcept from './components/CoreConcept.jsx';
import TabButton from './components/TabButton.jsx';

function App() {
  const [ selectedTopic, setSelectedTopic ] = useState();     
  function handleSelect(selectedButton) {
    // selectedButton => `components`, `jsx`, `props`, `state`
    setSelectedTopic(selectedButton);
    console.log(selectedTopic);
  }

    // {CORE_CONCEPTS.map()}   produce a new array based on the existing array, map takes a JS function, iterate the function item by item in the array, transform data to JSX code; key is a special prop in the function will be used by React, explain later, unique value in the array elements
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((conceptItem) => 
            <CoreConcept key={conceptItem.title} {...conceptItem} />
            )}  
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
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
