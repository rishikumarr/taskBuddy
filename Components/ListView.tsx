'use client';

import { useModal } from "@/context/ModalContext";
import Icon from "./Icon";
import Task from "@/utils/taskInterface";
import { useState } from "react";
import formatDate from "./formatDate";
import { useTasks } from "@/context/TasksContext";

interface ListProps{
  taskId: string;
  taskName: string;
  taskDue: string;
  taskStatus: string;
  taskCategory: string;
}

const List = ({taskId, taskName, taskDue, taskStatus, taskCategory}:ListProps) => {
  const {openModal} = useModal();
  const [optionOpen, setOptionOpen] = useState<Boolean>(false);
  const [statusOpen, setStatusOpen] = useState<Boolean>(false);
  const due = formatDate(taskDue);
  const {deleteTask} = useTasks();

  return (
    <li className="flex text-xs items-center gap-2 px-3 py-2 min-h-10 bg-slate-100 border-l border-r border-slate-200" onMouseLeave={()=>{setOptionOpen(false); setStatusOpen(false)}}>
      <div className="flex items-center flex-[2]">
        <input type="checkbox" name="complete-task" aria-label="complete-task"/>
        <span className="w-4 h-4 rounded-full ml-2 md:ml-7 mr-2 border-2 dots before:hidden md:before:inline-block"></span>
        <p className="max-w-full md:max-w-44 lg:max-w-60 text-ellipsis overflow-hidden line-clamp-2 font-medium">
          {taskName}
        </p>
      </div>
      <div className="flex-1 hidden md:block">
        <p>{due}</p>
      </div>
      <div className="flex-1 hidden md:block">
        <div className="relative cursor-pointer" onClick={()=> setStatusOpen(prevState => !prevState)}>
          <span className="px-2.5 py-1.5 bg-slate-300 rounded-sm shadow-inner font-medium text-xs uppercase">
            {taskStatus}
          </span>
          {
            statusOpen && <ul className="absolute bg-white min-w-24 left-0 top-[150%] rounded-md z-[1] border border-slate-300 shadow-lg overflow-hidden fade-in">
              <li className="px-2 py-1.5 flex items-center gap-3 hover:bg-slate-100 select-none uppercase font-medium">
                <span>to-do</span>
              </li>
              <li className="px-2 py-1.5 flex items-center gap-3 hover:bg-slate-100 select-none uppercase font-medium">
                <span>in-progress</span>
              </li>
              <li className="px-2 py-1.5 flex items-center gap-3 hover:bg-slate-100 select-none uppercase font-medium">
                <span>completed</span>
              </li>
            </ul>
          }
        </div>
      </div>
      <div className="flex flex-grow-0 md:flex-1 items-center justify-between">
        <span className="hidden md:inline-block capitalize">{taskCategory}</span>
        <div className="relative mx-1 cursor-pointer border border-slate-100 px-1.5 py-1 rounded-md hover:bg-slate-200 hover:border-slate-300" onClick={()=>setOptionOpen(prevState => !prevState)}>
          <Icon className="w-3 h-3 text-slate-500 hover:text-slate-600">
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
            <li className="px-2 py-1.5 flex items-center gap-3 hover:bg-slate-100 select-none" onClick={()=>openModal('edit', taskId)}>
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
            <li className="px-2 py-1.5 flex items-center gap-3 hover:bg-red-50 select-none" onClick={()=>deleteTask(taskId)}>
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
    </li>
  );
}

