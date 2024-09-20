import React from 'react';
import './App.css';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
  RouterProvider,
  Outlet,
} from 'react-router-dom'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import * as rb from 'react-bootstrap'

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route
        id="base"
        element={
          <>
            <Navbar />
            <rb.Container as="main" className="py-4 py-lg-5" fluid="xl">
              <Outlet />
            </rb.Container>
            <Footer />
          </>
        }
      >
        <Route
          id="home"
          path="/"
          element={<Home />}
        />

      </Route>
    )
  )
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
