import  Login  from "./pages/login/login";
import Index  from "./pages/index";
import Admin from './pages/admin/index';
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
import Private from "./pages/private/private";
import ShowsTudent from "./components/student/showstudent";
import LoginAdmin from "./pages/loginadmin/loginAdmin";
import A404 from "./pages/404_admin/A404";
import CreateStudent from "./components/student/createstudent";
import CreateLecture from "./components/lecture/createlecture";
import EditStudent from "./components/student/editstudent";
import EditLecture from "./components/lecture/editlecture";
import ShowLecture from "./components/lecture/showlecture";
import ShowSubject from "./components/subject/showsubject";
import CreateSubject from "./components/subject/createsubject";
import EditSubject from "./components/subject/editsubject";
import ShowField from "./components/fields/showfield";
import CreateField from "./components/fields/createfield";
import EditField from "./components/fields/editfield";
import ShowSave from "./pages/save/showsave";
import CreatePrivate from "./pages/private/createprivate";
function App() {
  return (
    <div className="App">
        <Routes>
            <Route path='/'>
            <Route index element={<Login/>} />
            <Route index element={
                <RouteAuth>
                <Index/>
            </RouteAuth>} />
                <Route path="app"  element={
                <RouteAuth>
                    <Index/>
                </RouteAuth>}>
                    <Route index element={<BodyRight/>} />
                    {/* <Route path='app' element={<BodyRight/>} /> */}
                    <Route path="person" element={<Info />}>
                        <Route index element={<Showinfo/>}/>
                        <Route path="changepass" element={<Changepass/>}/>
                        <Route path="changeinfo" element={<Changeinfo/>}/>
                    </Route>
                    <Route path='subject' element={<Subject/>}>
                        <Route path="create" element={<Create/>}>
                            <Route path=":id" element={<Create/>}/>
                        </Route>
                        <Route path="edit" element={<Showsubject/>}>
                            <Route path=":id" element={<Showsubject/>}/>
                            <Route path="update/:id" element={<Create/>}/>
                        </Route>
                        <Route path=":id" element={<Showsubject/>} />
                    </Route>
                    <Route path="private" element={<Private/>}/>
                    <Route path="createprivate" element={<CreatePrivate/>}/>
                    <Route path="save" element={<ShowSave/>}/>
                    <Route path="*" element={<F404 />}/>
                </Route>
                <Route path='login' element={<Login/>} />
                <Route path='admin' element={<Admin/>} >
                    <Route path="fields">
                        <Route path='list' element={<ShowField/>}/>
                        <Route path='create' element={<CreateField/>}/>
                        <Route path='edit/:id' element={<EditField/>}/>
                    </Route>
                    <Route path="subject">
                        <Route path='list' element={<ShowSubject/>}/>
                        <Route path='create' element={<CreateSubject/>}/>
                        <Route path='edit/:id' element={<EditSubject/>}/>
                    </Route>
                    <Route path="student">
                        <Route path='list' element={<ShowsTudent/>}/>
                        <Route path='create' element={<CreateStudent/>}/>
                        <Route path='edit/:id' element={<EditStudent/>}/>
                    </Route>
                    <Route path='lecture'>
                        <Route path='list' element={<ShowLecture/>}/>
                        <Route path='create' element={<CreateLecture/>}/>
                        <Route path='edit/:id' element={<EditLecture/>}/>
                    </Route>
                    <Route path="*" element={<A404/>}/>
                </Route>
                <Route path='loginadmin' element={<LoginAdmin/>} />
            </Route>
            <Route path='*' element={<F404/>} />
        </Routes>
    </div>
  );
}

export default App;
