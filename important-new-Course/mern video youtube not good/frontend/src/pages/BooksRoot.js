import { Outlet } from "react-router-dom";

function BooksRootLayout() {
  return (
    <>
      <h1>Books</h1>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default BooksRootLayout;
