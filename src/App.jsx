import './App.css'
import Footer from "./Components/Footer"
import Header from './Components/Header'
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <div className="">
        <div className="w-full block">
            <Header />
            <main className=''>
                <Outlet />
            </main>
        </div>
        <div className="w-full block">
            <Footer />
        </div>
    </div>
  )
}

export default App
