
import './App.css'
import Card from './components/card'

function App() {

  let myObj = {
    name: "help",
    money: 2000
  }

  let newArr = [1,2,3]

  return (
    <>
      <h1 className='bg-green-500 text-black rounded-2xl mb-5' >Hello</h1>
      <Card username="Rishav" btnText= "Know more about me" />
      <Card username="Batman" btnText= "Know more about me" />
    </>
  )
}

export default App
