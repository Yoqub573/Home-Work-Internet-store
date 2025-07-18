import React, { useState } from 'react'
import './home.css'
import yy1 from './img/йййй 1.png'
import karzinkai1 from './img/karzinkai1.png'
import group73 from './img/Group 73.png'
import group89 from './img/Group 89.png'
import karzinkai2 from './img/karzinkai2.png'
import karzinkai3 from './img/karzinkai3.png'
import karzinkai4 from './img/karzinkai4.png'
import group31 from './img/Group 31 (1).png'
import group74 from './img/Group 74.png'
import bori1 from './img/bori1.png'
import bori2 from './img/bori2.png'
import bori3 from './img/bori3.png'
import bori4 from './img/bori4.png'
import krishai1 from './img/krisha1.png'
import { useDispatch, useSelector } from 'react-redux'
import { addUser, deleteUser, editUser } from '../../reducers/todoListSlice'
import { Button, Input, Modal } from 'antd'


const Home = () => {
  const data = useSelector(store => store.todolist.data)
  const dispatch = useDispatch()

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [addName, setAddName] = useState('')
  const [addPrice, setAddPrice] = useState('')

  const [isEditModalOpen, setIsEditModalOpen] = useState(false)
  const [editName, setEditName] = useState('')
  const [editPrice, setEditPrice] = useState('')
  const [editImg, setEditImg] = useState('')
  const [idx, setIdx] = useState(null)

  const showModal = () => setIsModalOpen(true)
  const handleCancel = () => setIsModalOpen(false)
  const handleEditCancel = () => setIsEditModalOpen(false)

  function handleAdd() {

    let newUser = {
      name: addName,
      price: addPrice,
      img: krishai1, 
      id: Date.now()
    }
    dispatch(addUser(newUser))
    setIsModalOpen(false)
    setAddName('')
    setAddPrice('')
  }

  function getEditInfo(e) {
    setIsEditModalOpen(true)
    setEditName(e.name)
    setEditPrice(e.price)
    setEditImg(e.img)
    setIdx(e.id)
  }

  function handleEdit() {

    let update = {
      name: editName,
      price: editPrice,
      img: editImg,
      id: idx
    }
    dispatch(editUser(update))
    setEditName('')
    setEditPrice('')
    setIsEditModalOpen(false)
  }

  return (
    <div>
      <div className="all1">
        <div className="all1-content">
          <p style={{ fontWeight: '600' }}>Новинка в России</p>
          <p style={{ marginTop: '20px' }}>
            Север - теплоизоляция
            <br /> для сурового климата
          </p>
          <p className="big-price">от 850 ₽ за 3м2</p>
          <button className="btn-primary">Подробнее</button>
        </div>

        <img src={yy1} alt="Изоляционный материал" className="all1-image" />
      </div>

      <div className="section-wrapper">
        <Section
          title="Теплоизоляция"
          products={[
            { img: karzinkai1, name: 'Пеноплекс Кофморт 1185х585х20мм 20 плит, 13.86м2, 0.278м3', price: '2 491 ₽/шт.' },
            { img: karzinkai2, name: 'Пеноплекс Кофморт 1185х585х20мм 20 плит, 13.86м2, 0.278м3', price: '3 200 ₽/шт.' },
            { img: karzinkai3, name: 'Пеноплекс Кофморт 1185х585х20мм 20 плит, 13.86м2, 0.278м3', price: '1 345 ₽/шт.' },
            { img: karzinkai4, name: 'Пеноплекс Кофморт 1185х585х20мм 20 плит, 13.86м2, 0.278м3', price: '2 600 ₽/шт.' }
          ]}
        />

        <hr style={{ color: 'lightGray' }} />

        <Section
          title="Строительные блоки"
          products={[
            { img: bori1, name: 'Пеноплекс Кофморт 1185х585х20мм 20 плит, 13.86м2, 0.278м3', price: '3 200 ₽/шт.' },
            { img: bori2, name: 'Пеноплекс Кофморт 1185х585х20мм 20 плит, 13.86м2, 0.278м3', price: '1 345 ₽/шт.' },
            { img: bori3, name: 'Пеноплекс Кофморт 1185х585х20мм 20 плит, 13.86м2, 0.278м3', price: '2 491 ₽/шт.' },
            { img: bori4, name: 'Пеноплекс Кофморт 1185х585х20мм 20 плит, 13.86м2, 0.278м3', price: '2 600 ₽/шт.' }
          ]}
        />

        <hr style={{ color: 'lightGray' }} />

        <div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginTop: '100px'
            }}
          >
            <p style={{ fontSize: '30px' }}>Строительные блоки</p>
            <button className="btn-primary" onClick={showModal}>
              Добавить товар
            </button>
          </div>

          <Modal
            title="Добавить товар"
            open={isModalOpen}
            onOk={handleAdd}
            onCancel={handleCancel}
            okText="Добавить"
            cancelText="Отмена"
          >
            <Input
              placeholder="Название"
              value={addName}
              onChange={(e) => setAddName(e.target.value)}
              style={{ marginBottom: 10 }}
            />
            <Input
              placeholder="Цена"
              value={addPrice}
              onChange={(e) => setAddPrice(e.target.value)}
            />
          </Modal>

          <Modal
            title="Редактировать товар"
            open={isEditModalOpen}
            onOk={handleEdit}
            onCancel={handleEditCancel}
            okText="Сохранить"
            cancelText="Отмена"
          >
            <Input
              placeholder="Название"
              value={editName}
              onChange={(e) => setEditName(e.target.value)}
              style={{ marginBottom: 10 }}
            />
            <Input
              placeholder="Цена"
              value={editPrice}
              onChange={(e) => setEditPrice(e.target.value)}
            />
          </Modal>

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '20px' }}>
            <img src={group74} alt="Group 74 logo" />
            <div className="karzinka-wrapper">
              {data.map((e) => (
                <div key={e.id} className="karzinka-card">
                  <img src={e.img} alt={e.name} className="product-img" />
                  <div className="logo-wrapper">
                    <img src={group73} alt="Group 73 logo" />
                  </div>
                  <p className="product-name">{e.name}</p>
                  <p className="product-price">{e.price}</p>
                  <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
                    <Button
                      className="btn-delete"
                      onClick={() => dispatch(deleteUser(e.id))}
                    >
                      Удалить
                    </Button>
                    <Button
                      className="btn-edit"
                      onClick={() => getEditInfo(e)}
                    >
                      Редактировать
                    </Button>
                  </div>
                </div>
              ))}
            </div>
            <img src={group31} alt="Group 31 logo" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home

function Section({ title, products }) {
  return (
    <div style={{ marginBottom: '100px' }}>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginTop: '50px'
        }}
      >
        <p style={{ fontSize: '30px' }}>{title}</p>
        <button className="btn-primary">Смотреть все</button>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '20px' }}>
        <img src={group74} alt="Group 74 logo" />
        <div className="karzinka-wrapper" style={{ marginTop: '50px' }}>
          {products.map(({ img, name, price }, idx) => (
            <Karzinka key={idx} img={img} name={name} price={price} />
          ))}
        </div>
        <img src={group31} alt="Group 31 logo" />
      </div>
    </div>
  )
}

function Karzinka({ img, name, price }) {
  return (
    <div className="karzinka-card">
      <img src={img} alt={name} className="product-img" />
      <div className="logo-wrapper">
        <img src={group73} alt="Group 73 logo" />
      </div>
      <p className="product-name">{name}</p>
      <p className="product-price">{price}</p>
      <div className="bottom-logo">
        <img src={group89} alt="Group 89 logo" />
      </div>
    </div>
  )
}
