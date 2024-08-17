import { DefaultLayout } from "@/layout";
import { createBrowserRouter } from "react-router-dom";
import {
  ProPage,
  BrowserPage,
  HomePage,
  SummaryPage,
  ErrorPage,
  ConstructorSendPage,
  UseCasePage,
} from "@/pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "/browse/*",
        element: <BrowserPage />,
      },
      {
        path: "/summary",
        element: <SummaryPage />,
      },
      {
        path: "/pro",
        element: <ProPage />,
      },
      {
        path: "/use-case",
        element: <UseCasePage />,
      },
      {
        path: "/constructor",
        children: [
          // {
          //   path: '',
          //   element: <BrowserPage />
          // },
          {
            path: "send",
            element: <ConstructorSendPage />,
          },
        ],
      },
    ],
  },
]);
export default router;
