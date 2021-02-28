import React from 'react'
import style from '../scss/Admin.module.scss'

export default function CreatBy() {
  return (
    <div>
      <div>
        Portrait
      </div>
      <div>
        CREATED BY
      </div>
      <div>
        Name
      </div>
      <div>
        Modified Time
      </div>
      <hr className={style.hrs} />
    </div>
  )
}
