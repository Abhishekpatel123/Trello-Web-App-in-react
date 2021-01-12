import './App.css';
import AddIcon from '@material-ui/icons/Add';
import {useState} from 'react';
import Card from './Components/Card'






function App() {
  let [cardCount , setCardCount ] = useState([]);
  let [count , setCount ] =useState(1);
  
  const addAnotherList = ()=>{
    setCount(count + 1);
    setCardCount((preValue)=>{
      return(
        [...preValue , count]
      )
    })
  }
  

  return (
    <div className = "outer_div" >
      <div className  = 'nav_div'>
        <button onClick = {addAnotherList} className = "btn1" type = "button" > 
        <AddIcon/>
          Add another list</button>
      </div>
      <div className = "card_collection" id ='card_collection'  >
        
        {
          cardCount.map((item , index)=>{
            return ( <Card key = {index} /> )
          })
        }


      </div>
              
    </div>
    
  );
}

export default App;
