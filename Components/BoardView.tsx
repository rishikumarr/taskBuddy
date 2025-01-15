import { useState } from "react";
import Icon from "./Icon";
import Task from "@/utils/taskInterface";
import { useModal } from "@/context/ModalContext";
import formatDate from "./formatDate";
import { useTasks } from "@/context/TasksContext";

interface BoardListProps {
  taskId: string;
  taskName: string;
  taskDue: string;
  taskStatus: string;
  taskCategory: string;
}

const BoardList = ({taskId, taskName, taskDue, taskStatus, taskCategory}:BoardListProps) => {
  const { openModal } = useModal();
  const [optionOpen, setOptionOpen] = useState<Boolean>(false);
  const due = formatDate(taskDue);
  const {deleteTask} = useTasks();

  return (
    <div className="task-board-sub-tsk bg-white border border-slate-200 px-3 py-2 flex flex-col min-h-24 rounded-md" onMouseLeave={()=>setOptionOpen(false)}>
    <div className="flex-1 flex justify-between gap-1">
      <p className={`text-sm text-slate-800 font-medium flex-1 line-clamp-2 max-w-52 text-ellipsis overflow-hidden ${taskStatus === 'completed' && 'line-through'}`}>
        {taskName}
      </p>
      <div className="relative w-7 h-6 cursor-pointer my-1 border bg-slate-50 border-slate-100 px-1.5 py-0.5 rounded-md hover:bg-slate-100 hover:border-slate-300" onClick={()=> setOptionOpen(prevState => !prevState)}>
        <Icon className="w-full h-full text-slate-500 hover:text-slate-600">
          <svg
            className="w-full h-full"
            viewBox="0 0 12 4"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0 1.99984C0 1.26384 0.597333 0.666504 1.33333 0.666504C2.06933 0.666504 2.66667 1.26384 2.66667 1.99984C2.66667 2.73584 2.06933 3.33317 1.33333 3.33317C0.597333 3.33317 0 2.73584 0 1.99984ZM6 0.666504C5.264 0.666504 4.66667 1.26384 4.66667 1.99984C4.66667 2.73584 5.264 3.33317 6 3.33317C6.736 3.33317 7.33333 2.73584 7.33333 1.99984C7.33333 1.26384 6.736 0.666504 6 0.666504ZM10.6667 0.666504C9.93067 0.666504 9.33333 1.26384 9.33333 1.99984C9.33333 2.73584 9.93067 3.33317 10.6667 3.33317C11.4027 3.33317 12 2.73584 12 1.99984C12 1.26384 11.4027 0.666504 10.6667 0.666504Z"
              fill="currentColor"
            />
          </svg>
        </Icon>
        {
          optionOpen && <ul className="absolute bg-white min-w-24 right-0 top-[120%] rounded-md z-[1] border border-slate-300 shadow-lg overflow-hidden fade-in">
              <li className="px-2 py-1.5 flex items-center gap-3 hover:bg-slate-100 select-none text-xs font-medium"  onClick={()=>openModal('edit', taskId)}>
                <Icon className="w-3 h-3 text-slate-600">
                  <svg
                    className="w-full h-full"
                    viewBox="0 0 12 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M9.97708 3.48595L8.18108 1.68995L6.88242 2.98928L8.67908 4.78595L9.97708 3.48595ZM1.39375 10.9973C1.37375 10.9993 1.35375 10.9999 1.33375 10.9999C1.15775 10.9999 0.98775 10.9306 0.86175 10.8046C0.722417 10.6646 0.65175 10.4699 0.669083 10.2733L0.92175 7.49328C0.94975 7.18861 1.08442 6.90061 1.30175 6.68395L7.29908 0.686613C7.76708 0.216613 8.61575 0.239946 9.10975 0.732613L10.9351 2.55795L10.9358 2.55861C11.4458 3.06928 11.4664 3.88128 10.9811 4.36795L4.98308 10.3659C4.76642 10.5826 4.47908 10.7173 4.17375 10.7453L1.39375 10.9973ZM1.33342 12.3335H10.6667C11.0334 12.3335 11.3334 12.6335 11.3334 13.0001C11.3334 13.3668 11.0334 13.6668 10.6667 13.6668H1.33342C0.96675 13.6668 0.66675 13.3668 0.66675 13.0001C0.66675 12.6335 0.96675 12.3335 1.33342 12.3335Z"
                      fill="currentColor"
                    />
                  </svg>
                </Icon>
                <span>Edit</span>
              </li>
              <li className="px-2 py-1.5 flex items-center gap-3 hover:bg-red-50 select-none text-xs font-medium" onClick={()=>deleteTask(taskId)}>
                <Icon className="w-3 h-3 text-red-400">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M9.66658 9.66683C9.66658 10.0335 9.36659 10.3335 8.99992 10.3335C8.63325 10.3335 8.33325 10.0335 8.33325 9.66683V7.00016C8.33325 6.6335 8.63325 6.3335 8.99992 6.3335C9.36659 6.3335 9.66658 6.6335 9.66658 7.00016V9.66683ZM5.66659 1.8855C5.66659 1.78216 5.80925 1.66683 5.99992 1.66683H7.99992C8.19059 1.66683 8.33325 1.78216 8.33325 1.8855V3.00016H5.66659V1.8855ZM5.66659 9.66683C5.66659 10.0335 5.36659 10.3335 4.99992 10.3335C4.63325 10.3335 4.33325 10.0335 4.33325 9.66683V7.00016C4.33325 6.6335 4.63325 6.3335 4.99992 6.3335C5.36659 6.3335 5.66659 6.6335 5.66659 7.00016V9.66683ZM12.9999 3.00016H12.3333H9.66658V1.8855C9.66658 1.0295 8.91925 0.333496 7.99992 0.333496H5.99992C5.08059 0.333496 4.33325 1.0295 4.33325 1.8855V3.00016H1.66659H0.999919C0.633252 3.00016 0.333252 3.30016 0.333252 3.66683C0.333252 4.0335 0.633252 4.3335 0.999919 4.3335H1.66659V11.6668C1.66659 12.7695 2.56392 13.6668 3.66658 13.6668H10.3333C11.4359 13.6668 12.3333 12.7695 12.3333 11.6668V4.3335H12.9999C13.3666 4.3335 13.6666 4.0335 13.6666 3.66683C13.6666 3.30016 13.3666 3.00016 12.9999 3.00016Z"
                      fill="currentColor"
                    />
                  </svg>
                </Icon>
                <span className="text-red-700">Delete</span>
              </li>
            </ul>
        }
      </div>
    </div>
    <div className="flex justify-between text-xs text-slate-400 font-medium">
      <span className="capitalize">{taskCategory}</span>
      <span>{due}</span>
    </div>
  </div>
  );
}

