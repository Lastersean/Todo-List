import {useState} from 'react'
interface Props {
  items:string[],
}

const ItemGroup = ({items}: Props) => { 
  const [selectedIndex, setSelectedIndex] = useState(0); 

  return(
  
   
    <>
    ItemGroup
    <ul>
   
    {items.map((item, index) => (
          <li
            key={index}
            className={selectedIndex === index ? "list-group-item active" : "list-group-item"}
            onClick={() => {
              setSelectedIndex(index)
            0}}  
          >
            {item}
          </li>
    ))}
    </ul>
    
    </>
  
  )  
}

export default ItemGroup