import React from 'react';
import './Information.css'
const Information = (props) => {
    const {name,username,price,phone,email,img} = props.course;
    return (
        <div className="information">
            <div className="firstInfo">
             <img src={img} alt=""/>
            </div>
            <div className="secondInfo">
            <h4>Course Name : {name}  </h4>
                <p>By : {username} </p>
                <p>Course Price : $ {price} </p>
                <p>Phone :  {phone}</p>
                <p>Email: {email} </p>
                <button onClick={ ()=> props.handleAdd(props.course)} className="design">Enroll Now</button>
            </div>
        </div>
    );
};

export default Information;