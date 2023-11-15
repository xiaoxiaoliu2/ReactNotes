import reactImg from '../assets/react-core-concepts.png';
const reactDescriptions = [`Fundamental`, `Crucial`, `Core`];
function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

// to make sure that App.jsx can use this component need to export the component, and give a name just use default
// export staement using the default export syntax
export default function Header() {      
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