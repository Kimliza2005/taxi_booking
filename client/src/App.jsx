import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route, Outlet, Router } from "react-router-dom"
import CustomerMainLayout from './Layouts/CustomerLayout/CustomerMainLayout'
import RouteNotFound from './assets/components/RouteNotFound/RouteNotFound'
import Buses from './FrontEnd/CustomerPages/BusesPage'
import BranchesPage from './FrontEnd/CustomerPages/BranchesPage'
import AboutPage from './FrontEnd/CustomerPages/AboutPage'
import FAQsPage from './FrontEnd/CustomerPages/FAQsPage'
import LoginPage from './FrontEnd/CustomerPages/LoginPage'
import TravelSearch from './FrontEnd/CustomerPages/TravelSearch'
import PrivacyPolicy from './FrontEnd/CustomerPages/PrivacyPolicy'
import AccountSettings from './FrontEnd/CustomerPages/Profile'
import TermAndCondition from './FrontEnd/CustomerPages/TermAndCondition'
import DashboardPage from './FrontEnd/AdminPages/DashboardPage'
import Profile from './FrontEnd/CustomerPages/Profile'
import AdminMainLayout from './Layouts/AdminLayout/AdminMainLayout'
import DriverMainLayout from './Layouts/DriverLayout/DriverMainLayout'
import SideBar from './FrontEnd/AdminPages/Sidebar'


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* user */}
          <Route path="/" element={<CustomerMainLayout />}>
            <Route index element={<Buses />} />
            <Route path='/branches' element={<BranchesPage />} />
            <Route path='/about' element={<AboutPage />} />
            <Route path='/faqs' element={<FAQsPage />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/travelsearch' element={<TravelSearch />} />
            <Route path='/privacypolicy' element={<PrivacyPolicy />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/termcondition' element={<TermAndCondition />} />
            <Route path="*" element={<RouteNotFound />} />
          </Route>

          {/* admin */}

          <Route path='/admin' element={<AdminMainLayout />}>
            <Route index element={<SideBar />} />
            <Route />
          </Route>
          {/* driver */}
          <Route path='/driver' element={<DriverMainLayout />}>

            <Route />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App