interface BoardViewProps{
  tasks: Task[]
}

const BoardView = () => {
  const {tasks} = useTasks();
  const toDos = tasks.filter(task => task.taskStatus === 'to-do');
    const inProgs = tasks.filter(task => task.taskStatus === 'in-progress');
    const completed = tasks.filter(task => task.taskStatus === 'completed');
    return (
      <div className="task-boards-view mt-3 fade-in">
        <div className="task-boards flex gap-2 w-full min-h-full h-full">
          <div className="task-board border p-2 bg-slate-100 rounded-lg w-full min-w-52 max-w-80 flex-1 flex flex-col gap-3">
            <span className="w-fit text-xs font-semibold px-2.5 py-1 rounded-md bg-gradient-to-br from-pink-200 to-pink-300 border border-pink-300">
              TO-DO
            </span>
            <div className="task-board-sub-tsks flex flex-col gap-2">
              {
                toDos.length > 0 ? toDos.map((todo,index) => {
                  const {_id, taskName, due, taskStatus, category} = todo;

                  return <BoardList key={index} taskId={_id} taskName={taskName} taskDue={due} taskStatus={taskStatus} taskCategory={category}/>
                }) : <div className="min-h-52 bg-white rounded-lg border border-slate-200 flex items-center justify-center"><p className="text-sm">No Tasks in To Do</p></div>
              }
            </div>
          </div>
          <div className="task-board border p-2 bg-slate-100 rounded-lg w-full min-w-52 max-w-80 flex-1 flex flex-col gap-3">
            <span className="w-fit text-xs font-semibold px-2.5 py-1 rounded-md bg-gradient-to-br from-blue-100 to-blue-300 border border-blue-300">
              IN-PROGRESS
            </span>
            <div className="task-board-sub-tsks flex flex-col gap-2">
              {
                inProgs.length > 0 ? inProgs.map((todo,index) => {
                  const {_id, taskName, due, taskStatus, category} = todo;

                  return <BoardList key={index} taskId={_id} taskName={taskName} taskDue={due} taskStatus={taskStatus} taskCategory={category}/>
                }) : <div className="min-h-52 bg-white rounded-lg border border-slate-200 flex items-center justify-center"><p className="text-sm">No Tasks In Progress</p></div>
              }
            </div>
          </div>
          <div className="task-board border p-2 bg-slate-100 rounded-lg w-full min-w-52 max-w-80 flex-1 flex flex-col gap-3">
            <span className="w-fit text-xs font-semibold px-2.5 py-1 rounded-md bg-gradient-to-br from-green-200 to-green-300 border border-green-300">
              COMPLETED
            </span>
            <div className="task-board-sub-tsks flex flex-col gap-2">
              {
                completed.length > 0 ? completed.map((todo,index) => {
                  const {_id, taskName, due, taskStatus, category} = todo;

                  return <BoardList key={index} taskId={_id} taskName={taskName} taskDue={due} taskStatus={taskStatus} taskCategory={category}/>
                }) : <div className="min-h-52 bg-white rounded-lg border border-slate-200 flex items-center justify-center"><p className="text-sm">No Tasks in Completed</p></div>
              }
            </div>
          </div>
        </div>
      </div>
    );
};

export default BoardView;