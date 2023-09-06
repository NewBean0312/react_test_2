import classNames from "classnames";
import React from "react";
import {
  Routes,
  Route,
  Navigate,
  useLocation,
  NavLink,
  useParams,
} from "react-router-dom";

function HomeMainPage() {
  return (
    <>
      <h1>Home, Main</h1>
    </>
  );
}

function HomeAboutPage() {
  return (
    <>
      <h1>HOME, ABOUT</h1>
    </>
  );
}

function ArticleListPage() {
  const articles = [{ id: 1 }, { id: 2 }];

  return (
    <>
      <h1>ARTICLE LIST</h1>
      <ul>
        {articles.map((article) => (
          <li key={article.id}>
            <NavLink to={`/article/detail/${article.id}`}>
              {article.id}번 게시물
            </NavLink>
          </li>
        ))}
      </ul>
    </>
  );
}

function ArticleDetailPage() {
  const {id} = useParams();

  return <>
  <h1>ARTICLE DETAIL</h1>
  <h2>{id}번 게시물 상세페이지</h2>
  </>
}

export default function RouterEx() {
  const location = useLocation();

  return (
    <>
      <header>
        현재 주소 : {location.pathname}
        <hr />
        <NavLink
          to="/home/main"
          className={({ isActive }) =>
            classNames(
              "btn",
              { "btn-link": !isActive },
              { "btn-primary": isActive }
            )
          }
        >
          MAIN
        </NavLink>
        <NavLink
          to="/home/about"
          className={({ isActive }) =>
            classNames(
              "btn",
              { "btn-link": !isActive },
              { "btn-primary": isActive }
            )
          }
        >
          ABOUT
        </NavLink>
        <NavLink
          to="/article/list"
          className={({ isActive }) =>
            classNames(
              "btn",
              { "btn-link": !isActive },
              { "btn-primary": isActive }
            )
          }
        >
          ARTICLE LIST
        </NavLink>
      </header>
      <Routes>
        <Route path="/home/main" element={<HomeMainPage />} />
        <Route path="/home/about" element={<HomeAboutPage />} />
        <Route path="/article/list" element={<ArticleListPage />} />
        <Route path="/article/detail/:id" element={<ArticleDetailPage />} />
        <Route path="*" element={<Navigate to="/home/main" />} />
      </Routes>
    </>
  );
}
