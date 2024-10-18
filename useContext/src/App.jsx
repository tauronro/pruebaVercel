
import './App.css'
import Father from './components/father'
import ContextProvider from './context/contextProvider'

function App() {


  return (
    <div>
      <ContextProvider>
        <Father text='Hola chino'/>
      </ContextProvider>
    </div>
  )
}

export default App
