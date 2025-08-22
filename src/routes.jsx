// Import necessary components and functions from react-router-dom.
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
} from "react-router-dom";
import { Layout } from "./pages/Layout";
import { Home } from "./pages/Home";
import { Single } from "./pages/Single";
import { Demo } from "./pages/Demo";
import {LearnMore} from "./pages/LearnMore"
import LearnMorePlanets from "./pages/LearnMorePLanets";

export const router = createBrowserRouter(
    createRoutesFromElements(

      // Root Route: All navigation will start from here.
      <Route path="/" element={<Layout />} errorElement={<h1>Not found!</h1>} >

        
        <Route path= "/" element={<Home />} />
        <Route path="/single/:theId" element={ <Single />} />  
        <Route path="/demo" element={<Demo />} />
        <Route path="/a" element={<Lear />} />
        <Route path="/b" element={<LearnMorePlanets />} />
        <Route path="/c" element={<Lea />} />
        <Route path="/learn-more/:tipo/:id" element={<LearnMore />} />
      </Route>
    )
);