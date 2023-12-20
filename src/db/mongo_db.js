import mongoose from "mongoose";

export const connectMongoDB = async () => {
  // mongodb+srv://<username>:<password>@work-cluster-1.jmlj1ag.mongodb.net/?retryWrites=true&w=majority
  try {
    const connectionInstance = await mongoose.connect(
      `mongodb+srv://${process.env.USER_NAME}:${process.env.USER_PASSWORD}@work-cluster-1.jmlj1ag.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`
    );

    console.log("Mongo DB Connected", connectionInstance.connection.host);
  } catch (error) {
    console.error("MONGO DB ERROR", error.message);
    process.exit(1);
  }
};
