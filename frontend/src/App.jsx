import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './components/Button/index.jsx'
import Input from './components/Input/index.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      {/* <Button children={'Enviar'} isLoading={false}>
      </Button> */}
      <Input label={'E-mail'}>
      </Input>
      <Input label={'Senha'}>
      </Input>
    </div>
  )
}

export default App
