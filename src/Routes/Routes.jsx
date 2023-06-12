import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main';
import ErrorPage from '../pages/Shared/ErrorPage/ErrorPage';
import Home from '../pages/Home/Home/Home';
import Login from '../pages/Login/Login';
import Registration from '../pages/Registration/Registration';
import Instructors from '../pages/Instructors/Instructors';
import Classes from '../pages/Classes/Classes';
import Dashboard from '../Layout/Dashboard';
import PrivateRoute from './PrivateRoute';
import SelectedClass from '../pages/Dashboard/SelectedClass/SelectedClass';
import EnrolledClass from '../pages/Dashboard/EnrolledClass/EnrolledClass';
import Payment from '../pages/Dashboard/Payment/Payment';
import ManageUsers from '../pages/Dashboard/ManageUser/ManageUsers';
import AddClass from '../pages/Dashboard/AddClass/AddClass';
import MyClasses from '../pages/Dashboard/MyClasses/MyClasses';
import UpdateClass from '../pages/Dashboard/UpdateClass/UpdateClass';
import ManageClasses from '../pages/Dashboard/ManageClasses/ManageClasses';
import FeedBack from '../pages/Dashboard/ManageClasses/FeedBack';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'instructors',
        element: <Instructors />,
      },
      {
        path: 'classes',
        element: <Classes />,
      },
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'registration',
        element: <Registration />,
      },
    ],
  },
  {
    path: 'dashboard',
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
    children: [
      {
        path: 'selectClasses',
        element: <SelectedClass />,
      },
      {
        path: 'enrollClasses',
        element: <EnrolledClass />,
      },
      {
        path: 'payment',
        element: <Payment />,
      },
      {
        path: 'manageUsers',
        element: <ManageUsers />,
      },
      {
        path: 'addClass',
        element: <AddClass />,
      },
      {
        path: 'myClasses',
        element: <MyClasses />,
      },
      {
        path: 'manageClasses',
        element: <ManageClasses />,
      },
      {
        path: 'feedback/:id',
        element: <FeedBack />,
      },
      {
        path: 'updateClass/:id',
        element: <UpdateClass />,
        loader: ({ params }) =>
          fetch(
            `https://summer-camp-server-ruby.vercel.app/myClasses/${params.id}`
          ),
      },
    ],
  },
]);
export default router;
