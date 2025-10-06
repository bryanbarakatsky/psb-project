import React, { useState } from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import Button from '@mui/material/Button'
import Checkbox from '@mui/material/Checkbox'
import { Link } from 'react-router'
import { initialData } from '../data/todoData'

export const TodoList = () => {
  const [data, setData] = useState(initialData)

  const handleCheckboxClick = (index) => {
    const newData = data.map((item, i) =>
      i === index ? { ...item, todoCompleted: !item.todoCompleted } : item
    )
    setData(newData)
  }

  const formatDate = (isoString) => {
    const date = new Date(isoString)
    return isNaN(date) ? 'Invalid date' : date.toLocaleString()
  }

  return (
    <div className="flex flex-col gap-10 items-center justify-center">
      <TableContainer
        component={Paper}
        sx={{
          maxWidth: 1200,
          boxShadow: 1,
          borderRadius: 2,
          overflowY: 'auto',
          maxHeight: 500,
        }}
      >
        <Table sx={{ minWidth: 1200 }} stickyHeader aria-label="todo table">
          <TableHead>
            <TableRow sx={{ backgroundColor: '#f3f4f6' }}>
              <TableCell sx={{ fontWeight: 'bold' }}>Description</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }} align="right">
                Date Created
              </TableCell>
              <TableCell sx={{ fontWeight: 'bold' }} align="right">
                Action
              </TableCell>
              <TableCell sx={{ fontWeight: 'bold' }} align="right">
                Status
              </TableCell>
              <TableCell />
            </TableRow>
          </TableHead>

          <TableBody>
            {data.map((row, id) => {
              const isDone = row.todoCompleted
              const textClass = isDone ? 'line-through text-gray-500' : ''
              const stateColor = isDone ? '!text-green-500' : '!text-gray-500'
              const canEdit = isDone ? 'N/A' : 'Edit'

              return (
                <TableRow
                  key={row._id}
                  sx={{
                    '&:last-child td, &:last-child th': { border: 0 },
                    '&:hover': { backgroundColor: '#f9fafb' },
                  }}
                >
                  <TableCell className={textClass}>
                    {row.todoDescription || '(No description)'}
                  </TableCell>

                  <TableCell align="right" className={textClass}>
                    {formatDate(row.todoDateCreated)}
                  </TableCell>

                  <TableCell
                    align="right"
                    className={`${
                      !isDone ? '!text-red-500 cursor-pointer' : '!text-gray-400'
                    } hover:!text-blue-500`}
                  >
                    {!isDone ? <Link state={{ todo: row }} to="/add-edit">{canEdit}</Link> : 'N/A'}
                  </TableCell>

                  <TableCell align="right" className={stateColor}>
                    {isDone ? 'Done' : 'Not Done'}
                  </TableCell>

                  <TableCell>
                    <Checkbox
                      onClick={() => handleCheckboxClick(id)}
                      color={isDone ? 'success' : 'default'}
                      checked={isDone}
                    />
                  </TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </TableContainer>

      <div>
        <Link to="/add-edit">
          <Button variant="contained">Add</Button>
        </Link>
      </div>
    </div>
  )
}

export default TodoList
