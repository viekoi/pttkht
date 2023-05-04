
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";
import prisma from "../../../libs/prismadb";

export async function POST(
  request
) {
  const body = await request.json();
  const { 
    email,
    name,
    password,
   } = body;

   const isRegisterd = await prisma.user.findUnique({
    where:{
      email:email
    }
   })

   if(isRegisterd){
    return NextResponse.json({message:"Email này đã được sử dụng"})
   }

   const hashedPassword = await bcrypt.hash(password, 12);

   

   const user = await prisma.user.create({
    data: {
      email,
      name,
      hashedPassword,
    }
  });

  return NextResponse.json(user);
}
