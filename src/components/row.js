import React from 'react';
import TableColumn  from './tColumn';


    const Row=({rData})=>{
    return(
      <tr>
      {rData.data.map((colData, key)=>
        <TableColumn  key={key} colData={colData}/>
      )}
   </tr>
 );
}

export default Row;