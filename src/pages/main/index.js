import React from 'react'

import thomas from '../../static/images/mem-kot-tom-19.jpg'
import batman from '../../static/images/Batman_0180.jpg'
import * as SC from './styled'


const TITLES = [
  { title: 'Новости и эксклюзивы', img: thomas, theme: '/news' },
  { title: 'Интервью', img: batman, theme: '/interviews' },
  { title: 'Расследования и репортажи', img: batman, theme: '/reports' },
  { title: 'Обвесы', img: thomas, theme: '/breaking' },
  { title: 'Мемы и соцсети', img: thomas, theme: '/memes' },
]


export default function MainPage() {
  return (
    <SC.Wrap>
      <SC.Horizontal rows={2}>
        <SC.Column>
          <SC.Cell to={TITLES[0].theme} key={TITLES[0].index} image={TITLES[0].img}>
            <span>{TITLES[0].title}</span>
          </SC.Cell>
        </SC.Column>
        <SC.Column>
          <SC.Cell to={TITLES[1].theme} key={TITLES[1].index} image={TITLES[1].img}>
            <span>{TITLES[1].title}</span>
          </SC.Cell>
          <SC.Cell to={TITLES[2].theme} key={TITLES[2].index} image={TITLES[2].img}>
            <span>{TITLES[2].title}</span>
          </SC.Cell>
        </SC.Column>
      </SC.Horizontal>
      <SC.Horizontal rows={1}>
        <SC.Cell to={TITLES[3].theme} key={TITLES[3].index} image={TITLES[3].img}>
          <div>
            <span>{TITLES[3].title}</span>
          </div>
        </SC.Cell>
        <SC.Cell to={TITLES[4].theme} key={TITLES[4].index} image={TITLES[4].img}>
          <span>{TITLES[4].title}</span>
        </SC.Cell>
      </SC.Horizontal>
    </SC.Wrap>
  );
}
