import { useTasks } from "@/context/TasksContext";
import Icon from "./Icon";
import Modal from "./Modal";
import { useState, useEffect } from "react";

interface EditTaskProps {
  closeModal: () => void;
  taskId: string | null;
}

const EditTask = ({closeModal, taskId}:EditTaskProps) => {
  const { fetchTaskById, editTask } = useTasks();

  const [task, setTask] = useState({});

  const [category, setCategory] = useState();

  const [isValidTask, setIsValidTask] = useState<boolean>(false);

  const [showDetails, setShowDetails] = useState<boolean>(true);

  const handleDueDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    const dueDateString = e.target.value;

    setTask((prevState) => {
      return {...prevState, due: dueDateString}
    })
  }

  const handleTextInputs = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;

    if(name === 'title'){
      setTask((prevState) => {
        return {...prevState, taskName: value}
      })
    }
    else if(name === 'description'){
      setTask((prevState) => {
        return {...prevState, description: value}
      })
    }
  }

  const handleStatus = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;

    setTask((prevState) => {
      return {...prevState, taskStatus: value}
    })
  }

  const handleUpdate = () => {
    if(isValidTask) {
      editTask(task, task.taskId);
    };
  }

  useEffect(() => {
    if(task){
      const {taskName, description, due, taskStatus, category, userId, taskId} = task;
  
      if(taskName && description && due && taskStatus && category && userId && taskId){
        setIsValidTask(true);
      }
      else{
        setIsValidTask(false);
      }
    }
  }, [task]);

  useEffect(()=>{
    setTask((prevState) => {
      return {...prevState, category: category}
    })
  }, [category])

  useEffect(() => {
    const fetchTask = async () => {
      if(taskId){
        const task = await fetchTaskById(taskId);
  
        const truncatedTask = {taskName:task.taskName, description: task.description, category: task.category, due: task.due, taskStatus: task.taskStatus, userId:task.userId, taskId: task._id}
        
        setTask(truncatedTask);
        setCategory(truncatedTask.category);
      }
    }

    fetchTask();
  }, [taskId])

    return (
      task && 
      <Modal>
        <div className="w-full min-w-80 max-w-[60rem] min-h-[40vh] bg-white mx-0 sm:mx-6 shadow-xl rounded-t-xl sm:rounded-xl flex flex-col overflow-hidden fade-in" onClick={(e)=>e.stopPropagation()}>
          <div className="task-modal-header bg-slate-100 px-4 sm:px-6 py-3 flex justify-between items-center min-h-12 sm:min-h-16 border-b border-b-slate-200 transition-all relative">
            <h3 className="text-base sm:text-xl font-semibold bg-gradient-to-b from-[rgb(30,32,34)] to-[rgb(131,131,131)] text-transparent bg-clip-text">
              Edit Task
            </h3>
            <button className="text-slate-600 hover:text-slate-800 cursor-pointer z-10" onClick={closeModal}>
              <Icon className="w-3 h-3">
                <svg
                  className="w-full h-full"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M7.41413 6.00001L11.7071 1.70701C12.0981 1.31601 12.0981 0.684006 11.7071 0.293006C11.3161 -0.0979941 10.6841 -0.0979941 10.2931 0.293006L6.00013 4.58601L1.70713 0.293006C1.31613 -0.0979941 0.684128 -0.0979941 0.293128 0.293006C-0.0978721 0.684006 -0.0978721 1.31601 0.293128 1.70701L4.58613 6.00001L0.293128 10.293C-0.0978721 10.684 -0.0978721 11.316 0.293128 11.707C0.488128 11.902 0.744128 12 1.00013 12C1.25613 12 1.51213 11.902 1.70713 11.707L6.00013 7.41401L10.2931 11.707C10.4881 11.902 10.7441 12 11.0001 12C11.2561 12 11.5121 11.902 11.7071 11.707C12.0981 11.316 12.0981 10.684 11.7071 10.293L7.41413 6.00001Z"
                    fill="currentColor"
                  />
                </svg>
              </Icon>
            </button>
          </div>
          <div className="task-modal-body flex-1 text-slate-700">
            <div className="flex sm:hidden items-center justify-center text-xs gap-4 py-2 bg-slate-100">
              <button className={`uppercase px-6 py-2 rounded-full border border-slate-400 font-semibold tracking-wider min-w-32 shadow-md ${showDetails ? `bg-gradient-to-br from-slate-400 to-slate-600 text-slate-50`: `text-slate-500`}`} onClick={()=>setShowDetails(true)}>
                Details
              </button>
              <button className={`uppercase px-6 py-2 font-semibold tracking-wider rounded-full min-w-32 border border-slate-400 ${!showDetails ? `bg-gradient-to-br from-slate-400 to-slate-600 text-slate-50`: `text-slate-500`}`} onClick={()=>setShowDetails(false)}>
                Activity
              </button>
            </div>
            <div className="task-modal-cnts text-xs flex relative min-h-64 sm:min-h-full">
              <div className={`h-full sm:h-96 overflow-y-auto px-4 absolute sm:relative sm:px-6 py-3 flex flex-col gap-3 flex-1 bg-white w-full ${showDetails ? `z-[2] pointer-events-auto`: `z-[1] pointer-events-none`}`}>
                <input
                  type="text"
                  name="title"
                  placeholder="Task title"
                  className=" border border-slate-300 bg-slate-100 px-3 py-1.5 rounded-md outline-none focus:shadow-inner focus:border-slate-400" value={task.taskName}
                  onInput={handleTextInputs}
                />
                <input
                  type="text"
                  name="description"
                  placeholder="Description"
                  className=" border border-slate-300 bg-slate-100 px-3 py-1.5 rounded-md outline-none focus:shadow-inner focus:border-slate-400" value={task.description}
                  onInput={handleTextInputs}
                />
                <div className="flex flex-wrap gap-4  my-2">
                  <div>
                    <p>Task Category*</p>
                    <ul className="flex gap-2 mt-2 items-center flex-wrap">
                    <li className={`border px-4 py-1 rounded-full text-xs font-medium cursor-pointer  ${category === 'work' ? 'border-[#7b1984] bg-[#7b1984] text-slate-50' : 'border-slate-300 hover:bg-slate-100'}`} onClick={()=>setCategory('work')}>
                      Work
                    </li>
                    <li className={`border px-4 py-1 rounded-full text-xs font-medium cursor-pointer  ${category === 'personal' ? 'border-[#7b1984] bg-[#7b1984] text-slate-50' : 'border-slate-300 hover:bg-slate-100'}`} onClick={()=>setCategory('personal')}>
                      Personal
                    </li>
                    <li className={`border px-4 py-1 rounded-full text-xs font-medium cursor-pointer  ${category === 'other' ? 'border-[#7b1984] bg-[#7b1984] text-slate-50' : 'border-slate-300 hover:bg-slate-100'}`} onClick={()=>setCategory('other')}>
                      Other
                    </li>
                  </ul>
                  </div>
                  <div>
                    <p>Due on*</p>
                    <input type="date" value={task.due} placeholder="DD/MM/YYYY"
                    className="px-3 py-1.5 max-w-40 mt-2 w-full rounded-md border border-slate-300 outline-none bg-slate-100 focus:shadow-inner focus:border-slate-400" onChange={handleDueDate}/>
                  </div>
                  <div>
                    <p>Task Status*</p>
                    <select
                      className="px-3 py-1.5 border outline-none border-slate-300 bg-slate-100 max-w-40 mt-2 w-full rounded-md focus:shadow-inner focus:border-slate-400"
                      value={task.taskStatus}  onChange={handleStatus}
                    >
                      <option value="to-do">To-Do</option>
                      <option value="in-progress">In Progress</option>
                      <option value="completed">Completed</option>
                    </select>
                  </div>
                </div>
                <div className="flex-1">
                  <p>Attachment</p>
                  <div className="border-2 border-dashed border-slate-300 p-3 bg-slate-100 rounded-md text-center mt-2 shadow-inner">
                    Drop your files here or Update
                  </div>
                </div>
              </div>
              <div className={`w-full sm:w-fit min-h-full border-l-2 border-slate-200 bg-slate-100 absolute sm:relative ${!showDetails ? `z-[2] pointer-events-auto`: `z-[1] pointer-events-none`}`}>
                <div className="bg-white px-4 py-2 border-b border-slate-200 hidden sm:block">
                  <p className="text-sm font-semibold">Activity</p>
                </div>
                <ul className="px-4 py-4 sm:py-3 flex flex-col gap-4">
                  <li className="flex justify-between">
                    <p>You created this task</p>
                    <span className="text-slate-500">Dec 27 at 1:15pm</span>
                  </li>
                  <li className="flex justify-between">
                    <p className="max-w-48">
                      You changed status from in progress to complete
                    </p>
                    <span className="text-slate-500">Dec 28 at 1:15pm</span>
                  </li>
                  <li className="flex justify-between">
                    <p>You uploaded file</p>
                    <span className="text-slate-500">Dec 29 at 1:15pm</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="task-modal-footer text-xs bg-slate-100 px-4 sm:px-6 py-3 flex gap-2 justify-end border-t border-t-slate-200">
            <button className="uppercase bg-white px-4 py-1.5 rounded-full shadow-lg" onClick={closeModal}>
              Cancel
            </button>
            <button className="uppercase px-4 py-1.5 rounded-full bg-gradient-to-br from-[#b67bbb] to-[#7b1984] text-white shadow-lg" onClick={handleUpdate}>
              Update
            </button>
          </div>
        </div>
      </Modal>
    );
};

export default EditTask;