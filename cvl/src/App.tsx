import './App.css'
import Education from './Components/Education'
import Header from './Components/Header'
import Project from './Components/Project'
import Skill from './Components/skill'
import Contact from './Components/Contact'
import Activity from './Components/experience'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      
     
      <Education/>
    
      <Skill/>
      
      <Project/>
      <Activity/>
      <Contact/>
    </>
  )
}

export default App