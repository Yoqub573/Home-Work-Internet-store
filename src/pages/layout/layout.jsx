import React, { cloneElement } from 'react'
import { data, Link, Outlet, useNavigate } from 'react-router-dom'
import logo from './Group 42.svg'
import logo2 from './Group 43.svg'
import logos from './Group 7.svg'
import phone from './Vector.svg'
import card from './Group 10.svg'
import fullStops from './Group 61.svg'
import Search from './Group 34.svg'
import MapPoin from './Vector (1).svg'
import drop from './Arrow 1.svg'
import img1 from './Vector (2).svg'
import img2 from './Vector (3).svg'
import img3 from './Group 78.svg'
import img4 from './Group 80.svg'
import { Cascader } from 'antd'
import { noop } from 'antd/es/_util/warning'
const options = [
	{
		value: 'Yoqub',
		label: 'Yoqub',
		Cascader:false,
		children: [
			{
				value: 'about',
				label: 'About',
			},
			{
				value: 'sand',
				label: 'Sand',
			},
		],
	},
	{
		value: 'Aliakbar',
		label: 'Aliakbar',
		children: [
			{
				value: 'cotalog',
				label: 'Cotalog',
			},
		]
	},
	{
		value: 'Muhammad',
		label: 'Muhammad',
		children: [
			{
				value: 'card',
				label: 'Card',
			},
			{
				value: '/',
				label: 'Home',
			},
		]
	},
	{
		value: 'Umar',
		label: 'Umar',
		children: [
			{
				value: 'contact',
				label: 'Contact',
			},
			{
				value: 'count',
				label: 'Count',
			},
			{
				value: 'paymate',
				label: 'Paymate',
			},
		]
	}
]

const Layout = () => {
	const navigate = useNavigate()
	const onChange = value => {
		navigate(value[1])
	}
	return (
		<>
			<header className='w-[100%] sticky top-0 px-[10px] md:px-[10%] flex justify-between py-[10px] md:py-[20px]'>
				<div className='flex items-center gap-[14px] md:gap-[40px]'>
					<Link to={'/'}>
						<img
							src={logo}
							className='w-[99.99969482421875px] h-[17.7301082611084px] md:w-[199.9994354248047px] md:h-[35.46011734008789px]'
							alt=''
						/>
					</Link>
					<div className='w-[1px] h-[24.00000000000002px] bg-[#C7C7C7]'></div>
					<p className='text-[#707070] text-[12px] md:text-[18px] '>
						От завода без посредников
					</p>
				</div>
				<div className='flex items-center gap-[40px]'>
					<div className='hidden md:flex items-center gap-[32px]'>
						<Link to={'/sand'}>
							<p className='text-[#0A61DE] text-[18px] '>Доставка</p>
						</Link>
						<Link to={'/paymate'}>
							<p className='text-[#0A61DE] text-[18px] '>Оплата</p>
						</Link>
						<Link to={'/contact'}>
							<p className='text-[#0A61DE] text-[18px] '>Контакты</p>
						</Link>
					</div>
					<Link to={'contact'} className='flex items-center gap-[10px]'>
						<img src={phone} alt='' />
						<p className='text-[#1E2126] hidden md:inline text-[25px] font-[700]'>
							8-800-550-01-09
						</p>
					</Link>
					<img src={card} className='md:inline hidden' alt='' />
				</div>
			</header>
			<nav className='w-[100%] bg-[#EDEDED] px-[10px] md:px-[10%] flex justify-between py-[10px]'>
				<Link to={'/cotalog'}>
					<button className='hidden md:flex bg-[#167FFE] w-[180px] h-[40px] justify-center items-center text-[18px] uppercase gap-[10px] leading-[18px] text-white'>
						<img src={fullStops} alt='' />
						Каталог
					</button>
				</Link>
				<div className='flex h-[40px] w-[100%] md:w-[60%] bg-white'>
					<input
						type='text'
						className='w-[94.5%] border-l border-y-[1px] border-[#C7C7C7] pl-[10px]'
						placeholder='Поиск'
					/>
					<button className='md:w-[5.5%] p-[10px] bg-[#167FFE] text-white'>
						<img src={Search} alt='' />
					</button>
				</div>
				<div className='hidden md:flex items-center gap-[10px]'>
					<img src={MapPoin} alt='' />
					<p className='text-[#1E2126]  font-[400]'>Иркутск</p>
					<Cascader
						size='middle'
						style={{ width: '35px', border: 'none' }}
						options={options}
						expandTrigger='hover'
						onChange={onChange}
					/>
				</div>
			</nav>
			<main>
				<Outlet />
			</main>
			<footer className='bg-[#1E2126] gap-[40px] px-[10%] py-[100px] flex flex-col md:flex-row justify-between'>
				<div className='h-[273px] flex flex-col justify-between'>
					<img src={logo2} alt='' />
					<div className='flex flex-col gap-[20px]'>
						<p className='text-white text-[25px] font-[400]'>8-800-550-01-09</p>
						<p className='text-[#C7C7C7] text-[20px] font-[400] leading-[30px]'>
							postav.irk@mail.ru
						</p>
						<img src={logos} className='w-[70%]' alt='' />
					</div>
					<p className='text-[#707070] text-[20px] font-[400] leading-[30px]'>
						© 2023 все права защищены
					</p>
				</div>
				<div className='h-[1px] md:h-[273px] w-[100%] md:w-[1px] bg-[#707070]'></div>
				<div className='h-[200px] md:h-[273px] flex flex-col justify-between'>
					<h3 className='text-white text-[16px] md:text-[20px] leading-[30px] font-[500]'>
						Информация
					</h3>
					<p className='text-[#C7C7C7] text-[14px] md:text-[18px] font-[400]'>
						Оплата
						<br />
						<br />
						Доставка
						<br />
						<br />
						Политика обработки персональных данных
						<br />
						<br />
						Согласие на обработку персональных данных
					</p>
				</div>
				<div className='h-[220px] md:h-[273px] flex flex-col justify-between'>
					<h3 className='text-white text-[16px] md:text-[20px] leading-[30px] font-[500]'>
						Центральный офис и склад
					</h3>
					<div className='flex gap-[10px] '>
						<div className='flex flex-col justify-between'>
							<img src={img1} className='w-[20px]' alt='' />
							<img src={img2} className='w-[20px]' alt='' />
							<img src={img3} className='w-[20px]' alt='' />
							<img src={img4} className='w-[20px]' alt='' />
						</div>
						<p className='text-[#C7C7C7] text-[14px] md:text-[18px] font-[400]'>
							г. Иркутск ул. Ракитная стр 4 корп 11
							<br />
							<br />
							8-800-550-01-09
							<br />
							<br />
							Режим работы: Пн-Пт с 9:00 до 18:00, Сб с 9:00 до 14:00
							<br />
							<br />
							Региональные склады
						</p>
					</div>
				</div>
			</footer>
		</>
	)
}

export default Layout
