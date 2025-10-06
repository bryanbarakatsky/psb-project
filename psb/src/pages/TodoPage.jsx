import React from 'react'
import Layout from '../components/Layout'
import Table from '../components/TodoList'

export const TodoPage = () => {
  return (
    <div>
        <Layout>
            <Table />
        </Layout>
    </div>
  )
}

export default TodoPage
