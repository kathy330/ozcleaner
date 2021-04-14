// import logo from './logo.svg';
import './App.css'
import React from 'react'
import { Redirect, Route, Switch } from 'react-router'
import { ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import ProtectedRoute from './router/ProtectedRoute'
import HomePage from './pages/HomePage/HomePage'
import UI from './pages/UI/UI'
import Order from './pages/OrderPage/OrderPage'
import ProfilePage from './pages/ProfilePage/ProfilePage'
// import EmployeeProfilePage from './pages/ProfilePage/EmployeeProfilePage'
import OrderConfirmPage from './pages/OrderPage/OrderConfirmPage'
import OrderDetailsPage from './pages/OrderPage/OrderDetailsPage'
// import OrderPay from "./pages/OrderPage/OrderPayPage"
// import ProfilePage from './pages/ProfilePage/ProfilePage'
// import AdminCustomersPage from './pages/AdminPage/AdminOrderPage'
import ErrorPage from './pages/ErrorPage/ErrorPage'
import theme from './styles/theme'
// import AdminStaffDetailsPage from './pages/AdminPage/AdminStaffDetailsPage'
// import AdminCustomersDetailsPage from './pages/AdminPage/AdminCustomersDetailsPage'
import AdminIndexPage from "./pages/AdminPage/AdminIndexPage"
// import AdminOrderPage from "./pages/AdminPage/AdminOrderPage"
import OrderCusDetailPage from "./pages/OrderPage/CustomersDetails"
import OrderStaffDetailPage from "./pages/OrderPage/StaffDetails"
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
import EmployeeOrderList from './pages/OrderPage/EmployeeOrderList'
import ForgetPassword from "./components/SignUpComponents/ForgetPassword"
import ResetPassword from './components/SignUpComponents/ResetPassword'

function App() {
  // 使用theme方法：
  // https://kitson-broadhurst.medium.com/quickly-set-up-a-theme
  // -in-material-ui-and-access-it-in-your-components-ba0565304887

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Switch>
        {/* 1 首页 */}
        <Route path="/" exact component={HomePage} />
        {/* 2 user下订单Booking */}
        <ProtectedRoute path="/order" exact component={Order} />
        {/* 3 user下订单后展示 */}
        <ProtectedRoute path="/order/confirm" exact component={OrderConfirmPage} />
        {/* 4 user和employee的profile */}
        <Route path="/profile" exact component={ProfilePage} />
        {/* 5 user的Navbar My order按钮 */}
        <Route path="/users/:id" exact component={OrderCusDetailPage} />
        {/* 6 employee的Navbar My order按钮 */}
        <Route path="/employees/:id" exact component={OrderStaffDetailPage} />
        {/* 7 employee接单大厅Browse Task */}
        <Route path="/employee-orders" exact component={EmployeeOrderList} />
        {/* 8 user/employee myorder里面的子页链接 */}
        <Route path="/order-detail/:id" exact component={OrderDetailsPage} />
     
        {/* 9 admin页面 */}
        <Redirect exact from="/admin" to="/admin/dashboard" />
        <ProtectedRoute path="/admin" component={AdminIndexPage} />
        {/* 10 找回密码页面 */}
        <Route path="/forgetpassword" exact component={ForgetPassword} />
        <Route path="/forgetpassword/resetpassword" exact component={ResetPassword} />
       

        {/* myorder删除掉 */}
        {/* <Route path="/myorder/:id" exact component={OrderDetailsPage} /> */}
        {/* <ProtectedRoute path="/order/pay" exact component={OrderPay} /> */}
        {/* <Route path="/profile/customer" exact component={CustomerProfilePage} /> */}
        {/* <Route path="/profile/employee" exact component={EmployeeProfilePage} /> */}
        {/* <Route path="/profile/employee" exact component={EmployeeProfilePage} /> */}
        {/* <Route path="/profile" exact component={ProfilePage} /> */}

        {/* <Route path="/admin/order" exact component={AdminOrderPage} />
        <Route path="/admin/overview" exact component={AdminOverviewPage} />
        <Route path="/admin/staff" exact component={AdminStaffPage} /> */}
     
        {/* <Route path="/admin/staffs/details" exact component={AdminStaffDetailsPage} />
        <Route path="/admin/customers/details" exact component={AdminCustomersDetailsPage} /> */}

  
        {/* <Route path="/admin/customers/info" exact component={AdminStaffPage} /> */}
        {/* <Route path="/admin/staffs/customers" exact component={AdminCustomersPage} /> */}
        {/* <Route path="/order-detail/:id" exact component={OrderDetailsPage} /> */}
        {/* <Route path="/userOrders/:id" exact component={AdminOrderPage} /> */}
        {/* <Route path="/myorder/:id" exact component={AdminOrderPage} /> */}

    

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

        {/* 11 Error page */}
        <Route component={ErrorPage} />
      </Switch>
    </ThemeProvider>
  )
}

export default App
