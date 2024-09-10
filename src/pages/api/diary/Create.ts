import { NowRequest, NowResponse } from "@vercel/node";
import { connectToDatabase } from "../DBConect";
import { NextResponse } from "next/server";

//cria uma nova indicação e requer três atributos enviados via body, title, name e date
export default async (request: NowRequest, response: NowResponse) => {
  if (
    request.body.content &&
    request.body.title &&
    request.body.data &&
    request.body.user
  ) {
    const db = await connectToDatabase(process.env.MONGODB_URI!);
    const collection = db.collection("diarys");
    await collection.insertOne(request.body);
    return response.status(200);
  } else {
    return NextResponse.error() 
  }
};
