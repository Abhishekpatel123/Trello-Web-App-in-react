import React , {useState} from 'react';

const Title = ()=>{
    const [title , setTitle] = useState(true);

    const [data , setData] = useState(null);

    const titleChange = (e)=>{
         setData([e.target.value])
    }

    var input = document.getElementById("inputTitle");
if(input){
    input.addEventListener("keyup", function(event) {
        event.preventDefault();
        if (event.keyCode === 13) {
            setTitle(!title)
    
        }
    });

}




    return(
        <div className = "title_div">
        {
            title ?  
            <h3 onClick = {()=> setTitle(!title) } >{data ? data : 'Name' }</h3> :
            <div style = {{display : "flex",alignItem:"center"}} >
                <input onChange = {titleChange} id ="inputTitle" className = "input" type = "text" />
            </div>
        }
        </div>
    )
}

export default Title;