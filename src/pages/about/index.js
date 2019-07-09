import React from 'react'

// import thomas from '../../static/images/mem-kot-tom-19.jpg'
import photo from '../../static/images/avatar.jpg'
import * as SC from './styled'



export default function AboutMe() {
  return (
    <SC.Page>
      <SC.Wrap>
        <SC.Contacts>
          <span className="name">Николай Чумаков</span>
          <span className="position">редактор</span>
          <span className="phone">Телефон: +7 (999) 624-28-27</span>
          <span className="telegram">Telegram: <a href="https://t.me/stupidtowel">@stupidtowel</a></span>
          <span className="email">Почта: <a href="mailto:chumakov@tjournal.ru?subject=Работа">chumakov@tjournal.ru</a></span>
        </SC.Contacts>
        <SC.Image src={photo} alt="photo"/>
      </SC.Wrap>
      <h2>Опыт работы:</h2>
      <SC.Experience>
        <h3>TJournal</h3>
        <span className="position">Выпускающий редактор</span>
        <span className="additional">
          Январь 2018 - настоящее время, Санкт-Петербург/Москва
        </span>
        <p>
          <h4>Обязанности и задачи:</h4>
          <span>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna
          aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
          in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
          cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </span>
        </p>
      </SC.Experience>
      <SC.Experience>
          <h3>Disgusting Man</h3>
          <span className="position">Выпускающий редактор</span>
          <span className="additional">
            Январь 2018 - настоящее время, Санкт-Петербург/Москва
          </span>
          <p>
            <h4>Обязанности и задачи:</h4>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
              in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </span>
          </p>
        </SC.Experience>
    </SC.Page>
  );
}
