import { createBrowserRouter } from 'react-router-dom';

import AppRouter from './app.router';
import AuthRouter from './auth.router';

const router = createBrowserRouter([AppRouter, AuthRouter]);

export default router;
