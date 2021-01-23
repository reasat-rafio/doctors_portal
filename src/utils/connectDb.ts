import mongoose from "mongoose";

const connectDB = async () => {
   const URI: any = process.env.MONGO_URI;

   try {
      await mongoose.connect(URI, {
         useFindAndModify: true,
         useUnifiedTopology: true,
         useNewUrlParser: true,
         useCreateIndex: true,
      });
      console.log(`DB connceted`);
   } catch (error) {
      console.log(error);
      process.exit(1);
   }
};

export default connectDB;
