import React, { useState } from 'react'
import s from "./images/0b3d8cb55d0a04b48fdb63f6e48021bf-1000x1000 1.png"
import line from "./images/Group 73.png"
import { useDispatch, useSelector } from 'react-redux'
import { addUser, deleteUser, editUser } from './reducers/todoListSlice'
import grocery from "./images/Group 85.png"
import { Link } from 'react-router-dom'

const Cotalog = () => {

  let data = useSelector((store) => store.todolist.data)
  let dispatch = useDispatch()

  let [addName, setAddName] = useState("")
  let [addPrice, setAddPrice] = useState("")
  function add() {
    let newUser = {
      name: addName,
      price: addPrice,
      img: s,
      id: Date.now()
    }
    dispatch(addUser(newUser))
  }

  let [editName, setEditName] = useState("")
  let [editPrice, setEditPrice] = useState("")
  let [idx, setIdx] = useState(null)
  function getEdit(el) {
    setEditName(el.name)
    setEditPrice(el.price)
    setIdx(el.id)
  }

  function edit() {
    let updatedUser = {
      name: editName,
      price: editPrice,
      id: idx
    }
    dispatch(editUser(updatedUser))
    setEditName("")
    setEditPrice("")
    setIdx(null)
  }

  return (
	 <div>
    <h1 className='text-[50px] text-center lg:text-start'>Базальтовая вата</h1>

    <div className='flex justify-around items-center flex-wrap gap-[25px]'>
      <div>
        <input type="text" value={addName} onChange={(e) => setAddName(e.target.value)}/>
        <input type="text" value={addPrice} onChange={(e) => setAddPrice(e.target.value)}/>
        <button onClick={add}>Add</button>
      </div>

      <div>
        <input type="text" value={editName} onChange={(e) => setEditName(e.target.value)}/>
        <input type="text" value={editPrice} onChange={(e) => setEditPrice(e.target.value)}/>
        <button onClick={edit}>Save</button>
      </div>
    </div>

    <div className='mt-[100px] flex justify-around items-center flex-wrap gap-[25px]'>
      {data.map((el) => {
        return (
          <div className='text-center w-[300px]'>
            <img src={el.img} alt="" className='m-auto'/>
            <img src={line} alt="" className='m-auto my-[15px]'/>
            <p>{el.name}</p>
            <p className='text-[30px] text-[#1D6BDD] my-[15px]'><b>{el.price}</b></p>
            <div className='flex justify-between items-center'>
              <button className='border w-[50px] h-[50px]' onClick={() => dispatch(deleteUser(el.id))}>-</button>
              <button className='border w-[50px] h-[50px]'>1</button>
              <button className='border w-[50px] h-[50px]' onClick={() => getEdit(el)}>+</button>
              <Link to={`/info/${el.id}`}>
                <img src={grocery} alt="" />
              </Link>
            </div>
          </div>
        )
      })}
    </div>
   </div>
  )
}

export default Cotalog