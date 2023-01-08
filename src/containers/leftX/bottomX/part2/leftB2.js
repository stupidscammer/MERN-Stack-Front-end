import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, selectCount } from '../../../../store/servingsSlice'


export function LeftB2(props) {
    const count = useSelector(selectCount)
    const dispatch = useDispatch()
    const handleAdd = () => {
        dispatch(increment());
    }
    const handleSub = () => {
        dispatch(decrement());
    }
    
    return (    
    <div className='w-2/5 ml-10'>
        <div className='w-full' >
            <div className='w-full h-auto pb-2'>
                <label className='w-full items-center text-white text-7xl content-center pb-5	'>
                    Rice Pudding
                </label>
            </div>        
            <div className='w-full pt-2'>
                <img className='w-full h-auto pt-2 pl-2 pr-10' src='img/pudding1.png' alt='pudding'/>
            </div>
            <div className='w-full flex flex-row pt-4 pr-10  items-stretch'>
                <div className='w-1/6'>
                    <img src='img/Untitled-2 copy.png' className='w-full h-auto pl-5' alt='ximage'/>
                </div>
                <div className='w-3/6  h-auto self-center'>
                    <label className=' text-white text-4xl pl-10 '>{count} Servings</label>
                </div>
                <div className='w-1/6 pr-2'>
                    <button className='w-full h-full bg-[#548D01] text-4xl text-white hover:bg-[#7CD900] hover:shadow-xl rounded'
                    onClick={handleAdd}>+</button>
                </div>
                <div className='w-1/6 pl-2 pr-2'>
                    <button className='w-full h-full bg-[#EF5458] text-4xl text-white hover:bg-[#FE8683] rounded' onClick={handleSub}>-</button>
                </div>
            </div>
        </div>
    </div>
  );
}
