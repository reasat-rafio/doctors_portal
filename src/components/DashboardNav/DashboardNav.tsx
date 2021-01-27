import Link from "next/link";
import DashboardIcon from "@material-ui/icons/Dashboard";
import AssignmentIcon from "@material-ui/icons/Assignment";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import ReceiptIcon from "@material-ui/icons/Receipt";
import SettingsIcon from "@material-ui/icons/Settings";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { dashboardNavStyles } from "../../utils/styles";

interface DashboardNavProps {}

export const DashboardNav: React.FC<DashboardNavProps> = ({}) => {
   const classes = dashboardNavStyles();

   return (
      <nav className="dashboardNav">
         <ul>
            <li>
               <Link href="/dashboard">
                  <a>
                     <DashboardIcon />
                     <div className={classes.li}>Dashboard</div>
                  </a>
               </Link>
            </li>
            <li>
               <Link href="/dashboard/appointmnet">
                  <a>
                     <ReceiptIcon />
                     <div className={classes.li}>Appointmnet</div>
                  </a>
               </Link>
            </li>
            <li>
               <Link href="/dashboard/patients">
                  <a>
                     <SupervisorAccountIcon />
                     <div className={classes.li}>Patients</div>
                  </a>
               </Link>
            </li>
            <li>
               <Link href="/dashboard/prescriptions">
                  <a>
                     <AssignmentIcon />
                     <div className={classes.li}>Prescriptions</div>
                  </a>
               </Link>
            </li>
            <li>
               <Link href="/dashboard/setting">
                  <a>
                     <SettingsIcon />
                     <div className={classes.li}>Setting</div>
                  </a>
               </Link>
            </li>
         </ul>
         <ul>
            <li>
               <ExitToAppIcon />
               <div className={classes.li}>Logout</div>
            </li>
         </ul>
      </nav>
   );
};
