import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { useState } from "react";

import { FormControl, Input, InputLabel, Select } from "@material-ui/core";
import { MenuItem } from "@material-ui/core";

interface AvailableCardsDialogProps {
   openModal: boolean;
   title: string;
   handleClose: any;
   date: any;
}

export const AvailableCardsDialog: React.FC<AvailableCardsDialogProps> = ({
   openModal,
   title,
   handleClose,
   date,
}) => {
   const names = [
      "Oliver Hansen",
      "Van Henry",
      "April Tucker",
      "Ralph Hubbard",
      "Omar Alexander",
      "Carlos Abbott",
      "Miriam Wagner",
      "Bradley Wilkerson",
      "Virginia Andrews",
      "Kelly Snyder",
   ];

   const [age, setAge] = useState("");

   const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
      setAge(event.target.value as string);
   };

   return (
      <div className="AvailableCardsDialog">
         <Dialog
            open={openModal}
            onClose={handleClose}
            aria-labelledby="form-dialog-title"
         >
            <DialogTitle className="form-dialog-title">{title}</DialogTitle>
            <DialogContent>
               <FormControl variant="outlined" fullWidth>
                  <InputLabel>Select Doctor</InputLabel>
                  <Select value={age} onChange={handleChange} label="Age">
                     <MenuItem value="">
                        <em>None</em>
                     </MenuItem>
                     <MenuItem value={10}>Ten</MenuItem>
                     <MenuItem value={20}>Twenty</MenuItem>
                     <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
               </FormControl>
               <TextField
                  autoFocus
                  margin="dense"
                  label="Your Name"
                  type="text"
                  variant="outlined"
                  name="name"
                  fullWidth
               />
               <TextField
                  autoFocus
                  margin="dense"
                  label="Phone Number"
                  type="text"
                  variant="outlined"
                  name="phone_number"
                  fullWidth
               />
               <TextField
                  autoFocus
                  margin="dense"
                  label="Email Address"
                  type="email"
                  name="email"
                  variant="outlined"
                  fullWidth
               />
               <TextField
                  id="date"
                  type="date"
                  fullWidth
                  variant="outlined"
                  InputLabelProps={{
                     shrink: true,
                  }}
               />
            </DialogContent>
            <DialogActions>
               <Button onClick={handleClose}>Cancel</Button>
               <Button
                  onClick={handleClose}
                  variant="contained"
                  className="modalSendButton"
               >
                  Send
               </Button>
            </DialogActions>
         </Dialog>
      </div>
   );
};
