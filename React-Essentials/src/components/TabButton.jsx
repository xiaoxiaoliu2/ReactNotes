export default function TabButton(props) {   // children prop contains content  between component text in App
  function handleClick() {
    console.log(`Hello World!`);
  }
  return (
  <li>
    <button onClick={handleClick}>{props.children}</button>    
    </li>
  ); 
}
// handleClick used as a value passed to the click prop

// export default function TabButton({children}) {  
//   return (
//   <li>
//     <button>{children}</button>
//     </li>
//   ); 
// }