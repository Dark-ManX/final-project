import { Navigate, Outlet } from "react-router-dom";
// import { useSelector } from "react-redux";

const PrivateRoute = () => {
    // const { token } = useSelector(state => state.user);
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNzM0OGUyM2RhMjk5YmRlY2I2NTFlNCIsImlhdCI6MTY2ODQ5OTcwNSwiZXhwIjoxNjY4NTM1NzA1fQ.W9gK98YZ9OzenWQpIP_e6irUwwyHiAI90L2xk4_Ebmg';

    return token
        ? <Outlet />
        : <Navigate to="/login" replace />
};

export default PrivateRoute;