import { useState } from 'react'
import './App.css'
import Home_Page from './Home_Page'
import Shop_Page from './Shop_Page'
function App() {

  const [pageNum, setpageNum] = useState(0);

  if (pageNum == 0) {
    return <Home_Page setpageNum={setpageNum} />
  } else {
    return <Shop_Page setpageNum={setpageNum} />
  }
  
}

export default App
