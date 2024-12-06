import React from 'react' 
import {Collapse} from 'react-collapse';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const Acoordion = ({Title, Desc, icon, open, toggle}) => {

  return (
    <>
<div className={`border border-slate-600 rounded-[10px] p-3 mt-3 ${open ? "bg-red-500" : "bg-[#00010f]"}`}>
    <div className="flex justify-between items-center" >
        <p className={`leading-[30.8px] md:text-base text-xs px-3 py-2 font-[800] ${open ? "text-[#000]" : "text-dimWhite"}`}>
             {icon} {Title}
        </p>
        <div className={`cursor-pointer ${open ? "text-black" : "text-red-500"} `} onClick={toggle}>
{open ? <ArrowDropUpIcon style={{fontSize:"2rem"}}/> 
:
 <ArrowDropDownIcon style={{fontSize:"2rem"}}/>  }
        </div>
    </div>
<Collapse isOpened={open}>
  <div className='max-w-[700px] text-black font-[600] px-3 py-2 md:text-base text-xs'>{Desc}</div>
</Collapse>
    </div>
</>
  )
}

export default Acoordion