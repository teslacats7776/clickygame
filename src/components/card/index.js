import React from "react";

function Card (props){


    return ( 
      <div className="row">
          {
          props.data.map(data=>{
                     return ( <div className="card col-sm-3" >
                    <img className="card-img-top" src={data.image} alt="Card image cap"/>
                    </div>)
          })}
       
      </div>)
       
    }

export default Card;