import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';



<Tooltip title="Delete">
    <IconButton>
    <DeleteIcon />
    </IconButton>
</Tooltip>




const DisplayData = ({data,searchTerm}) => {
    // filter the data locally based on the search term
    const filterData = searchTerm.trim() === ""? data : data.filter((surah)=>{
        return surah.englishName.toLowerCase().includes(searchTerm.toLowerCase())
    });

    // if search term not provided and no items match, display not found message
    if(searchTerm.trim() !== "" && filterData.length ===0){
        return <h1 className='my-20 text-3xl text-center font-semibold text-gray-500'>No Results Found.</h1>
    }
    
    return(
        <section className="min-h-screen flex items center justify-center py-20 bg-white">
            <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">Lists of Surah</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {filterData.map((surah)=>{
                    return(
                    <div key={surah.number} className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                        <h3 className="text-xl font-bold mb-2">{surah.name}/{surah.englishName}</h3>
                        <p className="text-gray-400 mb-4">
                            {surah.englishNameTranslation}
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                        {[[surah.number,"Surah Number"], [surah.numberOfAyahs,"Number of Ayahs"], [surah.revelationType,"Revelation Type"]].map((item, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all cursor-pointer
                    ">
                    <Tooltip title={item[1]}>
                        {item[0]}
                    </Tooltip>
                  </span>
                ))}
                        </div>
                    </div>
  
                )})}
            </div>
            </div>
        </section>
    )
}

export default DisplayData