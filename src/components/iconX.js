import React from 'react';
import {
  useNavigate
} from "react-router-dom";
import './dropdown.css';
export function IconX(props) {
    const {showData} = props;
    const navigate = useNavigate();
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
      setOpen(!open);
    };  
    const handleMenuOne = () => {
      setOpen(false);
    };
  
    const handleMenuTwo = () => {
      localStorage.setItem("token", '')
      navigate("/login")
      setOpen(false);
    };
    return (        
        <div className='h-20 mt-5 flex items-stretch '>
            <figure className="rounded-2xl h-full  bg-white w-full flex flex-row" >
                {showData.userflag && (<Dropdown
                  open={open}
                  trigger={
                    <div onClick={handleOpen} className='flex flex-row'>
                    <img className="pl-3.5 w-20 h-auto rounded-2xl cursor-pointer " src={showData.image} alt="user"/>
                    <label className="text-justify text-xl pl-7 self-center" >{showData.name}</label>
                  </div>
                }
                  menu={[
                    <button onClick={handleMenuOne} >Profile</button>,
                    <button onClick={handleMenuTwo}>Logout</button>,
                  ]}
                />)}
                {showData.image !== 'img/user.png' && (
                  <div className='flex flex-row'>
                  <img className="pl-3.5 w-20 h-auto rounded-2xl cursor-pointer" src={showData.image} alt="user"/>
                  <label className="text-justify text-xl pl-7 self-center" >{showData.name}</label>  
                  </div>
                )}
                
                
            </figure>    
        </div>
    );
    
}
const Dropdown = ({ open, trigger, menu }) => {
  return (
    <div className="dropdown">
      {trigger}
      {open ? (
        <ul className="menu rounded-2xl border-spacing-1 ">
          {menu.map((menuItem, index) => (
            <li key={index} className="menu-item">{menuItem}</li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};