import  Login  from "./pages/login/login";
import Index  from "./pages/index";
import { Routes,Route } from "react-router-dom";
import F404 from "./pages/F404/F404";
import BodyRight from "./components/body/body_right";
import Info from "./pages/info/info";
import Create from "./pages/subject/create";
import Changepass from "./components/changepass/changepass";
import Changeinfo from "./components/changeinfo/changeinfo";
import Showinfo from "./pages/info/showinfo";
import Subject from "./pages/subject/subject";
import Showsubject from "./pages/subject/showsubject";
import RouteAuth from "./routeAuth";
function App() {
  return (
    <div className="App">
        <Routes>
            <Route path='/' element={
                <RouteAuth>
                    <Index/>
                </RouteAuth>
            } >
                <Route index element={<BodyRight/>} />
                <Route path='app' element={<BodyRight/>} />
                <Route path="person" element={<Info />}>
                    <Route index element={<Showinfo/>}/>
                    <Route path="changepass" element={<Changepass/>}/>
                    <Route path="changeinfo" element={<Changeinfo/>}/>
                </Route>
                <Route path='/subject' element={<Subject/>}>
                    <Route path="create" element={<Create/>}>
                        <Route path=":id" element={<Create/>}/>
                    </Route>
                    <Route path=":id" element={<Showsubject/>} />
                </Route>
                <Route path="*" element={<F404 />}/>
            </Route>
            <Route path='/login' element={<Login/>} />
            <Route path='*' element={<F404/>} />
        </Routes>
    </div>
  );
}

export default App;
