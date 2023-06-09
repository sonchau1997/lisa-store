
import './App.css';
import "react-multi-carousel/lib/styles.css";
import PrimaryLayout from 'components/Layout';
import { useRoutes } from 'react-router-dom';
import DashBoard from 'Admin-Page/Dasboard';



function App() {
 
   
    //<PrimaryLayout></PrimaryLayout>
    return useRoutes([
      { path: "/", element: <PrimaryLayout />,},
      { path: "admin", element: <DashBoard/> },
  
    ]);

}

export default App;
