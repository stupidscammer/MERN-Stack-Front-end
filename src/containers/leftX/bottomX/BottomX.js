import { RightB2 } from '../bottomX/part2/rightB2';
import { LeftB2 } from '../bottomX/part2/leftB2';

import { RightB1 } from '../bottomX/part1/rightB1';
import { LeftB1 } from '../bottomX/part1/leftB1';
import React, { useState} from 'react';
export function BottomX({list}) {  
    const [dishdatas]=useState([]);
    const [dishdetail,setDishdetail]=useState('');    
    return (   
      <div className='w-full flex flex-row mt-10 space-x-10'>
          {!dishdetail ? (
              <div className='w-full flex flex-row'>
                  <LeftB1 />    
                  <RightB1 showData={dishdatas.data}  setDishdetail={setDishdetail} list={list}  />                  
              </div>
              ):<div className='w-full flex flex-row'> 
                  <LeftB2  />
                  <RightB2 />  
                  </div>}
      </div>
  );
}