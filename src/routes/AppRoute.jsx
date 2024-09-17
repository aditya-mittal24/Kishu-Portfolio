import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from '../components/Home/Home';
import NoRouteFound from './NoRouteFound';

function AppRoute() {
  return (
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="*" element={<NoRouteFound />} />
    </Routes>
  )
}

export {AppRoute as Routes}