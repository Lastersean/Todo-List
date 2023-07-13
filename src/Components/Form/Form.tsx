import  {FormEvent, useRef} from 'react';



interface Props {
  setItems: React.Dispatch<React.SetStateAction<string[]>>,
  items: string[]
}

const Form = ({items, setItems}: Props) => {
  
  const submitRef = useRef<HTMLInputElement>(null)
  
 
 
console.log(submitRef)

  const handleSubmit =(event:FormEvent) => {
    event.preventDefault()
    if (submitRef.current !== null) {
      items.push(submitRef.current.value)  
      console.log(items)
    }
    


  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <h3>To-Do List</h3>
          <label htmlFor="To-dolist" className="form-label">
            What do you have to do?
          </label>
          <input type="text" className="form-control" id="exampleInputEmail1" ref={submitRef} />
        </div>
        <div className="mb-3"></div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
};

export default Form;
