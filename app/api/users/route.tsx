import connectDB from "@/lib/config/db";
import UserModel  from "@/lib/config/models/UserModel";
import { NextResponse } from "next/server";

export const POST = async(request: Request) => { 
    try{
        await connectDB();

        const body = await request.json();

        const { name, email, profileImage, lastLoggedIn, lastLoggedOut } = body;

        let user = await UserModel.findOne({email});

        if(user){
            user.lastLoggedIn = lastLoggedIn || user.lastLoggedIn;
            user.lastLoggedOut = lastLoggedOut || user.lastLoggedOut;
        }
        else{
            user = new UserModel({ name, email, profileImage, lastLoggedIn, lastLoggedOut});
        }

        await user.save();

        return NextResponse.json({success: true, user});
    } catch(error){
        return NextResponse.json({success: false, error: 'Server error'}, {status: 500})
    }
}