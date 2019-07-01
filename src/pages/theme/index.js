import React from 'react'

import { THEMES } from '../../sources'
import * as SC from './styled'


export default function MainPage({ match }) {
  const { theme } = match.params
  const info = THEMES[theme]

  if (!info) {
    return (
      <div>Такой инфы нет, соси бибу!</div>
    )
  }

  return (
    <React.Fragment>
      {info.map(({ url, views, links, additional }) => (
        <SC.ArticleWrap href={url} target="_blank" rel="noreferrer noopener">
          <h2>{url}</h2>
          {views && <span>Просмотры: {views}к</span>}
          {links && <span>Количество ссылок в СМИ: {links}</span>}
          {additional && <span>{additional}</span>}
        </SC.ArticleWrap>
      ))}
    </React.Fragment>
  );
}
