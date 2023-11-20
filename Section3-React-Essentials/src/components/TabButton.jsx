export default function TabButton({ children, onSelect, isSelected }) {   // children prop contains content  between component text in App
  return (
    <li>
      <button className={isSelected ? `active` : undefined} onClick={onSelect}>{children}</button>  
    </li>
  );
}
// {}: if we want dynamic or JS-based value
// Add a class name to a button: in JSX, use className instead of what we use in orignal HTML class
// pattern 2: handleSelect>onSelect>TabButton
// handleClick used as a value passed to the click prop

// export default function TabButton({children}) {  
//   return (
//   <li>
//     <button>{children}</button>
//     </li>
//   ); 
// }