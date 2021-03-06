// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
// import Person from "@material-ui/icons/Person";
import People from "@material-ui/icons/People";
import Assignment from "@material-ui/icons/Assignment";
// import LibraryBooks from "@material-ui/icons/LibraryBooks";
// import BubbleChart from "@material-ui/icons/BubbleChart";
// import LocationOn from "@material-ui/icons/LocationOn";
// import Notifications from "@material-ui/icons/Notifications";
// core components/views
import DashboardPage from "views/Dashboard/Dashboard.jsx";
// import UserProfile from "views/UserProfile/UserProfile.jsx";
import CustomerTableList from "views/CustomerTableList/CustomerTableList.jsx";
import APIDocs from "views/APIDocs/APIDocs.jsx";
// import Typography from "views/Typography/Typography.jsx";
// import Icons from "views/Icons/Icons.jsx";
// import Maps from "views/Maps/Maps.jsx";
// import NotificationsPage from "views/Notifications/Notifications.jsx";

const dashboardRoutes = [
  {
    path: "/dashboard",
    sidebarName: "Dashboard",
    navbarName: "Dashboard",
    icon: Dashboard,
    component: DashboardPage
  },
//   {
//     path: "/user",
//     sidebarName: "User Profile",
//     navbarName: "Profile",
//     icon: Person,
//     component: UserProfile
//   },
  {
    path: "/customers",
    sidebarName: "Customers",
    navbarName: "Customers",
    icon: People,
    component: CustomerTableList
  },
  {
    path: "/apidocs",
    sidebarName: "API Docs",
    navbarName: "API Docs",
    icon: Assignment,
    component: APIDocs
  },
//   {
//     path: "/typography",
//     sidebarName: "Typography",
//     navbarName: "Typography",
//     icon: LibraryBooks,
//     component: Typography
//   },
//   {
//     path: "/icons",
//     sidebarName: "Icons",
//     navbarName: "Icons",
//     icon: BubbleChart,
//     component: Icons
//   },
//   {
//     path: "/maps",
//     sidebarName: "Maps",
//     navbarName: "Map",
//     icon: LocationOn,
//     component: Maps
//   },
//   {
//     path: "/notifications",
//     sidebarName: "Notifications",
//     navbarName: "Notifications",
//     icon: Notifications,
//     component: NotificationsPage
//   },
  { redirect: true, path: "/", to: "/dashboard", navbarName: "Redirect" }
];

export default dashboardRoutes;
