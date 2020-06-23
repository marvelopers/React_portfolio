import React from "react";
import { AboutMe, Blog, WriteBlogPage } from "../page";


export const routes = [
  {
    index: 1,
    className: "navbar__menu--list",
    page: "AboutMe",
    path: "/",
    exact: true,
    component: <AboutMe />
  },
  {
    index: 2,
    className: "navbar__menu--list",
    page: "GotoBlog",
    path: "/blog",
    exact: true,
    component: <Blog />
  },
  {
    index: 3,
    className: "navbar__menu--list",
    page: "WRITE",
    path: "/write",
    exact: true,
    component: <WriteBlogPage />
  }
]