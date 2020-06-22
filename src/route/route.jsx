import React from "react";
import { AboutMe, Blog, WriteBlogPage } from "../page";


export const routes = [
  {
    className: "navbar__menu--list",
    page: "AboutMe",
    path: "/",
    exact: true,
    component: <AboutMe />
  },
  {
    className: "navbar__menu--list",
    page: "GotoBlog",
    path: "/blog",
    exact: true,
    component: <Blog />
  },
  {
    className: "navbar__menu--list",
    page: "WRITE",
    path: "/write",
    exact: true,
    component: <WriteBlogPage />
  }
]