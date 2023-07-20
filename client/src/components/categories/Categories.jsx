 import './categories.css'
import React ,{ useState }  from 'react'
import PData from "../../data/policyData.json"
 
import Card from './Card/Card';
export default function Categories() {
    
  const [pData,setPdata]=useState([...PData]);
function filterData(data){
return
}
  
  return (
  <section style={{backgroundColor:'#34495E',paddingTop:'1rem'}} id="categories">
  <div style={{display:'inline-flex',width:'100%',marginLeft:"2rem"}}>
        <button className='btnx '>Endowment</button>
        <button className='btnx '>Endowment</button>
        <button className='btnx  '>Endowment</button>
        <button className='btnx '>Endowment</button>
  </div>

    <div className='categories'>
      
      {
        pData.map(item=>{
          return <Card item={item}/>
        })
      }
    </div></section>
  )
}
