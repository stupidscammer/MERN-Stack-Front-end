import React  from 'react';

export function TopX(props) {
    const {handleSearchKey, rName} = props;    
    function dump  () {
        if (!props.flagaa1) {
            props.setFlagaa(false);   
        }
    }
   return (
    <div className='w-full space-x-10 flex flex-row pl-10 mt-10'>
      <div className='w-1/5 '>
          <img src='img/brand.png'  onClick={dump} className='flex-box w-full ml-2  h-auto rounded-3xl cursor-pointer' alt="brand"/>
      </div>
      <div className='w-3/5 pl-5 float-right '>
          <input type='text' className='w-full ml-12 border-white text-white text-2xl border bg-[#353535] rounded-xl  h-full pl-5'
             placeholder='Search recipes...' value={rName} onChange={(e) => handleSearchKey(e.target.value)}/>
      </div>
      <div className='w-1/5'>
         <button className='rounded ml-5 bg-[#faf9f6] hover:bg-[#a8a79c] '  >
            <img className='w-auto h-20  float-left rounded-2xl'   src='img/search.png' alt="search"/>
        </button>         
      </div>   
  </div>
  );
}

