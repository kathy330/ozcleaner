/* eslint-disable no-lone-blocks */
/* eslint-disable react/no-render-return-value */
/* eslint-disable max-len */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

import 'antd/dist/antd.css'
import { Table, Tag, Space } from 'antd'

const columns = [

  {
    title: 'Order ID',
    dataIndex: 'oid',
    key: 'oid',

   
  },
  {
    title: 'Status',
    key: 'status',
    dataIndex: 'status',
    render: status => (
      <>
        {status.map(tag => {

          let color = 'green'
          if (tag === 'Completed') {
            color = '#999999'
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          )
        })}
      </>
    ),

  },
  {
    title: 'Customers',
    dataIndex: 'cname',
    key: 'cname',
    render: text => <a>{text}</a>,

  },
  {
    title: 'Created At',
    dataIndex: 'date',
    key: 'date',
  },
  {
    title: 'Action',
    key: 'action',
    render: () => (
      <Space size="middle">
        <a>Check</a>
        <a>Delete</a>
      </Space>
    ),
  },
]

const data = [
  {
    key: '1',
    oid: '011111111',
    date: '11:30AM 23 Jan 2021',
    cname: 'John Brown',
    status: ['In progress'],
  },
  {
    key: '2',
    oid: '022222222',
    date: '11:30AM 23 Jan 2021',
    cname: 'Jim Green',
    status: ['In progress'],
  },
  {
    key: '3',
    oid: '03333333',
    date: '11:30AM 23 Jan 2021',
    cname: 'Joe Black',
    status: ['Completed'],
  },
]


export default function StickyHeadTable() {

  return(

    <Table
      scroll={{ x: true }}
      columns={columns} 
      pagination={{ position: ['bottomCenter'] }}
      dataSource={data}
    />

    
  )
}

