# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

---

# 登陆 (yanbo)

# 注册 (yanbo)

# 忘记密码 (yanbo)

# Navbar (Dongyu)

1. 不同身份 navbar 展示不一样，左侧 icon 点击去到不同身份的首页，还有 protect router，不登陆不能进入首页之外的页面
2. 首页 navbar 下滑自动显示，其他页面固定在顶部
3. 如果没登陆，点击 navbar 的 booking 也会弹出登陆
4. mobile 移动端样式

# 首页 (Dongyu)

1. 可以选择房间数，type 和 postcode 不是必填。然后 booking 跳转到 order 页面
2. 如果没登陆，点击 booking 会弹出登陆
3. 如果下滑，也可以从 navbar 进入下单页面,右下角有返回顶部按钮
4. mobile 移动端样式

# Order (Dongyu)

1. 如果是 employee 或者 admin 不能进入这个页面，会 history push 到他们自己的首页
2. 右侧确认栏会随着浏览器下滑 自动下滑（sticky）
3. 选中 regular 后可以添加删除 extra/选中 end 后，全部 extra 会选中并且不能取消
4. 如果支付成功，可以 post order，卡号无效或者支付不成功，不会 post，但可以重新填正确的信息
5. 如果某项必填没有写，会有提示
6. mobile 移动端样式

# Order Confirm (Dongyu)

1. 下单成功后可以点击 view order 看刚才的订单，如果还没被接单，可以 cancel

# employee 接单大厅 (Kathy)

# My order (Olivia)

# Order details (Kangkang)

# My profile (Mengxuan)

# Admin Dashboard (Wystan)

# Admin Order 左侧 (Kathy)

# Admin Customers (Kathy)

# Admin Staffs (Kathy)

# Footer (Kathy)
