import { MdOutlineSubscriptions } from "react-icons/md";
import { FaList, FaCartPlus, FaTools, FaBlog } from "react-icons/fa";
import { FiBell } from "react-icons/fi";
import { HomeIcon, PersonIcon } from "./components/Icons/Icons";
import Home from "./pages/App/Home/components/Home";
import MyProducts from "./pages/App/Products/components/MyProduct";
import UserProfile from "./pages/App/Profile/components/UserProfile";
import User from "./pages/App/Users/components/User";
import Subscription from "./pages/App/Subscriptions/components/Subscription";
import AddProduct from "./pages/App/Products/components/AddProduct.js";
import EditProduct from "./pages/App/Products/components/EditProduct.js";
import ProductDetails from "./pages/App/Products/components/ProductDetails.js";
import Cart from "./pages/App/Products/components/Cart.js";
import PublicHome from "./pages/Public/components/Home";
import SignIn from "./pages/Auth/SignIn";
import SignUp from "./pages/Auth/SignUp";
import EditProductModal from "./pages/App/Products/components/EditProduct.js";
// import IamHomePage from "./pages/IAM/IamHomePage";

var appRoutes = [
  {
    id: "app1",
    path: "/home",
    name: "Home",
    icon: <HomeIcon />,
    component: Home,
    layout: "/app",
    access: true,
  },
  {
    id: "app2",
    path: "/products",
    name: "My Products",
    icon: <FaCartPlus color="inherit" />,
    component: MyProducts,
    layout: "/app",
    access: true,
  },
  {
    id: "app4",
    path: "/profile",
    name: "Profile",
    icon: <PersonIcon color="inherit" />,
    component: UserProfile,
    layout: "/app",
    access: true,
  },
  // {
  //   id: "app5",
  //   path: "/settings",
  //   name: "Settings",
  //   icon: <SettingsIcon color="inherit" />,
  //   component: Setting,
  //   layout: "/app",
  // },
  {
    id: "app6",
    path: "/users",
    name: "Users",
    icon: <FaList color="inherit" />,
    component: User,
    layout: "/app",
  },
  {
    id: "app8",
    path: "/notifications",
    name: "Notification",
    icon: <FiBell />,
    component: Notification,
    layout: "/app",
  },
  {
    id: "app9",
    path: "/subscriptions",
    name: "Subscriptions",
    icon: <MdOutlineSubscriptions />,
    component: Subscription,
    layout: "/app",
  },
  {
    id: "app11",
    path: "/newproduct",
    name: "New Product",
    icon: <FaTools />,
    component: AddProduct,
    layout: "/app",
  },
  {
    id: "app11",
    path: "/editproduct",
    name: "Edit Product",
    icon: <FaTools />,
    component: EditProduct,
    layout: "/app",
  },
  {
    id: "app12",
    path: "/productdetails/:productId",
    name: "Product Details",
    icon: <FaTools />,
    component: ProductDetails,
    layout: "/app",
  },
  {
    id: "app13",
    path: "/cart",
    name: "Cart",
    icon: <FaTools />,
    component: Cart,
    layout: "/app",
  },
  {
    id: "app14",
    path: "/public",
    name: "public",
    icon: <FaTools />,
    component: PublicHome,
    layout: "/app",
  },
  {
    id: "app15",
    path: "/signin",
    name: "Signin",
    icon: <FaTools />,
    component: SignIn,
    layout: "/app",
  },
  {
    id: "app16",
    path: "/signup",
    name: "Signup",
    icon: <FaTools />,
    component: SignUp,
    layout: "/app",
  },
  {
    id: "app18",
    path: "/productedit/:productId",
    name: "Edit Product",
    icon: <FaBlog color="inherit" />,
    component: EditProductModal,
    layout: "/app",
  },
];
export default appRoutes;
