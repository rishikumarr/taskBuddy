import { useModal } from "@/context/ModalContext";
import Icon from "./Icon";
import { useTasks } from "@/context/TasksContext";

const TaskBar = () => {
  const {openModal} = useModal();
  const {filterByCategory} = useTasks();

  const handleFilter = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const category = e.target.value;
    filterByCategory(category);
  }

    return (
      <div className="task-bar w-full grid grid-cols-1 md:grid-cols-2 gap-2 grid-flow-row md:grid-flow-col items-center ">
        <div className="task-bar-filter flex flex-col md:flex-row md:items-center gap-2 text-xs order-2 md:order-1">
          <div>
            <p>Filter by:</p>
          </div>
          <div className="flex gap-3">
            <select name="category" aria-label="category" className="outline-none border border-slate-300 focus:border-slate-400 bg-slate-50 relative rounded-full px-2 py-1 cursor-pointer" onChange={handleFilter}>
              <option value="all">All</option>
              <option value="work">Work</option>
              <option value="personal">Personal</option>
              <option value="other">Other</option>
            </select>
            <div className="flex items-center relative cursor-pointer">
              <input type="date" name="" id="due-date" className="px-2 py-1 rounded-full outline-none bg-slate-50 border border-slate-300 focus:border-slate-400 max-w-28"/>
              <label className="absolute pl-2.5 pr-[21px] ml-1 py-1 bg-slate-50 flex items-center justify-center rounded-full" htmlFor="due-date">
                <span>Due Date</span>
              </label>
            </div>
          </div>
        </div>
        <div className="task-bar-search justify-self-center md:justify-self-end order-3 md:order-2 mt-4 md:mt-0 mr-0 md:mr-5">
          <div className="relative group">
            <input
              type="search"
              placeholder="Search"
              className="border border-slate-300 outline-none focus:border-slate-400 rounded-full pl-8 pr-3 py-1.5 text-xs focus:shadow-inner text-slate-700"
            />
            <Icon className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-500">
              <svg
                className="w-full h-full"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g opacity="0.6">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M3.75 8.25C3.75 5.76825 5.76825 3.75 8.25 3.75C10.7318 3.75 12.75 5.76825 12.75 8.25C12.75 10.7318 10.7318 12.75 8.25 12.75C5.76825 12.75 3.75 10.7318 3.75 8.25ZM15.5303 14.4697L12.984 11.9228C13.7738 10.9073 14.25 9.6345 14.25 8.25C14.25 4.94175 11.5582 2.25 8.25 2.25C4.94175 2.25 2.25 4.94175 2.25 8.25C2.25 11.5582 4.94175 14.25 8.25 14.25C9.6345 14.25 10.9073 13.7738 11.9228 12.984L14.4697 15.5303C14.616 15.6765 14.808 15.75 15 15.75C15.192 15.75 15.384 15.6765 15.5303 15.5303C15.8235 15.237 15.8235 14.763 15.5303 14.4697Z"
                    fill="black"
                  />
                  <mask
                    id="mask0_68_1992"
                    maskUnits="userSpaceOnUse"
                    x="2"
                    y="2"
                    width="14"
                    height="14"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M3.75 8.25C3.75 5.76825 5.76825 3.75 8.25 3.75C10.7318 3.75 12.75 5.76825 12.75 8.25C12.75 10.7318 10.7318 12.75 8.25 12.75C5.76825 12.75 3.75 10.7318 3.75 8.25ZM15.5303 14.4697L12.984 11.9228C13.7738 10.9073 14.25 9.6345 14.25 8.25C14.25 4.94175 11.5582 2.25 8.25 2.25C4.94175 2.25 2.25 4.94175 2.25 8.25C2.25 11.5582 4.94175 14.25 8.25 14.25C9.6345 14.25 10.9073 13.7738 11.9228 12.984L14.4697 15.5303C14.616 15.6765 14.808 15.75 15 15.75C15.192 15.75 15.384 15.6765 15.5303 15.5303C15.8235 15.237 15.8235 14.763 15.5303 14.4697Z"
                      fill="white"
                    />
                  </mask>
                  <g mask="url(#mask0_68_1992)">
                    <rect width="18" height="18" fill="currentColor" />
                  </g>
                </g>
              </svg>
            </Icon>
          </div>
        </div>
        <div className="task-bar-btn flex gap-2 justify-self-end order-1 md:order-3">
          <button className="text-xs sm:text-sm bg-gradient-to-br from-[#b67bbb] to-[#7b1984] text-white px-4 py-2 rounded-full shadow-md" onClick={()=>openModal('create')}>
            ADD TASK
          </button>
        </div>
      </div>
    );
};

export default TaskBar;