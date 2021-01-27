import { NextApiRequest, NextApiResponse } from "next";
import connectDB from "../../utils/connectDb";
import User from "../../models/UserModel";

connectDB();

export default async (req: NextApiRequest, res: NextApiResponse) => {
   switch (req.method) {
      case "GET":
         await getDoctors(req, res);
         break;

      default:
         break;
   }
};

const getDoctors = async (req: NextApiRequest, res: NextApiResponse) => {
   try {
      const allDoctors = await User.find();
      res.status(200).json({ success: true, doctors: { allDoctors } });
   } catch (error) {
      res.status(403).json({ success: false, error: error.message });
   }
};
