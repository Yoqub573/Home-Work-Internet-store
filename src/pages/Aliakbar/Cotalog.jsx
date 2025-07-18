import React from 'react'
import s from "./images/0b3d8cb55d0a04b48fdb63f6e48021bf-1000x1000 1.png"
import line from "./images/Group 73.png"
import { useDispatch, useSelector } from 'react-redux'
import { addUser, deleteUser } from './reducers/todoListSlice'
import grocery from "./images/Group 85.png"

const Cotalog = () => {

  let data = useSelector((store) => store.todolist.data)
  let dispatch = useDispatch()

  let [addName, setAddName] = useState("")
  let [addPrice, setAddPrice] = useState("")
  function add() {
    let newUser = {
      name: addName,
      id: Date.now()
    }
    dispatch(addUser(newUser))
  }

  return (
	 <div>
    <h1 className='text-[50px] text-center lg:text-start'>Базальтовая вата</h1>

    <input type="text" value={addName} onChange={(e) => setAddName(e.target.value)}/>
    <input type="text" value={addName} onChange={(e) => setAddName(e.target.value)}/>
      <button onClick={add}>Add</button>

    <div className='mt-[100px]'>
      {data.map((el) => {
        return (
          <div>
            <img src={el.img} alt="" />
            <img src={line} alt="" className='m-auto my-[15px]'/>
            <p>{el.name}</p>
            <p className='text-[30px] text-[#1D6BDD] my-[15px]'><b>{el.price}</b></p>
            <div className='flex justify-between'>
              <button className='border w-[80px] h-[80px]' onClick={() => deleteUser(el.id)}>-</button>
              <button className='border w-[80px] h-[80px]'>1</button>
              <button className='border w-[80px] h-[80px]'>+</button>
              <img src={grocery} alt="" />
            </div>
          </div>
        )
      })}
    </div>
   </div>
  )
}

export default Cotalog