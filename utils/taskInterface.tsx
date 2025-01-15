interface Task {
    _id: string;
    taskName: string;
    due: string;
    taskStatus: "to-do" | "in-progress" | "completed";
    category: "work" | "personal" | "other";
}

export default Task;