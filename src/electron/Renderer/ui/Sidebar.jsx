import React,{useState} from 'react';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import HomeIcon from '@mui/icons-material/Home';
import BookIcon from '@mui/icons-material/Book';
import InfoIcon from '@mui/icons-material/Info';

function Sidebar(){
    const [open,setOpen] = useState(true)
    
    const menuItems =  [
        {
            icons: <HomeIcon fontSize='medium' />,
            label: 'Home'
        },
        {
            icons: <BookIcon fontSize='small' />,
            label: 'Journal'
        },
        {
            icons: <InfoIcon fontSize='small' />,
            label: 'About'
        },
    ]

    return(
        <nav className={`shadow-md h-screen p-2 shadow-blue-400 duration-500 fixed bg-white left-0 z-1000 ${open?'w-55': 'w-16'}`}>
          
            <div className='shadow-md px-3 py-2 h-15 flex items-center justify-between'>
                <span classNa   me={`text-cyan-500 ${open? 'block': 'hidden'}`}><i>Quran</i><span className='text-black '>Journal</span></span>
                <MenuOpenIcon fontSize='medium' onClick={()=>setOpen(!open)} className='cursor-pointer'/>
            </div>
          {}
            <ul className='mt-10 flex items-center flex-col'>
                {
                    menuItems.map((items,index) =>{
                        return(
                        <li key={index} className='px-3 py-2 w-full hover:bg-blue-100 rounded-md duration-300 cursor-pointer flex gap-2 justify-center my-1'>
                            <span>{items.icons}</span>
                            <span className={`${open?'block': 'hidden'}`}>{items.label}</span>
                            </li>
                        )
                    })
                }
            </ul>
            {}
        </nav>
    )
}

export default Sidebar;