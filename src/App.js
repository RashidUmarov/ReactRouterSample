import {Routes, Route} from "react-router-dom";

import {Home} from "./pages/Homepage";
import {About} from "./pages/Aboutpage";
import {Blog} from "./pages/Blogpage";
import {Singlepage} from './pages/Singlepage';
import {Notfoundpage} from "./pages/Notfoundpage";

import {Layout} from "./components/Layout";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<Home/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/posts" element={<Blog/>}/>
                    <Route path="/posts/:id" element={<Singlepage/>}/>
                    <Route path="*" element={<Notfoundpage/>}/>
                </Route>
            </Routes>
        </>
    );
}

export default App;
