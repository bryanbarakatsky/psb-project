import React from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import Button from '@mui/material/Button';

const createData = (description, dateCreated, action, state) => {
  return { description, dateCreated, action, state }
}

const data = [
  createData('Finish project proposal', '2025-10-06', 'Edit', 'Done'),
  createData('Review pull requests', '2025-10-05', 'Edit', 'Done'),
  createData('Team stand-up meeting', '2025-10-06', 'Edit', 'Not Done'),
  createData('Send client invoice', '2025-10-04', 'Edit', 'Done'),
  createData('Plan sprint backlog', '2025-10-03', 'Edit', 'Not Done'),
]

export const TodoPage = () => {
  return (
    <div className="flex flex-col gap-10 items-center justify-center min-h-screen bg-gray-50">
      <TableContainer
        component={Paper}
        sx={{ maxWidth: 800, boxShadow: 3, borderRadius: 2 }}
      >
        <Table sx={{ minWidth: 650 }} aria-label="todo table">
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
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row, id) => {
              const isDone = row.state === 'Done'
              const textClass = isDone ? 'line-through text-gray-500' : ''
              const stateColor = isDone? '!text-green-200' : '!text-gray-200'
              return (
                <TableRow
                  key={id}
                  sx={{
                    '&:last-child td, &:last-child th': { border: 0 },
                    '&:hover': { backgroundColor: '#f9fafb' },
                  }}
                >
                  <TableCell component="th" scope="row" className={textClass}>
                    {row.description}
                  </TableCell>
                  <TableCell align="right" className={textClass}>
                    {row.dateCreated}
                  </TableCell>
                  <TableCell align="right" className='cursor-pointer !text-red-200 hover:!text-blue-200'>
                    {row.action}
                  </TableCell>
                  <TableCell align="right" className={`${stateColor} ${textClass}`}>
                    {row.state}
                  </TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <div className='ml-right'>
        <Button variant="contained">Add</Button>
      </div>
    </div>
  )
}

export default TodoPage
