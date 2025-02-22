import React, { useState } from 'react'
import { MdClose } from "react-icons/md";
import { HiMenuAlt3, HiSearch } from "react-icons/hi";
import { PiShoppingCartLight } from "react-icons/pi";


export default function Navbar() {
  const [dropDown, setDropDown] = useState(false);

  const showDropDown = () =>{
    setDropDown(!dropDown);

  };

  return <nav>
    <div>
        <div>
            <img src='/logo.png' alt='' width={156}/>
            <span>
                {dropDown ? (
                    <div onClick={showDropDown}>
                        <MdClose />
                    </div>
                ):(
                    <div onClick={showDropDown}>
                        <HiMenuAlt3/>
                    </div>
                )}
                <HiSearch size={24}/>
                <PiShoppingCartLight size={24} />
            </span>
        </div>  
        
    </div>
  </nav>
}
