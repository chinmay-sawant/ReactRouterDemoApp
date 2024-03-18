import { useState } from "react";

export const ListofFood = () => {
    const [inputVal,setInputVal] = useState("");
    const [foods,setFoods] = useState(["Apple", "Banana", "Orange"])
    const handleOnChange =  (event) => {
        setInputVal(event.target.value);
    }
    const addItem = () =>{
        setFoods(f=> [...f,inputVal])
        setInputVal("")
    }

  return (
    <div>
      <h2>List of Foods</h2>
      <ul>
        {foods.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>
      <div className="container-sm input-group mb-3">
  <input type="text" value={inputVal} onChange={handleOnChange} className="form-control" placeholder="New Item" aria-label="New Item" aria-describedby="button-addon2"/>
  <button className="btn btn-outline-secondary" type="button" id="button-addon2" onClick={addItem}>Add item to list</button>
</div>

    </div>
  );
}
