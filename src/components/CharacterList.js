import React from "react";

   

export default function CharacterList({ list }) {
  let sum = 0;

  return (

    
    

      <div className="character-list-div">

     

      <table>
        <colgroup span="3"></colgroup>
        <thead>
          <tr>
            <th>Name</th>
            <th>Gender</th>
            <th>Height</th>
            
          </tr>
        </thead>
        <tbody>
          {list
            ? list.map((character) => {
              
              if ((character.height) !== "unknown"){
              sum += parseInt(character.height)};

              return (
                <tr key={character.edited}>
                  <td key={character.name}>{character.name.toUpperCase()}</td>
                  <td key={character.gender}>{character.gender.toUpperCase()}</td>
                  <td key={character.height}>{character.height}</td>
                </tr>
              
              );})
            : ""}
            <tr className="sum">
              <td>Total</td>
              <td></td>
              <td>{sum}cm(
                {Math.floor(sum*0.0328084)}ft/
                {parseFloat((sum*0.0328084 - Math.floor(sum*0.0328084)) * 12).toFixed(2)}inches)
                </td>
            </tr>
        </tbody>
      </table>
    </div>
    
  );
}


