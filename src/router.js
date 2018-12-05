import React from "react"
import ProductsPage from './pages/productsPage'
import ProductActionPage from './pages/productActionPage'
import About from './components/about'
import ProductDetailPage from './pages/productDetailPage'
import AuthenticationPages from './pages/authenticationPages'
import SignUpPage from './pages/signUpPage'

const routes = [
    {
        path: "/products",
        main: () => <ProductsPage />
    },
    {
        path: "/product/add",
        exact: false,
        main: ({ history }) => <ProductActionPage history={history} />
    },
    {
        path: "/product/:id",
        exact: false,
        main: ({ match, history }) => <ProductDetailPage match={match} history={history} />
    },
    {
        path: "/about",
        main: () => <About />
    },
    {
        path: "/login",
        main: () => <AuthenticationPages />
    },
    {
        path: "/signup",
        main: () => <SignUpPage />
    }
]

export default routes