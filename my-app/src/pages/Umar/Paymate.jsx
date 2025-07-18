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
const Paymate = () => {
  return (
	 <div className='sm:p-[100px] p-[10px]'>
    
    <section className='w-full sm:h-[280px] sm:flex-row flex flex-col gap-[20px] sm:gap-0 items-start justify-between '>
<article className='sm:w-[836px] sm:h-[280px] flex flex-col items-start justify-between'>
<div className='flex items-center gap-[20px]'>
  <img src={s7} alt="" />
  <div>
<p className='text-[20px] font-[700]'>QR-кодом</p>
<p className='text-[#707070]'>Оплата моментально поступает на счёт продавца и позволяет избежать кассовых разрывов.</p>
  </div>
</div>
<div className='flex items-center gap-[20px]'>
  <img src={s8} alt="" />
  <div>
<p className='text-[20px] font-[700]'>Наличными</p>
<p className='text-[#707070]'>Прямая передача денег продавцу «из рук в руки».</p>
  </div>
</div>
<div className='flex items-center gap-[20px]'>
  <img src={s9} alt="" />
  <div>
<p className='text-[20px] font-[700]'>Безналичный расчет </p>
<p className='text-[#707070]'>Перевод осуществляется на основании указанных в реквизитах данных организации.</p>
  </div>
</div>
</article>


<article className='flex flex-col items-start justify-between sm:w-[291px] sm:h-[280px]'>
<p className='text-[20px] font-[700]'>Платежные реквизиты:
</p><br />
<p className='text-[#707070]'>ООО "Поставщик" <br /> <br />

ИНН 7713522570 / КПП 771301001 <br /><br />

Расчетный счет № 40702810400180000662 <br /><br />

ОАО «Отп банк» г. Москва <br /><br />

Кор. Счет № 30101810000000000311 <br />

БИК 044525311.</p>
</article>

    </section>

   </div>
  )
}

export default Paymate