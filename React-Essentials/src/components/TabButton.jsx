export default function TabButton({ children, onSelect }) {   // children prop contains content  between component text in App
  return (
    <li>
      <button onClick={onSelect}>{children}</button>
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