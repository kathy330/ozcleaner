import './App.css'
import React from 'react'
import { Redirect, Route, Switch } from 'react-router'
import { ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import ProtectedRoute from './router/ProtectedRoute'
import HomePage from './pages/HomePage/HomePage'
import Order from './pages/OrderPage/OrderPage'
import ProfilePage from './pages/ProfilePage/ProfilePage'
import OrderConfirmPage from './pages/OrderPage/OrderConfirmPage'
import OrderDetailsPage from './pages/OrderPage/OrderDetailsPage'
import ErrorPage from './pages/ErrorPage/ErrorPage'
import theme from './styles/theme'
import AdminIndexPage from "./pages/AdminPage/AdminIndexPage"
import OrderCusDetailPage from "./pages/OrderPage/CustomersDetails"
import OrderStaffDetailPage from "./pages/OrderPage/StaffDetails"
import EmployeeOrderList from './pages/OrderPage/EmployeeOrderList'
import ForgetPassword from "./components/SignUpComponents/ForgetPassword"
import ResetPassword from './components/SignUpComponents/ResetPassword'
import ForgetPasswordEmployee from './components/SignUpComponents/ForgetPasswordEmployee'
import ResetPasswordEmployee from './components/SignUpComponents/ResetPasswordEmployee'

function App() {

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <ProtectedRoute path="/order" exact component={Order} />
        <ProtectedRoute path="/order/confirm" exact component={OrderConfirmPage} />
        <ProtectedRoute path="/profile" exact component={ProfilePage} />
        <ProtectedRoute path="/users/:id" exact component={OrderCusDetailPage} />
        <ProtectedRoute path="/employees/:id" exact component={OrderStaffDetailPage} />
        <ProtectedRoute path="/employee-orders" exact component={EmployeeOrderList} />
        <ProtectedRoute path="/order-detail/:id" exact component={OrderDetailsPage} />
     
        <Redirect exact from="/admin" to="/admin/dashboard" />
        <ProtectedRoute path="/admin" component={AdminIndexPage} />
        <Route path="/forgetpassword" exact component={ForgetPassword} />
        <Route path="/forgetpassword/resetpassword" exact component={ResetPassword} />
        <Route path="/forgetpassword/employee" exact component={ForgetPasswordEmployee} />
        <Route path="/resetpassword/employee" exact component={ResetPasswordEmployee} />
        <Route component={ErrorPage} />
      </Switch>
    </ThemeProvider>
  )
}

export default App
