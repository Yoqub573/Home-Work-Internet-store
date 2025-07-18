import React from 'react'
import s1 from './suratoUmar/s1.png'
import s2 from './suratoUmar/s2.png'
import s3 from './suratoUmar/s3.png'
import s4 from './suratoUmar/s4.png'
import s5 from './suratoUmar/s5.png'
import s6 from './suratoUmar/s6.png'
import s7 from './suratoUmar/s7.png'
import s8 from './suratoUmar/s8.png'
import s9 from './suratoUmar/s9.png'
import s10 from './suratoUmar/s10.png'
const Count = () => {
  return (
	 <div className='sm:p-[100px] p-[10px]'>

    <div className='w-full m-auto justify-between flex-col sm:flex-row  flex items-center'>
<p className='text-[50px]'>Стоимость услуг</p>
<div className='flex flex-col sm:flex-row items-center gap-[20px]'>
  <p className='w-[200px] border h-[50px] flex items-center text-[#707070] text-[18px] justify-center border-[#C7C7C7]'>Правила доставки</p>
  <p className='w-[200px] border h-[50px] flex items-center text-[#1D6BDD] text-[18px] justify-center border-[#1D6BDD]'>Стоимость услуг</p>
</div>
    </div>

<p className='text-[20px] font-[700] my-[30px]'>Стоимость доставки по г. Иркутску, в г. Ангарск,в г. Шелехов.</p>
<div className='flex sm:flex-row flex-col items-start sm:gap-0 gap-[30px] justify-between'>



<article className='flex  sm:w-[647px] sm:h-[550px] flex-col items-start justify-between'>
<p  className='text-[#707070]'>Доставка в Свердловский район ------------------------------------------------------------------------------------------800 ₽</p>
<p  className='text-[#707070]'>Доставка в Октябрьский ------------------------------------------------------------------------------------------1800 ₽</p>
<p  className='text-[#707070]'>Доставка во 2-й Иркутск, Ново-Ленино, Рабочее, предместье Марата -----------------------------800 ₽</p>
<p  className='text-[#707070]'>Доставка в отдаленные районы города ------------------------------------------------------------------------------------900 ₽</p>
<p  className='text-[#707070]'>Доставка до транспортных компаний (в пределах г. Иркутска) -----------------------------------------1200 ₽</p>
<p  className='text-[#707070]'>Доставка 5 тонным кран-бортом по городу и пригороду ----------------------------------------800 ₽</p>
<p  className='text-[#707070]'>Доставка в г. Ангарск ------------------------------------------------------------------------------------------800 ₽</p>
<p  className='text-[#707070]'>Доставка в г. Шелехов ------------------------------------------------------------------------------------------700 ₽</p>
<p  className='text-[#707070]'>Доставка до с. Хомутово ------------------------------------------------------------------------------------------500 ₽</p>
<p  className='text-[#707070]'>Доставка в Свердловский район ------------------------------------------------------------------------------------------1800 ₽</p>
<p  className='text-[#707070]'>Доставка в Свердловский район --------------------------------------------------------------------------------------950 ₽</p>
<p  className='text-[#707070]'>Доставка в Свердловский район ------------------------------------------------------------------------------------------800 ₽</p>
<p  className='text-[#707070]'>Доставка в Свердловский район ------------------------------------------------------------------------------------------800 ₽</p>

</article>
<img src={s10} alt="" />






</div>


   </div>
  )
}

export default Count