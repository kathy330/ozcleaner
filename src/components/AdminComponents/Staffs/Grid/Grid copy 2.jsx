/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable max-len */
import React from 'react'
import 'antd/dist/antd.css'
import { Card } from 'antd'


export default function StickyHeadTable() {

  return(
    <div>
      <Card title="Default size card" style={{ width: 300 }}>
        <p>Card content</p>
      </Card>

      <Card title="Default size card" style={{ width: 300 }}>
        <p>Card content</p>
      </Card>

      <Card title="Default size card" style={{ width: 300 }}>
        <p>Card content &nbsp; &nbsp; email</p>
        <p>Card content &nbsp; &nbsp; email</p>
        <p>Card content &nbsp; &nbsp; email</p>
        <p>Card content &nbsp; &nbsp; email</p>
        <p>Card content &nbsp; &nbsp; email</p>
        <p>Card content &nbsp; &nbsp; email</p>
      </Card>

    </div>

  )}
