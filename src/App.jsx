import './App.css'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import { Container } from '@chakra-ui/react'

function App() {

  return (
    <div className="App">
      <Container maxW='container.md'>
        <Header />
        <Home />
      </Container>
    </div>
  )
}

export default App
