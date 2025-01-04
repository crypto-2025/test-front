import React, { lazy } from "react";
import { Navigate } from "react-router-dom";
import HomeLayout from "./layouts";
// import HomePage from "./layouts/Home";


export const routes = [

  {
    path: "/",
    // layout: HomeLayout,
    element: lazy(() => import("src/views/pages/HomePage/Home/Home")),
  },

  {
    path: "/login",
    element: lazy(() =>
      import("src/views/pages/auth/loginAnmation")
    ),
  },

  {
    path: "/sigup",
    element: lazy(() =>
      import("src/views/pages/auth/signUp")
    ),
  },

  {
    path: "/Forget",
    element: lazy(() =>
      import("src/views/pages/auth/forgetPPassword")
    ),
  },
  {
    path: "/Secyirty",
    element: lazy(() =>
      import("src/views/pages/auth/Securityverification")
    ),
  },
  {
    path: "/chat",
    element: lazy(() =>
      import("src/views/pages/chat/Chat.jsx")
    ),
  },

  {
    path: "/Section1",
    element: lazy(() =>
      import("src/component/newItem/section1.jsx")
    ),
  },
  {
    path: "/dashboard",
    element: lazy(() => import("src/views/pages/userdashbord/userdashbord")),
  },


  {
    path: "/1",
    element: lazy(() =>
      import("src/views/pages/userdashbord/WithdrawForm")
    ),
  },
  {
    path: "/2",
    element: lazy(() =>
      import("src/views/pages/userdashbord/ShareForm.jsx")
    ),
  },
  {
    path: "/3",
    element: lazy(() =>
      import("src/views/pages/userdashbord/CreateItemForm")
    ),
  },
  {
    path: "/4",
    element: lazy(() =>
      import("src/views/pages/userdashbord/DepositeUser.jsx")
    ),
  },
  // {
  //   path: "/Mas_Point",
  //   element: lazy(() =>
  //     import("src/views/pages/MasPoint/MasPoint")
  //   ),
  // },


  {
    path: "/profile",
    element: lazy(() => import("src/views/pages/userdashbord/userdashbord")),
    
  },
  {
    path: "/create-account",
    element: lazy(() =>
      import("src/views/pages/auth/signUp")
    ),
  },

  {
    path: "/user-list",
    layout: HomeLayout,
    element: lazy(() => import("src/views/pages/Users/UsersList")),
  },
  {
    path: "/creators",
    layout: HomeLayout,
    element: lazy(() => import("src/views/pages/Users/Searchresult")),
  },

  // {
  //   path: "/chat",
  //   element: () => <Navigate to="/chat/t" />,
  // },

  // {
  //   path: "/chat/:chatId",
  //   layout: HomeLayout,
  //   guard: true,
  //   element: lazy(() => import("src/views/pages/Chat/index")),
  // },

  {
    path: "/",
    layout: HomeLayout,
    guard: true,
    element: lazy(() => import("src/views/pages/Profile/index")),
  },
  {
    path: "/profilesettings",
    layout: HomeLayout,
    // guard: true,
    element: lazy(() => import("src/views/pages/Profile/ProfileSetting")),
  },

  {
    path: "/kyc",
    layout: HomeLayout,
    // guard: true,
    element: lazy(() => import("src/views/pages/Profile/kyc")),
  },
  {
    path: "/buymas",
    layout: HomeLayout,
    // guard: true,
    element: lazy(() => import("src/views/pages/Profile/buymas")),
  },
  {
    path: "/connectWallet",
    layout: HomeLayout,
    // guard: true,
    element: lazy(() => import("src/views/pages/Profile/connectWallet")),
  },

  {
    path: "/WalletContext",
    layout: HomeLayout,
    guard: true,
    element: lazy(() => import("src/views/pages/Profile/WalletContext")),
  },
  {
    path: "/user-profile/:username",
    layout: HomeLayout,
    // guard: true,
    element: lazy(() => import("src/views/pages/Users/UserProfile")),
  },
  // hhhhhhhhh
  {
    path: "/bundles",
    layout: HomeLayout,
    // guard: true,
    element: lazy(() => import("src/views/pages/AllBundles")),
  },

  {
    path: "/items",
    layout: HomeLayout,
    // guard: true,
    element: lazy(() => import("src/views/pages/Allitems")),
  },
  {
    path: "/bundles-details",
    layout: HomeLayout,
    // guard: true,
    element: lazy(() =>
      import("src/views/pages/Profile/Bundles/BundleDetails")
    ),
  },

{
    path: "/items-details",
    layout: HomeLayout,
    // guard: true,
    element: lazy(() =>
      import("src/views/pages/Profile/Items/ItemDetails")
    ),
  },
  
  {
    path: "/auctions",
    layout: HomeLayout,
    // guard: true,
    element: lazy(() => import("src/views/pages/Auctions")),
  },
  {
    path: "/share-audience",
    layout: HomeLayout,
    // guard: true,
    element: lazy(() => import("src/views/pages/Profile/ShareAudience")),
  },


  {
    path: "/refferal",
    layout: HomeLayout,
    guard: true,
    element: lazy(() => import("src/views/pages/UserSignUp/Refferal")),
  },
  {
    path: "/favorite",
    layout: HomeLayout,
    // guard: true,
    element: lazy(() => import("src/views/pages/Home/Favorite")),
  },
  {
    path: "/corporate/:pageName",
    layout: HomeLayout,
    element: lazy(() => import("src/views/pages/staticPage")),
  },

  {
    path: "/404",
    element: lazy(() => import("src/component/global/errors/NotFound")),
  },
  {
    path: "*",
    element: () => <Navigate to="/404" />,
  },
];
