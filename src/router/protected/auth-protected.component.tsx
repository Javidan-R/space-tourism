// import { Navigate } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
// import { Routes } from '../routes';
// import { getToken } from '../../core/helpers/get-token';
// import { IAuthProtectedRouteProps } from './auth-protected';

// const AuthProtectedComponent = ({children, layout = 'public'}: IAuthProtectedRouteProps) => {


//     switch (layout) {
//         case 'public':
//             return getToken() ? children : <Navigate to={Routes.home} replace />;
//         default:
//             return children;
//     }
// };

// export default AuthProtectedComponent;
