import React from 'react';
import { HLDropdown, HLMenu, HLCard } from "synos-helena";
import { Avatar } from "antd";
export function IconX(props) {
    const {showData} = props;
    const menu = (
        <HLMenu>
          <HLMenu.Item>
            <a 
              target="_blank"
              rel="noopener noreferrer"
              href="http://www.alipay.com/"
            >
              Log time
            </a>
          </HLMenu.Item>
          <HLMenu.Item>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="http://www.taobao.com/"
            >
              Add flag
            </a>
          </HLMenu.Item>
          <HLMenu.Item>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="http://www.tmall.com/"
            >
              Move
            </a>
          </HLMenu.Item>
        </HLMenu>
      );
      
    return (        
        <div className='h-20 mt-5 flex items-stretch '>
            <figure className="rounded-2xl h-full  bg-white w-full flex flex-row" overlay={menu} trigger={["click"]}>
                <img className="pl-3.5 w-auto h-auto rounded-2xl " src={showData.image} alt="user"/>
                <p className="text-justify text-xl pl-7 self-center">{showData.name}</p>                
            </figure>    
        </div>
    );
}