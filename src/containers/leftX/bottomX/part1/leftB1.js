import React,{ useState} from 'react';
import { Natrition } from '../../../../components/natrient/natrition';
import { Omition } from '../../../../components/omitShow/omition';
import { Incgred } from '../../../../components/IncShow/incgred';
export function LeftB1() {
  const [sLists,setSList]=useState([]);
  const [oList,setOList]=useState([]);


  let natLists=["Olive oil","Oregano","tomato","olives"];
  let natdetails={
      title:"Nutrition details",
      detail:natLists,
  };
  const handleApply =() => {///////Include ingredient condition
    let s="";
    sLists.map((sdata, index) => s=s+sdata+',');
    setSList(s.slice(0,s.length-1));
    s="";
    oList.map((sdata, index) => s=s+sdata+',');
    setOList(s.slice(0,s.length-1));
  }
  return (
    <div className='mt-10 w-1/4 pl-10'>
      <div className='flex justify-center'>
        <div className='  w-5/6 float-left'>
          <div className="box-border h-auto w-full p-4 border-2 rounded-lg mt-6">
            <Incgred showData={sLists} updatelist={setSList} />         
          </div>
          <div className="box-border h-auto w-full p-4 border-2 rounded-lg mt-6">
            <Omition showData={oList} updatelist={setOList}/>
          </div>
          <div  className="box-border w-full h-auto  p-4 border-2 rounded-lg mt-6">
            <Natrition showData={natdetails}/>    
          </div>
          <button className='rounded-md w-full h-10 bg-[#F29F05] text-2xl text-white hover:bg-[#d3c84d] mt-6' onClick={() => handleApply()}>APPLY</button>
        </div>
        <div className='ml-10 h-fix     border-2 bg-[#A1A1A1] '>
        </div>
      </div>
    </div>   
  );
}
