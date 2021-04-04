// import logo from './logo.svg';
import './App.css'
import React from 'react'
import { Redirect, Route, Switch } from 'react-router'
import { ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import ProtectedRoute from './router/ProtectedRoute'
import HomePage from './pages/HomePage/HomePage'
import UI from './pages/UI/UI'
import OrderPage from './pages/OrderPage/OrderPage'
import CustomerProfilePage from './pages/ProfilePage/CustomerProfilePage'
import EmployeeProfilePage from './pages/ProfilePage/EmployeeProfilePage'
import OrderConfirmPage from './pages/OrderPage/OrderConfirmPage'
// import ProfilePage from './pages/ProfilePage/ProfilePage'
import AdminCustomersPage from './pages/AdminPage/AdminCustomersPage'
import ErrorPage from './pages/ErrorPage/ErrorPage'
import theme from './styles/theme'
import AdminStaffDetailsPage from './pages/AdminPage/AdminStaffDetailsPage'
import AdminCustomersDetailsPage from './pages/AdminPage/AdminCustomersDetailsPage'
import AdminIndexPage from "./pages/AdminPage/AdminIndexPage"
// import ....Page from ....
import DongyuPage from './pages/zpractice/Dongyu/Dongyu'
import KangkangPage from './pages/zpractice/Kangkang/Kangkang'
import YanboPage from './pages/zpractice/Yanbo/Yanbo'
import WystanPage from './pages/zpractice/Wystan/Wystan'
import KathyPage from './pages/zpractice/Kathy/Kathy'
import ErikPage from './pages/zpractice/Erik/Erik'
import OliviaPage from './pages/zpractice/Olivia/Olivia'
import MengxuanPage from './pages/zpractice/Mengxuan/Mengxuan'
import YanboForm from './pages/zpractice/Yanbo/YanboForm'

function App() {
  // 使用theme方法：
  // https://kitson-broadhurst.medium.com/quickly-set-up-a-theme
  // -in-material-ui-and-access-it-in-your-components-ba0565304887

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <ProtectedRoute path="/order" exact component={OrderPage} />
        <Route path="/profile/customer" exact component={CustomerProfilePage} />
        <Route path="/profile/employee" exact component={EmployeeProfilePage} />
        <Route path="/order/confirm" exact component={OrderConfirmPage} />
        {/* <Route path="/profile" exact component={ProfilePage} /> */}

        {/* <Route path="/admin/order" exact component={AdminOrderPage} />
        <Route path="/admin/overview" exact component={AdminOverviewPage} />
        <Route path="/admin/staff" exact component={AdminStaffPage} /> */}
        <Redirect exact from="/admin" to="/admin/dashboard" />
        <ProtectedRoute path="/admin" component={AdminIndexPage} />
        <Route path="/admin/staffs/details" exact component={AdminStaffDetailsPage} />
        <Route path="/admin/customers/details" exact component={AdminCustomersDetailsPage} />
        {/* <Route path="/admin/customers/info" exact component={AdminStaffPage} /> */}
        <Route path="/admin/staffs/customers" exact component={AdminCustomersPage} />
        <Route path="/ui" exact component={UI} />

        <Route path="/dongyu" exact component={DongyuPage} />
        <Route path="/Kangkang" exact component={KangkangPage} />
        <Route path="/Yanbo" exact component={YanboPage} />
        <Route path="/Yanbo/form" exact component={YanboForm} />
        <Route path="/wystan" exact component={WystanPage} />
        <Route path="/admin/customers/:id" exact component={KathyPage} />
        <Route path="/erik" exact component={ErikPage} />
        <Route path="/mengxuan" exact component={MengxuanPage} />
        <Route path="/Olivia" exact component={OliviaPage} />
        
        
        <Route component={ErrorPage} />
      </Switch>
    </ThemeProvider>
  )
}

export default App
