import React from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";

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

export default function RouterEx() {
  const location = useLocation();

  return (
    <>
      <header>현재 주소 : {location.pathname}</header>
      <Routes>
        <Route path="/home/main" element={<HomeMainPage />} />
        <Route path="/home/about" element={<HomeAboutPage />} />
        <Route path="*" element={<Navigate to="/home/main" />} />
      </Routes>
    </>
  );
}
