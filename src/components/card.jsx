import { useState } from "react";
import ButtonDetails from "../components/button";
import addInput from "../App";
import "./card.css";
const OurProduct = ({ el,funcDelete, funcCheck }) => {
 
  return (
    <div>
          <div  className="product">
            <img src={el.img} alt="" />
            <h1>{el.name}</h1>
            <p className="gray">{el.job}</p>
            <ButtonDetails text="See Details" bg="#14213D" color="white" />
            <div className="btns">
              <input type="checkbox" checked={el.status} />
              <button className="delbtn" onClick={()=>funcDelete(el.id)} >
                Delete
              </button>
              <button className="checkbtn" onClick={()=>funcCheck(el)}>
                Check
              </button>
            </div>
          </div>
    </div>
  );
};

export default OurProduct;
