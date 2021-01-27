import mongoose from "mongoose";

const AppointmentSchema = new mongoose.Schema(
   {
      doctor_name: { type: String, required: true },
      patient_name: { type: String, required: true },
      phone_number: {
         type: String,
         required: true,
      },
      email: { type: String, required: true },
      date: { type: String, required: true },
      doc: {
         type: mongoose.Schema.Types.ObjectId,
         ref: "Doctor",
         required: true,
      },
   },
   { timestamps: true }
);

let DataSet =
   mongoose.models.appointment ||
   mongoose.model<any>("Appointment", AppointmentSchema);

export default DataSet;
