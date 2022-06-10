import React, { useEffect } from 'react'
import { useState } from 'react'
export default function RestaurantForm({getData}) {
    const [formData,setFormData] = useState({});
    const [pay,setPay]  = useState({})
    const [text , setText] = useState("");
    const [cat,setCat] = useState([]);

    const handelSubmit = (e)=>{
        e.preventDefault()
         getData(formData)
    }

        useEffect(()=>{ setFormData({
            ...formData,
            payment_method:pay,
            categories:cat,
            
        });},[pay,cat])


    const handelpay = (e)=>{
       var {name,value} = e.target;
        value = (e.target.checked?"true":"false")
            setPay({...pay,[name]:value})
    }

    const handelText = (e)=>{
        setText(e.target.value);

    }
    const handelCat=(e)=>{
        e.preventDefault()
        setCat([...cat,text])
        setText("");
        }

    const handelForm = (e)=>{
        const {name,value} = e.target;
         setFormData({...formData,
                [name]:value});
                console.log(formData)
     }

  return (
      <div className=' form-container'>
          <form className='add-data-form'>
                <div>Name of the restaurent
                  <input type="text" onChange={handelForm} name="name" placeholder='enter the name'></input>
                </div>
                <div>image link
                  <input type="text" onChange={handelForm} name="image" placeholder='enter the image link'></input>
                </div>
                <div>total_votes
                  <input type="text" onChange={handelForm} name="total_votes" placeholder='enter the value'></input>
                </div>
                <div>revievs
                  <input type="text" onChange={handelForm} name="reviews" placeholder='enter the value'></input>
                </div>
                <div>cost
                  <input type="number" onChange={handelForm} name="cost" placeholder='enter the value'></input>
                </div>
                <div>stars
                  <input type="text" onChange={handelForm} name="stars" placeholder='enter the value'></input>
                </div>
                <div>payment_methods
                  <input type="checkbox" id='card' onClick={handelpay} name="card" value="true"></input>
                  <label for="card"> card</label><br></br>
                  <input type="checkbox" id='cash' onClick={handelpay} name="cash" value="true"></input>
                  <label for="card"> cash</label><br></br>
                  <input type="checkbox" id='upi' onClick={handelpay} name="upi" value="true"></input>
                  <label for="card"> upi</label><br></br>
                </div>
                <div>Categorys
                  <input type="text" onChange={handelText} value={text} name="category" placeholder='enter the category'></input>
                  <button onClick={handelCat} >add category</button>
                </div>
               <button onClick={handelSubmit} type="submit">submit</button>
              
          </form>
      </div>
    
  )
}
