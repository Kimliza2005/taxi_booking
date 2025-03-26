import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route, Outlet, Router } from "react-router-dom"
import CustomerMainLyout from './Layouts/CustomerLayout/CustomerMainLayout'
import CustomerHeader from './assets/components/Headers/CustomerHeader'
import RouteNotFound from './assets/components/RouteNotFound/RouteNotFound'
import Buses from './FrontEnd/CustomerPages/BusesPage'
import BranchesPage from './FrontEnd/CustomerPages/BranchesPage'
import AboutPage from './FrontEnd/CustomerPages/AboutPage'
import FAQsPage from './FrontEnd/CustomerPages/FAQsPage'
import LoginPage from './FrontEnd/CustomerPages/LoginPage'
import AdminLayout from './Layouts/AdminLayout/AdminLayout'
import HomePage from './FrontEnd/AdminPages/HomePage'
import TravelSearch from './FrontEnd/CustomerPages/TravelSearch'
import PrivacyPolicy from './FrontEnd/CustomerPages/PrivacyPolicy'
import AccountSettings from './FrontEnd/CustomerPages/AccountSitting'
import TermAndCondition from './FrontEnd/CustomerPages/TermAndCondition'



function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<CustomerMainLyout />}>
            <Route path='/' element={<Buses />} />
            <Route path='/branches' element={<BranchesPage />} />
            <Route path='/about' element={<AboutPage />} />
            <Route path='/faqs' element={<FAQsPage />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/travelsearch' element={<TravelSearch />} />
            <Route path='/privacypolicy' element={<PrivacyPolicy />} />
            <Route path='/accountsitting' element={<AccountSettings />} />
            <Route path='/termcondition' element={<TermAndCondition />}/>
            <Route path="*" element={<RouteNotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App


