import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./pages/Root";
import HomePage from "./pages/Home";
import BooksRootLayout from "./pages/BooksRoot";
import CreateBook from "./pages/CreateBook";
import EditBook from "./pages/EditBook";
import ShowBook from "./pages/ShowBook";
import DeleteBook from "./pages/DeleteBook";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "books",
        element: <BooksRootLayout />,
        children: [
          { path: "create", element: <CreateBook /> },
          { path: "details/:pid", element: <ShowBook /> },
          { path: "edit/:pid", element: <EditBook /> },
          { path: "delete/:pid", element: <DeleteBook /> },
        ],
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
