import { auth } from "@/firebase/firebase";
import connectDB from "@/lib/config/db";
import TaskModel from "@/lib/config/models/TaskModel";
import { getAuth } from "firebase/auth";
import { NextResponse } from "next/server";

// export const GET = async (request: Request) => {
//     const { searchParams } = new URL(request.url);

//     try {
//         await connectDB();

//         const userId = searchParams.get('uId');
//         const taskId = searchParams.get('taskId');
//         const category = searchParams.get('category');

//         if (!userId) {
//             return NextResponse.json({ success: false, error: "User ID is required" }, { status: 400 });
//         }

//         if (taskId) {
//             const task = await TaskModel.findOne({ _id: taskId, userId });

//             if (!task) {
//                 return NextResponse.json({ success: false, error: "Task not found" }, { status: 404 });
//             }

//             return NextResponse.json({ success: true, task });
//         } else {
//             const tasks = await TaskModel.find({ userId });

//             return NextResponse.json({ success: true, tasks });
//         }
//     } catch (error) {
//         return NextResponse.json({ success: false, error: 'Server error' }, { status: 500 });
//     }
// };

export const GET = async (request: Request) => {
    const { searchParams } = new URL(request.url);
  
    try {
      await connectDB();
  
      const userId = searchParams.get('uId');
      const taskId = searchParams.get('taskId');
      const category = searchParams.get('category');
  
      if (!userId) {
        return NextResponse.json({ success: false, error: "User ID is required" }, { status: 400 });
      }
  
      let filterConditions: any = { userId };
  
      if (taskId) {
        const task = await TaskModel.findOne({ _id: taskId, userId });
  
        if (!task) {
          return NextResponse.json({ success: false, error: "Task not found" }, { status: 404 });
        }
  
        return NextResponse.json({ success: true, task });
      } 
      
      if (category && category !== "all") {
        filterConditions.category = category;
      }
  
      const tasks = await TaskModel.find(filterConditions);
  
      return NextResponse.json({ success: true, tasks });
  
    } catch (error) {
      console.log('Error fetching tasks:', error);
      return NextResponse.json({ success: false, error: 'Server error' }, { status: 500 });
    }
  };

export const POST = async (request: Request) => {
    try {
        await connectDB();

        const { taskName, description, category, due, taskStatus, userId } = await request.json();

        if (!taskName || !description || !category || !due || !taskStatus || !userId) {
            return NextResponse.json({ success: false, error: "All fields are required" }, { status: 400 });
        }

        const newTask = new TaskModel({ taskName, description, category, due, taskStatus, userId});

        const savedTask = await newTask.save();

        return NextResponse.json({ success: true, task: savedTask }, { status: 201 });

    } catch (error) {
        console.log(error);
        return NextResponse.json({ success: false, error: 'Server error' }, { status: 500 });
    }
}

export const PUT = async (request: Request) => {
    try{
        await connectDB();

        const { taskId, taskName, description, category, due, taskStatus } = await request.json();

        if (!taskId) {
            return NextResponse.json({ success: false, error: "Task ID is required" }, { status: 400 });
        }

        if (!taskName || !description || !category || !due || !taskStatus) {
            return NextResponse.json({ success: false, error: "All fields are required" }, { status: 400 });
        }

        const updatedTask = await TaskModel.findByIdAndUpdate(
            taskId, 
            { taskName, description, category, due, taskStatus }, 
            { new: true }
        );

        if (!updatedTask) {
            return NextResponse.json({ success: false, error: "Task not found" }, { status: 404 });
        }

        return NextResponse.json({ success: true, task: updatedTask });
    }
    catch(error){
        console.log(error);
        return NextResponse.json({ success: false, error: 'Server error' }, { status: 500 });
    }
}

export const DELETE = async (request: Request) => {
    const { searchParams } = new URL(request.url);
  
    try {
      await connectDB();
  
      const taskId = searchParams.get('taskId');
      const userId = searchParams.get('userId');
  
      if (!taskId || !userId) {
        return NextResponse.json({ success: false, error: "Task ID and User ID are required" }, { status: 400 });
      }
  
      const deletedTask = await TaskModel.findOneAndDelete({ _id: taskId, userId });
  
      if (!deletedTask) {
        return NextResponse.json({ success: false, error: "Task not found" }, { status: 404 });
      }
  
      return NextResponse.json({ success: true, message: "Task deleted successfully" });
    } catch (error) {
      console.log(error);
      return NextResponse.json({ success: false, error: "Server error" }, { status: 500 });
    }
  };