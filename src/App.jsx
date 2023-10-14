import './App.css'

import About from './components/About'
import Footer from './components/Footer'
import Profile from "./components/Profile"
import Info from './components/Info'

function App() {
  
  return (
    <div className="card">
      <Profile />
      <Info />
      <About />
      <Footer />
    </div>
  )
}

export default App
