import Form from "./Components/Form/Form"
import ItemGroup from "./Components/ItemGroup/ItemGroup"
import {useState} from 'react'


const App = () => {
  const [items, setItems] = useState<string[]>([])
  return (
    <>
    <Form setItems={setItems} items={items}/>
    <ItemGroup items={items}/>
    
    App
    </>
  )
}



export default App
