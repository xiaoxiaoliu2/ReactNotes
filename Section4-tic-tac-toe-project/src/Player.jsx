import { useState } from "react";
export default function Player({ name, symbol }) {
  const [isEditing, setIsEditing] = useState(false);

  function handleEditClick() {
    // setIsEditing(isEditing ? false : true);
    setIsEditing((editing) => !editing); // use a function to update the state
    // setIsEditing(!isEditing);   // directly invert the value
  }

  let playerName = <span className="player-name">{name}</span>
  let btnCaption = "Edit";
  if (isEditing) {
    playerName = < input type="text" required value={name}/>;
    btnCaption = "Save";
  }

  return (
    <li>
      <span className="player">
        {playerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{btnCaption}</button>
    </li>
  );

}