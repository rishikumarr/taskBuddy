import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema(
    {
        taskName: {
            type: String,
            required: true,
            trim: true,
        },
        description: {
            type: String,
            trim: true,
        },
        category: {
            type: String,
            enum: ['work', 'personal', 'other'],
            default: 'other',
        },
        due: {
            type: String,
        },
        taskStatus: {
            type: String,
            enum: ['to-do', 'in-progress', 'completed'],
            default: 'to-do',
        },
        attachment: {
            type: String,
        },
        createdOn: {
            type: Date,
            default: Date.now,
        },
        timestamps: {
            addedAt: {
                type: Date,
                default: Date.now,
            },
            progressedAt: {
                type: Date,
            },
            completedAt: {
                type: Date,
            },
        },
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

const TaskModel = mongoose.models.Task || mongoose.model('Task', TaskSchema);

export default TaskModel;