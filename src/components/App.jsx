import { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Loader } from "components/Loader/Loader";


const Layout = lazy(() => import('./Layout/Layout'));

export const App = () => {
  return (
    <>
       <Suspense fallback={<Loader/>}>
        <Routes>
          <Route path="/" element={<Layout />}>         
            <Route path="*" element={<Navigate to={'/'} />} />
            </Route>  
        </Routes>
      </Suspense>
    </>
  );
};


