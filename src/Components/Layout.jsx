import { Outlet, useLocation } from "react-router-dom";
import QA_Footer from "../Pages/QuestionAnswer/QA_Footer";
import QA_Header from "../Pages/QuestionAnswer/QA_Header";

const Layout = ({ hideHeaderPaths = [] }) => {
  const { pathname } = useLocation();

  return (
    <>
      {!hideHeaderPaths.includes(pathname) && <QA_Header />}
      <Outlet />
      {!hideHeaderPaths.includes(pathname) && <QA_Footer />}
    </>
  );
};
export default Layout;
