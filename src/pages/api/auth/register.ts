import { NextApiRequest, NextApiResponse } from "next";
import connectDB from "../../../utils/connectDb";
// import User, { SavedUserDocument } from "../../../models/UserModel";
import User from "../../../models/UserModel";

connectDB();

export default async (req: NextApiRequest, res: NextApiResponse) => {
   switch (req.method) {
      case "POST":
         await RegisterUser(req, res);
         break;

      default:
         break;
   }
};

const RegisterUser = async (req: NextApiRequest, res: NextApiResponse) => {
   try {
      //  Getting the data from request body
      const { name, email, password } = req.body;

      // Checking if this email used before or not
      const user = await User.findOne({ email });
      if (user) {
         return res.status(403).json({
            success: false,
            error: "This email is already registered",
         });
      }

      // Creating a new User
      const newUser = await User.create({
         name,
         email,
         password,
      });

      // If registration failed
      if (!newUser) {
         return res
            .status(403)
            .json({ success: false, error: "Something went wrong" });
      }

      // Returing a success response
      res.status(201).json({ success: true, data: { newUser } });
   } catch (error) {
      console.log(error);
      return res.status(403).json({ success: false, error: error.message });
   }
};
