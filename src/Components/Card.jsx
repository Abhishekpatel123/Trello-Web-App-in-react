import React , {useState} from 'react';
import AddIcon from '@material-ui/icons/Add';
import Title from './Title'
import  Li from "./Li";


const Card =  ()=> {
  const [li, setLi] = useState(false)
  const [data1 , setData1 ] = useState([])
  const  [inputLi, setInputLi] = useState(null)

const addLi = ()=>{
  setLi(!li);
   setData1([...data1 , inputLi]);
   setInputLi("")
}

const liInput = (e)=>{
  setInputLi(e.target.value) ;
}

const cancel = (id)=>{
  // data1.pop();
  setData1(preValue=>{
    return preValue.filter((item, index)=>{
        return index != id;
    })
  })
}


const liStyle = {
  padding : "5px 10px",
  border : 'transparent' ,
  color : 'black',
  backgroundColor : "#474747",
  curser : 'pointer'
}



    return(
       <div className = "card_div"  >
          <Title/>
          <ul style = {{padding : "20px 0"}} onDragOver = {(e)=>{e.preventDefault(); console.log(e.target.style.backgroundColor = "red" ) } } >
           
           {
             data1.map((item , index ) =>{
               return (
              <Li li = {item} key = {index}  li_id = {index}  onSelect = {cancel} />

               )
             })
           }
              
          </ul> 
          <div className = "bottom_div" >
            {
              li ?
              <div style = {{display : "flex"}}>
              <input  id ="inputLiId" onChange = {liInput} value = {inputLi} className = "input" type = "text" /> 
              <button type = "button" className = "btn1" onClick = {addLi}  >Enter</button>
              </div> :
              <button className = "btn1"  onClick = {()=> setLi(!li)}  > <AddIcon/>  Add another card</button>
            }
          </div>
          
       </div>
    )
}

export default Card;