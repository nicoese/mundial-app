import "./App.css";
import "./assets/main.css";
import "./assets/tailwind.css";
import {Route, Routes} from "react-router-dom";
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {getAllProducts, getFavorites, setCurrentProducts} from "./redux/actions";
import Landing from "./react/components/Landing/Landing.jsx";
import {Products} from "./react/components/Products";
import Details from "./react/components/Details/Details";
import Cart from "./react/components/Cart/Cart";
import Info from "./Componentes/Info"
import Nosotros from "./Componentes/Nosotros"
import {useAuth0} from "@auth0/auth0-react";
import {NotFound} from "./react/components/Not_Found/Not_Found";
import {Wishlist} from "./react/components/Wishlist/Wishlist";
import UserProfile from "./react/components/UserProfile/UserProfile";
import {ProtectedRoutes} from "./react/components/ProtectedRoutes/ProtectedRoutes";
import {Success} from "./react/components/Purchase/Success";
import InfoPersonal from "./react/components/InfoPersonal/InfoPersonal";
import {UserBanner} from "./react/components/UserProfile/UserBanner";
import {Logout} from "./react/elements/Logout";
import {PurchaseContainer} from "./react/components/Purchase/PurchaseContainer";
import {ReviewSection} from "./react/components/ReviewSection/ReviewSection";
import {UserReviews} from "./react/components/ReviewSection/UserReviews";
import {ReviewForm} from "./react/components/ReviewSection/ReviewForm";


function About() {
    return "about";
}


function App() {
    const dispatch = useDispatch();
    const {user} = useAuth0()

    user && dispatch(getFavorites(user.email))

    useEffect(() => {
        dispatch(getAllProducts());
        delay(2000).then((e) => {
            dispatch(setCurrentProducts());
        });
    },[dispatch]);

    function delay(time) {
        return new Promise((resolve) => setTimeout(resolve, time));
    }

    return (

        <div >
            <Routes>
                <Route exact path={"/"} element={<Landing />}/>
                <Route exact path={"/products"} element={<Products/>}/>
                <Route path={"/about"} element={<About/>}/>
                <Route path={"/products/:id"} element={<Details/>}/>
                <Route path={'/blogInfo'} element={<Info/>}/>
                <Route path={'/Cart'} element={<Cart/>}/>
                <Route path={'/nosotros'} element={<Nosotros/>}/>
                <Route path={'/purchases/success'} element={
                    <ProtectedRoutes>
                        <Success/>
                    </ProtectedRoutes>
                }/>
                <Route path={'/purchases/failure'} element={<Cart/>}/>
                <Route path={'/profile'} element={<UserProfile />}>
                    <Route path={''} element={<UserBanner />} />
                    <Route path={'data'} element={<InfoPersonal />} />
                    <Route path={'purchases'} element={<PurchaseContainer />} />
                    <Route path={'reviews'} element={<UserReviews />} />
                    <Route path={'add-review/:productId'} element={<ReviewForm />} />
                </Route>
                <Route path={'/wishlist'} element={<ProtectedRoutes>
                    <Wishlist/>
                </ProtectedRoutes>}/>
                <Route path={'/logout'} element={<Logout />}/>
                <Route path={'*'} element={<Landing />}/>
                <Route path={'/infoPersonal'} element={<InfoPersonal/>}/>
            </Routes>
        </div>
    )
}

export default App;
