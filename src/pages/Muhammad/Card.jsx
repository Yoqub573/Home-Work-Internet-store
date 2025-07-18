import React from 'react';
import qrIcon from './img/Group 148.png'
import group149 from './img/Group 149.png'
import group150 from './img/Group 150.png'
import './card.css'
const Card = () => {
  return (
    <div className="payment-container">
      <nav className="breadcrumb">
        <span>Главная</span>
        <span className="breadcrumb-dot">▪</span>
        <span>Оплата</span>
      </nav>

      <h1 className="payment-title">Оплата</h1>

      <div className="payment-content">

        <div className="payment-options">
          <div className="payment-option">
            <img src={qrIcon} alt="QR код" className="payment-icon" />
            <div>
              <p className="payment-option-title">QR-кодом</p>
              <p className="payment-option-desc">
                Оплата моментально поступает на счёт продавца и позволяет избежать кассовых разрывов.
              </p>
            </div>
          </div>

          <div className="payment-option">
            <img src={group149} alt="Наличные" className="payment-icon" />
            <div>
              <p className="payment-option-title">Наличными</p>
              <p className="payment-option-desc">
                Прямая передача денег продавцу «из рук в руки».
              </p>
            </div>
          </div>

          <div className="payment-option">
            <img src={group150} alt="Безналичный расчет" className="payment-icon" />
            <div>
              <p className="payment-option-title">Безналичный расчет</p>
              <p className="payment-option-desc">
                Перевод осуществляется на основании указанных в реквизитах данных организации.
              </p>
            </div>
          </div>
        </div>

        <div className="payment-texts">
          <p>
            Мы любим животных и стараемся поддерживать тех из них, кому не посчастливилось иметь ласковых хозяев и тёплый кров. Один из проверенных способов это сделать — помочь благотворительному фонду «Луч Добра». Благодаря их труду ежегодно сотни питомцев находят свой новый дом.
          </p>

          <p>
            Противоположная точка зрения подразумевает, что независимые государства лишь добавляют фракционных разногласий и представлены
          </p>
        </div>

        <div className="payment-details">
          <p><strong>Платежные реквизиты:</strong></p>
          <p>ООО "Поставщик"</p>
          <p>ИНН 7713522570 / КПП 771301001</p>
          <p>Расчетный счет № 40702810400180000662</p>
          <p>ОАО «ОТП банк» г. Москва</p>
          <p>Кор. Счет № 30101810000000000311</p>
          <p>БИК 044525311.</p>
        </div>

      </div>
    </div>
  );
};

export default Card;
