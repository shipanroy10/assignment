import React from 'react';
import './Body.css'
import fakeData from '../Course/Course';
import { useState } from 'react';
import Information from '../Information/Information';
import Cart from '../Cart/Cart';

const Body = () => {
    // console.log(fakeData)
      const [courses,setCourse]  =  useState(fakeData)
const [cart,setCart] = useState([])
const handleAdd = (course)=>{
    console.log('hello',course)
const newCourses =[...cart,course]
setCart(newCourses)
}
    return (
        <div className="body">
                   
              
                <div className="firstOne">
                <h2 className="fh2">Total Courses : {courses.length} </h2>
                  {courses.map(course => <Information course={course}
                  handleAdd={handleAdd}
                  
                  ></Information>)}
        
                </div>
       
                <div className="secondOne">
                
                <Cart cart={cart}></Cart>
                </div>
        </div>
    );
};

export default Body;