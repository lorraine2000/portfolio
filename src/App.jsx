import React from 'react';
import MainLayout from "./Layout/MainLayout";
import RoutesPath from "./Routes/RoutesPath";

function App() {
  return (
    <>
    
      {/* MainLayout contains shared UI like navbar, footer, etc. */}
      <MainLayout>
        {/* RoutesPath defines all page routes */}
        <RoutesPath />
      </MainLayout>
    </>
  );
}

export default App;
