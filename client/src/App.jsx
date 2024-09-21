import React from 'react';
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
import Lend from './pages/Lend';
import * as rb from 'react-bootstrap'
import { StateContextProvider } from './context/Index';
import Loan from './pages/Loan';

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route
        id="base"
        element={
          <>
            <StateContextProvider>
              <Navbar />
              <rb.Container as="main" className="py-4 py-lg-5" fluid="xl">
                <Outlet />
              </rb.Container>
              <Footer />
            </StateContextProvider>
          </>
        }
      >
        <Route
          id="home"
          path="/"
          element={<Home />}
        />
        <Route
          id="lend"
          path="/lend"
          element={<Lend />}
        />
        <Route
          id="loan"
          path="/loan"
          element={<Loan />}
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
