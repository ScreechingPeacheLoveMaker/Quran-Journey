import { quranAPI } from '@electron/utils';
import { useEffect, useState } from 'react';
import DisplayData from './DisplayData';
import Hero from './Hero';
import Sidebar from './Sidebar';

function App() {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  // fetch the full dataset 
  useEffect(() => {
    quranAPI()
      .then((fetchData) => {
        setData(fetchData);
      })
      .catch((error) => {
        console.error("Failed to fetch data: ", error);
      })
  }, [])

  return (
    <>
      <Sidebar />
      <Hero searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      <DisplayData data={data} searchTerm={searchTerm} />
      {/* <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/> */}
      {/* <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} /> */}
      {/* <ResponsiveAppBar />
    <Hero /> */}
    </>
  )
}

export default App