const ListView = () => {
  const {tasks} = useTasks();

    const toDos = tasks.filter((task) => task.taskStatus === 'to-do');
    const inProgs = tasks.filter(task => task.taskStatus === 'in-progress');
    const completed = tasks.filter(task => task.taskStatus === 'completed');

    return (
      <div className="task-lists-view relative fade-in">
        <hr className="mt-3" />
        <div className="task-lists-view-header text-xs hidden md:flex px-6 py-3 sticky top-0 bg-white/50 backdrop-blur-md z-[1] rounded-b-xl">
          <span className="flex-[2]">Task name</span>
          <span className="flex-1">Due on</span>
          <span className="flex-1">Task Status</span>
          <span className="flex-1">Task Category</span>
        </div>
        <div className="task-lists flex flex-col gap-3">
          {/* To Do */}
          <div className="task-list rounded-xl shadow-md">
            <div className="task-list-header bg-gradient-to-b from-pink-100 to-pink-200 px-3 py-2 rounded-t-xl flex items-center justify-between border border-b-0 border-pink-300">
              <p className="text-sm font-medium text-pink-900">
                Todo (<span>{toDos.length}</span>)
              </p>
              <Icon className="w-3 h-3 text-pink-800 hover:text-pink-900 cursor-pointer m-1">
                <svg
                  className="w-full h-full"
                  viewBox="0 0 16 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M7.99989 0.750113C7.61589 0.750113 7.23189 0.897113 6.93939 1.18961L0.939387 7.18961C0.352887 7.77611 0.352887 8.72411 0.939387 9.31061C1.52589 9.89711 2.47389 9.89711 3.06039 9.31061L8.01789 4.35311L12.9574 9.12311C13.5559 9.69761 14.5024 9.68111 15.0784 9.08561C15.6544 8.49011 15.6379 7.53911 15.0424 6.96461L9.04239 1.17161C8.74989 0.889613 8.37489 0.750113 7.99989 0.750113Z"
                    fill="currentColor"
                  />
                </svg>
              </Icon>
            </div>
            <div className="todos">
              <ul className="todo">
                {
                  toDos.length > 0 ? toDos.map((todo, index) => {
                    const {_id, taskName, due, taskStatus, category} = todo;

                    return <List key={index} taskId={_id} taskName={taskName} taskDue={due} taskStatus={taskStatus} taskCategory={category}/>
                  }) : <div className="min-h-32 border border-slate-300 rounded-b-xl flex items-center justify-center">
                    <p className="text-sm">No Tasks in To Do</p>
                  </div>
                }
              </ul>
            </div>
          </div>
          {/* In Progress */}
          <div className="task-list rounded-xl shadow-md">
            <div className="task-list-header bg-gradient-to-br from-blue-100 to-blue-300 border border-b-0 border-blue-300 px-3 py-2 rounded-t-xl flex items-center justify-between">
              <p className="text-sm font-medium text-blue-900">
                In-Progress (<span>{inProgs.length}</span>)
              </p>
              <Icon className="w-3 h-3 text-blue-800 hover:text-blue-900 cursor-pointer m-1">
                <svg
                  className="w-full h-full"
                  viewBox="0 0 16 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M7.99989 0.750113C7.61589 0.750113 7.23189 0.897113 6.93939 1.18961L0.939387 7.18961C0.352887 7.77611 0.352887 8.72411 0.939387 9.31061C1.52589 9.89711 2.47389 9.89711 3.06039 9.31061L8.01789 4.35311L12.9574 9.12311C13.5559 9.69761 14.5024 9.68111 15.0784 9.08561C15.6544 8.49011 15.6379 7.53911 15.0424 6.96461L9.04239 1.17161C8.74989 0.889613 8.37489 0.750113 7.99989 0.750113Z"
                    fill="currentColor"
                  />
                </svg>
              </Icon>
            </div>
            <div className="todos">
              <ul className="todo">
                {
                  inProgs.length > 0 ? inProgs.map((todo, index) => {
                    const {_id, taskName, due, taskStatus, category} = todo;

                    return <List key={index} taskId={_id} taskName={taskName} taskDue={due} taskStatus={taskStatus} taskCategory={category}/>
                  }) : <div className="min-h-32 border border-slate-300 rounded-b-xl flex items-center justify-center">
                  <p className="text-sm">No Tasks In Progress</p>
                </div>
                }
              </ul>
            </div>
          </div>
          {/* Completed */}
          <div className="task-list rounded-xl shadow-md">
            <div className="task-list-header bg-gradient-to-br from-green-200 to-green-300 border border-green-300 px-3 py-2 rounded-t-xl flex items-center justify-between">
              <p className="text-sm font-medium text-green-900">
                Completed (<span>{completed.length}</span>)
              </p>
              <Icon className="w-3 h-3 text-green-800 hover:text-green-900 cursor-pointer m-1">
                <svg
                  className="w-full h-full"
                  viewBox="0 0 16 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M7.99989 0.750113C7.61589 0.750113 7.23189 0.897113 6.93939 1.18961L0.939387 7.18961C0.352887 7.77611 0.352887 8.72411 0.939387 9.31061C1.52589 9.89711 2.47389 9.89711 3.06039 9.31061L8.01789 4.35311L12.9574 9.12311C13.5559 9.69761 14.5024 9.68111 15.0784 9.08561C15.6544 8.49011 15.6379 7.53911 15.0424 6.96461L9.04239 1.17161C8.74989 0.889613 8.37489 0.750113 7.99989 0.750113Z"
                    fill="currentColor"
                  />
                </svg>
              </Icon>
            </div>
            <div className="todos">
              <ul className="todo">
                {
                  completed.length > 0 ? completed.map((todo, index) => {
                    const {_id, taskName, due, taskStatus, category} = todo;

                    return <List key={index} taskId={_id} taskName={taskName} taskDue={due} taskStatus={taskStatus} taskCategory={category}/>
                  }) : <div className="min-h-32 border border-slate-300 rounded-b-xl flex items-center justify-center">
                  <p className="text-sm">No Tasks in Completed</p>
                </div>
                }
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
};

export default ListView;