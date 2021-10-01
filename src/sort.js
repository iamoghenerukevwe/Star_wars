import React, {useState} from "react";

 
export default function CharacterList({ list }) {

  const { products } = {list};
  const [sortConfig, setSortConfig] = React.useState(null);

    React.useMemo(() => {
      let sortedProducts = [...products];
    if (sortConfig !== null) {
      sortedProducts.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
      });
    }
      return sortedProducts;
    }, [products, sortConfig]);

    const requestSort = key => {
      let direction = 'ascending';
      if (sortConfig.key === key && sortConfig.direction === 'ascending') {
        direction = 'descending';
      }
      setSortConfig({ key, direction });
    }
  
  /* name, gender and height */
  return (

    
    

      <div className="character-list-div">

     

      <table>
        <colgroup span="3"></colgroup>
        <thead>
          <tr>
            <th>Name <button type="button"onClick={() => requestSort('name')}className={getClassNamesFor('name')}></button></th>
            <th>Gender <button type="button"onClick={() => requestSort('gender')}className={getClassNamesFor('gender')}></button></th>
            <th>Height<button type="button"onClick={() => requestSort('height')}className={getClassNamesFor('height')}></button></th>
          </tr>
        </thead>
        <tbody>
          {list
            ? list.map((character) => (
                <tr key={character.edited}>
                  <td key={character.name}>{character.name.toUpperCase()}</td>
                  <td key={character.gender}>{character.gender.toUpperCase()}</td>
                  <td key={character.height}>{character.height}</td>
                </tr>
              ))
            : ""}
        </tbody>
      </table>
    </div>
    
  );
}


