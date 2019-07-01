import React from 'react'

// import thomas from '../../static/images/mem-kot-tom-19.jpg'
import photo from '../../static/images/avatar.jpg'
import * as SC from './styled'



export default function AboutMe() {
  return (
    <React.Fragment>
      <SC.Wrap>
        <SC.Contacts>
          <span>Николай Чумаков</span>
          <span>редактор</span>
          <span>Телефон: +7 (999) 624-28-27</span>
          <span>Telegram: <a href="https://t.me/stupidtowel">@stupidtowel</a></span>
          <span>Почта: <a href="mailto:chumakov@tjournal.ru?subject=Работа">chumakov@tjournal.ru</a></span>
        </SC.Contacts>
        <SC.Image src={photo} alt="photo"/>
      </SC.Wrap>
      <h2>Опыт работы</h2>
      <SC.Experience>
        <h3>
          Местро: <span>Должность</span>
        </h3>
        <span>
          Информация про должность, местро, даты, что захочешь
        </span>
        <p>
          <span>Обязанности и задачи</span>\n
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna
          aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
          in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
          cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </SC.Experience>
    </React.Fragment>
  );
}
