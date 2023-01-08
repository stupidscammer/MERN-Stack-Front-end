import React from 'react';
import { HLDropdown, HLMenu, HLCard } from "synos-helena";
import { Avatar } from "antd";
import './dropdown.css';
export function IconX(props) {
    const {showData} = props;
    // console.log('showData', showData)
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
      setOpen(!open);
    };
  
    const handleMenuOne = () => {
      // do something
      setOpen(false);
    };
  
    const handleMenuTwo = () => {
      // do something
      setOpen(false);
    };
    
    return (        
        <div className='h-20 mt-5 flex items-stretch '>
            <figure className="rounded-2xl h-full  bg-white w-full flex flex-row" >
                {showData.userflag && (<Dropdown
                  open={open}
                  trigger={
                    <div onClick={handleOpen} className='flex flex-row'>
                    <img className="pl-3.5 w-20 h-auto rounded-2xl " src={showData.image} alt="user"/>
                    <label className="text-justify text-xl pl-7 self-center" >{showData.name}</label>
                  {/* <button onClick={handleOpen}>Dropdown</button> */}
                  </div>
                }
                  menu={[
                    <button onClick={handleMenuOne} >Profile</button>,
                    <button onClick={handleMenuTwo}>Logout</button>,
                  ]}
                />)}
                {showData.image != 'img/user.png' && (
                  <img className="pl-3.5 w-20 h-auto rounded-2xl " src={showData.image} alt="user"/>
                )}
                
                <label className="text-justify text-xl pl-7 self-center" >{showData.name}</label>  
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