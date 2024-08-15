import {DefaultLayout} from "@/layout";
import { ProPage } from "@/pages/pro-page.tsx";
import {createBrowserRouter} from "react-router-dom";
import {BrowserPage, HomePage, SummaryPage, ErrorPage} from "@/pages";

const router = createBrowserRouter([
  {
    path: '/',
    element: <DefaultLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '',
        element: <HomePage />
      },
      {
        path: '/browse/*',
        element: <BrowserPage />
      },
      {
        path: '/summary',
        element: <SummaryPage />
      },
      {
        path: '/pro',
        element: <ProPage />
      }
    ]
  },
]);
export default router;
