import React, { useState } from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox'
import { Link } from "react-router";

const createData = (description, dateCreated, state) => {
  return { description, dateCreated, state }
}

const initialData = [
  createData('Finish project proposal', '2025-10-06', 'Done'),
  createData('Review pull requests', '2025-10-05', 'Done'),
  createData('Team stand-up meeting', '2025-10-06', 'Not Done'),
  createData('Send client invoice', '2025-10-04', 'Done'),
  createData('Plan sprint backlog', '2025-10-03', 'Not Done'),  
  createData('Finish project proposal', '2025-10-06', 'Done'),
  createData('Review pull requests', '2025-10-05', 'Done'),
  createData('Team stand-up meeting', '2025-10-06', 'Not Done'),
  createData('Send client invoice', '2025-10-04', 'Done'),
  createData('Plan sprint backlog', '2025-10-03', 'Not Done'),
]

export const TodoList = () => {
  const [data, setData] = useState(initialData)

  const handleCheckboxClick = (index) => {
    const newData = [...data]
    newData[index].state = newData[index].state === 'Done' ? 'Not Done' : 'Done'
    setData(newData)
  }

  return (
    <div className="flex flex-col gap-10 items-center justify-center">
      <TableContainer
        component={Paper}
        sx={{ maxWidth: 1200, boxShadow: 1, borderRadius: 2, overflow: scroll, maxHeight: 500 }}
      >
        <Table sx={{ minWidth: 1200 }} aria-label="todo table">
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
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row, id) => {
              const isDone = row.state === 'Done'
              const textClass = isDone ? 'line-through text-gray-500' : ''
              const stateColor = isDone? '!text-green-500' : '!text-gray-500'
              const canEdit = isDone ? 'N/A' : 'Edit'
              return (
                <TableRow
                  key={id}
                  sx={{
                    '&:last-child td, &:last-child th': { border: 0 },
                    '&:hover': { backgroundColor: '#f9fafb' },
                  }}
                >
                  <TableCell className={textClass}>
                    {row.description}
                  </TableCell>
                  <TableCell align="right" className={textClass}>
                    {row.dateCreated}
                  </TableCell>
                  <TableCell align="right" className={`cursor-pointer ${!isDone ? '!text-red-500' : '!text-gray-500'} hover:!text-blue-500`}>
                    <Link to="/add-edit">{canEdit}</Link>
                  </TableCell>
                  <TableCell align="right" className={stateColor}>
                    {row.state}
                  </TableCell>
                  <TableCell>
                    <Checkbox onClick={() => handleCheckboxClick(id)} color={row.state === 'Done' ? 'success' : 'default'} checked={row.state == 'Done'} />
                  </TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <div className='ml-right'>
        <Link to="/add-edit"><Button variant="contained">Add</Button></Link>
      </div>
    </div>
  )
}

export default TodoList
