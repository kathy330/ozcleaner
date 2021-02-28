import React from 'react'
import style from '../scss/Admin.module.scss'

export default function Location() {
  return (
    <div>
      <div>Icon</div>
      <div>LOCATION</div>
      <div>Unit 302, 27 Buchanan Street, West End, QLD 4101</div>
      <hr className={style.hrs} />
    </div>
  )
}
