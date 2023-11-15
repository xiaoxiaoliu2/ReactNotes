// {} as param: used to destructure the first parameter of this function; object destructuring allows us to target the different properties of the incoming object by name
// {} in return: curly braces can be used to output dynamic values/JS expressions in JSX
export default function CoreConcept({image, title, description}) {     
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
