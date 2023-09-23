import React from 'react';
import ClearIcon from '@material-ui/icons/Clear';

const Li = (probs) => {
    const dragStart = (e) => {
        const target = e.target;
        e.dataTransfer.setData('card_id', target.id);
        setTimeout(() => {
            target.style.display = "none"
        }, 0)

    }
    const dragOver = e => {
        e.preventDefault();
    }
    return (
        <li id={"li" + probs.li_id} onDragStart={dragStart} onDragOver={dragOver} draggable className="li"  >
            <h4>{probs.li} </h4>
            <div onClick={() => probs.onSelect(probs.li_id)} style={{ cursor: 'pointer' }} >
                <ClearIcon />
            </div>
        </li>
    )
}

export default Li;