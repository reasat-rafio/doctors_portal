import { Document, Schema, models, model } from "mongoose";
import bcrypt from "bcrypt";

// export interface SavedUserDocument extends Document {
//    email: string;
//    password: string;
//    name: string;
// }

interface IUser {
   email: string;
   password: string;
   name: string;
}

const doctorsSchema = new Schema(
   {
      name: {
         type: String,
         required: true,
      },
      email: {
         type: String,
         required: true,
         unique: true,
      },
      password: {
         type: String,
         required: true,
      },
      role: {
         type: String,
         default: "Doctor",
      },
   },
   {
      timestamps: true,
   }
);

// This function will fire before user Regiter
doctorsSchema.pre<any>("save", async function (next) {
   try {
      const salt = await bcrypt.genSalt();
      this.password = await bcrypt.hash(this.password, salt);
      next();
   } catch (error) {
      console.log(error);
   }
});

let DataSet = models.doctor || model("doctor", doctorsSchema);

export default DataSet;
