import { Navigate, Outlet, useLocation } from 'react-router-dom';

export default () => {
  const location = useLocation(); // current location

  const userLogged = JSON.parse(localStorage.getItem("admin_info"));
  debugger
  return userLogged
    ? <Outlet />
    : (
      <Navigate
        to="/login"
        replace
        state={{ from: location }} // <-- pass location in route state
      />
    );
};