
import { IconX } from '../../components/iconX';
import { AddIngrement } from '../../components/addIngrement';
import React,{useState} from 'react';
import { useSelector } from 'react-redux';
export function RightX() {
  const username = useSelector((app) => app.user.username)
  const [oList,setOList]=useState([]);
  let user={
    image:"img/user.png",
    name:"Mohammad"
  };
  let favor={
    image:"img/heart.png",
    name:"Favorites"
  };
  let shopList={
    image:"img/basket.png",
    name:"Shopping List"
  };
  let userflag=true;
  return (    
    <div className='w-full pr-10 mt-5 flex flex-col'>
      <IconX showData={{image: user.image, name: username, userflag}}/>   
      <IconX showData={favor}/>            
      <figure className="pr-5 mt-5 rounded-2xl h-full flex flex-col   bg-white w-full">        
        <IconX  showData={shopList}/>         
        <AddIngrement showData={oList} updatelist={setOList}/>        
      </figure>
    </div>
  );
}
