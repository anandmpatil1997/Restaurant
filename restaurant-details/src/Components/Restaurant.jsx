import React, { useState } from 'react'
import RestaurantForm from './RestaurantForm'
import RestaurantList from './RestaurantList'
import data from "../db.json"
import '../App.css';
function Restaurant() {
    const [resData,setResData] = useState(data);
    const [stars , setstars] = useState(0);
    const [pay , setPay] = useState("all")
    const [price,setPrice]=useState();


    const getData=(prop)=>{
            setResData([...resData,prop]);
           
    }
    const handelfilter= (e)=>{
       setstars(e);
    }
    const handelPay = (e)=>{
        setPay(e);
    }
    const handelSort = (e)=>{
        setPrice(e);
    }
    const filter = (i)=>{
        if(pay == "all"){
            if(stars==0){
                return i.stars<=5;
            }
            if(stars>0){
                 return i.stars==stars;
            }
        }
        else{
            if(pay=="cash"){
                if(stars==0){
                    return (i.stars<=5)&&(i.payment_method.cash=="true");
                }
                if(stars>0){
                     return i.stars==stars&&(i.payment_method.cash=="true");
                }
            }
            else if(pay=="card"){
                if(stars==0){
                    return (i.stars<=5)&&(i.payment_method.card=="true");
                }
                if(stars>0){
                     return i.stars==stars&&(i.payment_method.card=="true");
                }
            }
        }
       
    }
    var sort = (a,b)=>{
        if(price==1){
           
            return a.cost-b.cost;
        }
        else if(price==0){
            return b.cost-a.cost
        }
       
    }
   
  return(
  <div className='main-container'> 
        <RestaurantForm  getData = {getData}/>
        <div className='filter-block'>
            <div className='filter-sort'>
                filter by star:
                <button onClick={()=>handelfilter(4)}>4</button>
                <button onClick={()=>handelfilter(3)}>3</button>
                <button onClick={()=>handelfilter(2)}>2</button>
                <button onClick={()=>handelfilter(1)}>1</button>
                <button onClick={()=>handelfilter(0)}>all</button>
            </div>
            <div className='payment-sort'>
                Sort by payment mod:
                <button onClick={()=>handelPay("cash")}>cash</button>
                <button onClick={()=>handelPay("card")}>card</button>
                <button onClick={()=>handelPay("all")}>all</button>
            </div>
            <div className='price-sort'>
                Sort by payment mode:
                <button onClick={()=>handelSort(0)}>high to low</button>
                <button onClick={()=>handelSort(1)}>low to high</button>
            </div>
        </div>
        
        <div className='restaurentList'>
        {
            resData.filter(filter).sort(sort).map((e,i)=>{
               return <RestaurantList key={i} data = {e} />
            })
           
        }
        </div>
       
        
        
  </div>  
)}

export default Restaurant