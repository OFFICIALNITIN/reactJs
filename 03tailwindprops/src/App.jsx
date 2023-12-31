
import './App.css'
import Card from './components/Card'

function App() {

  // let myObj = {
  //   name: "Nitin",
  //   age: 9
  // }

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl'>Tailwind test</h1>
      <Card username="Nitin" />
      <Card />
    </>
  )
}

export default App
