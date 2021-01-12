import React from 'react';
import ClearIcon from '@material-ui/icons/Clear';

const Li = (probs)=>{
    return(
        <li draggable  className = "li"  > 
        <h4>{probs.li} </h4>
        <div onClick = { ()=> probs.onSelect(probs.li_id)} style = {{cursor : 'pointer' }} >
            <ClearIcon  />
        </div>
        </li>
    )
}

export default Li;