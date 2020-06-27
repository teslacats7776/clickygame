import React from "react";

function Card (props){


    return ( 
      <div className="row">
          {
          props.data.map(data=>{
                     return ( <div className="card col-sm-3" >
                    <img className="card-img-top" src={data.image} style={{width: 200, height: 200}} alt="Card image cap" onClick={()=>props.handleSubmit(data.id)}/>
                    </div>)
          })}
       
      </div>)
       
    }

export default Card;