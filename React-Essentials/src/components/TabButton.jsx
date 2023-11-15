export default function TabButton({ children, onSelect }) {   // children prop contains content  between component text in App
  return (
    <li>
      <button onClick={onSelect}>{children}</button>
    </li>
  );
}
// pattern 2: handleSelect>onSelect>TabButton
// handleClick used as a value passed to the click prop

// export default function TabButton({children}) {  
//   return (
//   <li>
//     <button>{children}</button>
//     </li>
//   ); 
// }