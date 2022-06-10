import React, { useEffect, useState } from 'react'

function RestaurantList(Data) {
    const data = Data.data;

    const [paymode,setPayMode] = useState([]);
    useEffect(()=>{
       const arr = [];
            for( let i in data.payment_method){
                (data.payment_method[i]=="true" && arr.push(i))
            }
        
       setPayMode(arr);
    },[])

     


  return (<div className='wrapper'>
       
    
         <div className='image-box'>
         <img src={data.image} alt=""></img>
     </div>
     <div className='info-box'>
        <div className='res-name'>
            <div>
                {data.name}
            </div>
        </div>
        <div className='categorys'>
            {data.categories.length>1?data.categories.join(","):data.categories}
        </div>
        <div>
            <div className='price'>
            <span>&#8377;</span>{data.cost} &nbsp;<span>&#8226;</span>up to 30 min
                
            </div>
           
        </div>
        <div  className='payment-info'>
            Accepts {paymode.length>1?paymode.join(" "):paymode}
        </div>
        
     </div>
     <div className='right-div'>
         <div className='ratting'>
             {data.stars}
         </div>
         <div> {data.total_votes} votes</div>
         <div>  {data.reviews} revives</div>
     </div>
  </div>)
}

export default RestaurantList