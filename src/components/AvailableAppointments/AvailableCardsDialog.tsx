import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormControl, Input, InputLabel, Select } from "@material-ui/core";
import { MenuItem } from "@material-ui/core";
import { AppoinmentSchema } from "../../utils/yupSchema";
import axios from "axios";
import { useCtx } from "../../store";
import { setSnackbar } from "../../store/actions/snackbar";
import {
   LOADING_END_ACTION,
   LOADING_START_ACTION,
} from "../../store/actions/userAction";

interface AvailableCardsDialogProps {
   openModal: boolean;
   title: string;
   handleClose: any;
   date: any;
}

interface dataInterface {
   name: string;
   phone_number: string;
   email: string;
   date: string;
   doctor_name: string;
}

export const AvailableCardsDialog: React.FC<AvailableCardsDialogProps> = ({
   openModal,
   title,
   handleClose,
   date,
}) => {
   // Select doctor State
   const [doctorName, setDoctorname] = useState<string>("");
   const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
      setDoctorname(event.target.value as string);
   };

   const [allDocs, setAllDocs] = useState([]);

   // Setting up Yup as useFrom resolver
   const { handleSubmit, register, errors } = useForm({
      resolver: yupResolver(AppoinmentSchema),
   });

   //
   const { snackbarDispatch, userDispatch } = useCtx();

   // On the form submit
   const onSubmit = async (data: dataInterface) => {
      try {
         data["doctor_name"] = doctorName;
         userDispatch(LOADING_START_ACTION());
         const res = await axios.post(
            `${process.env.BASE_URL}/api/appointment`,
            data
         );
         console.log(res.data);

         userDispatch(LOADING_END_ACTION());
         handleClose();
         snackbarDispatch(
            setSnackbar(true, "success", "Appointment Submited!")
         );
      } catch (error) {
         userDispatch(LOADING_END_ACTION());
         snackbarDispatch(
            setSnackbar(true, "error", error.response.data.error)
         );
      }
   };

   useEffect(() => {
      const getAlldoctors = async () => {
         try {
            const {
               data: {
                  doctors: { allDoctors },
               },
            } = await axios.get(`${process.env.BASE_URL}/api/doctors`);
            setAllDocs(allDoctors);
         } catch (error) {
            console.log(error);
         }
      };

      getAlldoctors();
   }, []);

   return (
      <div className="AvailableCardsDialog">
         <Dialog
            open={openModal}
            onClose={handleClose}
            aria-labelledby="form-dialog-title"
         >
            <DialogTitle className="form-dialog-title">{title}</DialogTitle>

            <form onSubmit={handleSubmit(onSubmit)}>
               <DialogContent>
                  <FormControl variant="outlined" fullWidth>
                     <InputLabel>Select Doctor</InputLabel>
                     <Select
                        value={doctorName}
                        onChange={handleChange}
                        label="Age"
                     >
                        <MenuItem value="">
                           <em>None</em>
                        </MenuItem>
                        {allDocs.map(({ name }, i) => (
                           <MenuItem key={i} value={name}>
                              {name}{" "}
                           </MenuItem>
                        ))}
                     </Select>
                  </FormControl>

                  <TextField
                     autoFocus
                     margin="dense"
                     label="Your Name"
                     type="text"
                     variant="outlined"
                     name="patient_name"
                     inputRef={register}
                     fullWidth
                  />
                  <TextField
                     autoFocus
                     margin="dense"
                     label="Phone Number"
                     type="text"
                     variant="outlined"
                     name="phone_number"
                     inputRef={register}
                     fullWidth
                  />
                  <TextField
                     autoFocus
                     margin="dense"
                     label="Email Address"
                     type="email"
                     name="email"
                     variant="outlined"
                     inputRef={register}
                     fullWidth
                  />
                  <TextField
                     id="date"
                     type="date"
                     fullWidth
                     name="date"
                     variant="outlined"
                     inputRef={register}
                     InputLabelProps={{
                        shrink: true,
                     }}
                  />
               </DialogContent>
               <DialogActions>
                  <Button onClick={handleClose}>Cancel</Button>
                  <Button
                     type="submit"
                     variant="contained"
                     className="modalSendButton"
                  >
                     Send
                  </Button>
               </DialogActions>
            </form>
         </Dialog>
      </div>
   );
};
