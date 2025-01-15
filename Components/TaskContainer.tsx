interface TaskContainerProps {
    children: React.ReactNode;
}

const TaskContainer = ({ children }: TaskContainerProps) => {
    return (
        <div className="task-container max-h-[60vh] min-h-96 px-5 pb-5 overflow-y-auto">
        {children}
        </div>
    );
};

export default TaskContainer;