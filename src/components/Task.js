import { FaTrash } from 'react-icons/fa'

const Task = ({ task }) => {
  return (
    <div className="task">
      <h3>
        {task.text} <FaTrash style={{ color: 'red', cursor: 'pointer' }} />
      </h3>
      <p>{task.day}</p>
    </div>
  )
}

export default Task
