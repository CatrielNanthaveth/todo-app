import React from 'react'
import { Card } from 'antd';

export const MainContainer = ({ children }) => {
  return (
    <div className='main-container'>
      <Card
        title="Lista de tareas"
        className='card'
      >
        {children}
      </Card>
    </div>
  )
}
