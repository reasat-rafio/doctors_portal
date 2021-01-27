import { Document, Schema, models, model, Model } from "mongoose";
import bcrypt from "bcrypt";

export interface SavedUserDocument extends Document {
   email: string;
   password: string;
   name?: string;
   loginUser?: () => string;
}

interface IUserModel extends Model<SavedUserDocument> {
   loginUser(password: string, email: string): string;
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
         trim: true,
         lowercase: true,
      },
      password: {
         type: String,
         required: true,
      },
      role: {
         type: String,
         default: "Doctor",
      },
      appointment: [
         { type: [Schema.Types.ObjectId], ref: "Appointment", required: true },
      ],
   },
   {
      timestamps: true,
   }
);

// This function will fire before user Regiter
doctorsSchema.pre<any>("save", async function (this, next) {
   try {
      const salt = await bcrypt.genSalt();
      this.password = await bcrypt.hash(this.password, salt);
      next();
   } catch (error) {
      console.log(error);
   }
});

// Login user function
// doctorsSchema.statics.loginUser = async function (
//    email: string,
//    password: string
// ) {
//    const user: any = await this.findOne({ email });
//    if (user) {
//       const auth = await bcrypt.compare(password, user.password);
//       if (auth) {
//          return user;
//       }
//       throw Error("Incorrect Password");
//    }
//    throw Error("Incorrect email");
// };

let DataSet = models.Doctor || model<IUserModel | any>("Doctor", doctorsSchema);

export default DataSet;
