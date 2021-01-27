import { NextApiRequest, NextApiResponse } from "next";
import AppointmentModel from "../../models/AppoinmentModel";
import connectDB from "../../utils/connectDb";
import UserModel from "../../models/UserModel";

connectDB();

export default async (req: NextApiRequest, res: NextApiResponse) => {
   switch (req.method) {
      case "POST":
         await AppoinmentPost(req, res);
         break;

      default:
         break;
   }
};

const AppoinmentPost = async (req: NextApiRequest, res: NextApiResponse) => {
   try {
      //   finding the doctor who got the patient
      const doctor = await UserModel.findOne({ name: req.body.doctor_name });

      //   adding the doctor _id to the appointment
      req.body.doc = doctor._id;

      //    creating the appointment
      const newAppoinment = await AppointmentModel.create(req.body);

      // updating the doctor
      const updatedDoctor = await UserModel.updateOne(
         { _id: doctor._id },
         { $addToSet: { appointment: newAppoinment._id } }
      );

      const d = await UserModel.findOne({ name: req.body.doctor_name });

      res.status(200).json({ message: "success" });
   } catch (error) {
      res.status(403).json({ success: false, error: error.message });
   }
};
