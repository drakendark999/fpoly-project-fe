import App from '@src/views/app/app.container';
import HomeContainer from '@src/views/app/home/home.container';
import ConfirmContainer from '@src/views/app/confirm-schedule/confirm.container';
import ReportContainer from '@src/views/app/exam-report/report.container';
import CancelContainer from '@src/views/app/cancel-schedule/cancel.container';

const AppRouter = {
  path: '/',
  element: <App />,
  children: [
    { path: '/', element: <HomeContainer /> },
    { path: '/confirm', element: <ConfirmContainer /> },
    { path: '/report', element: <ReportContainer /> },
    { path: '/cancel', element: <CancelContainer /> },
  ],
};

export default AppRouter;
