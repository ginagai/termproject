import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery"; // 如果你添加了照片画廊页面

const App = () => {
    return (
        <Router>
            <div>
                {/* 导航栏组件 */}
                <Navbar />

                {/* 路由配置 */}
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/skills" element={<Skills />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/gallery" element={<Gallery />} /> {/* 照片画廊 */}
                </Routes>
            </div>
        </Router>
    );
};

export default App;
