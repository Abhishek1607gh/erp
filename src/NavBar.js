import React, {useState} from "react";
import { IoReorderThreeSharp } from "react-icons/io5";
import { MdDashboard } from "react-icons/md";
import { FaProductHunt } from "react-icons/fa";
import { RiRecordCircleFill } from "react-icons/ri";
import { SlCalender } from "react-icons/sl";
import './NavBar.css';




const NavBar = ({ li }) => {
  const [window, setWindow] = useState(false);
  let openClose = () => {
    if (window === false) {
      setWindow(true);
    } else {
      setWindow(false);
    }
  };

   let Calender = () => {
    <link to = './OrdersCalender'>
    </link>
   };
  return (
    <nav className="navbar-menu" style={{ width: window === false ? 150 : 60 }}>
      <div className="element"  onClick={() => openClose()} >
        <div style={{paddingLeft: window === false ? 27 : 17 }}>
          < IoReorderThreeSharp size={50}/>  
        </div>
               
      </div>
      
      <div style={{paddingLeft: window === false ? 30 : 5 }} className="list">
        <a href="/Dashboard">
        <MdDashboard  size={50}/><h3 style={{visibility: window === false ? "visible" : "hidden"}}> Dashboard</h3>
        </a>
      </div>

      <div style={{paddingLeft: window === false ? 30 : 5 }} className="list" >
      <a href="/Products" >
        < FaProductHunt  size={50}/> <h3 style={{visibility: window === false ? "visible" : "hidden"}}> Products</h3>
        </a>
      </div>

      <div v style={{paddingLeft: window === false ? 30 : 5 }} className="list" >
        <a href="/Orders">
        < RiRecordCircleFill size={50}/><h3 style={{visibility: window === false ? "visible" : "hidden"}}> Orders</h3>
        </a>
      </div>

      <div style={{paddingLeft: window === false ? 30 : 5 }} className="list" onClick={() => Calender()}>
        <a href="/OrdersCalender">
        < SlCalender size={50}/><h3 style={{visibility: window === false ? "visible" : "hidden"}}> Calender</h3>
        </a>
      </div>

    </nav>
  );
};

export default NavBar;
