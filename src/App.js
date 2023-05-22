import "./App.css";
import { Route, Routes } from "react-router-dom";
import {
  Header,
  Home,
  Library,
  Collab,
  News,
  About,
  Updates,
  Dashboard,
  BottomNav,
  Footer
} from "./components";
import { AnimatePresence } from "framer-motion";
import ScrollToTop from "./utils/ScrollToTopButton";

function App() {
  return (
    // Animate the presence
    <AnimatePresence exitBeforeEnter>
      <div className="w-auto flex flex-col flex-wrap overflow-hidden">
        <ScrollToTop/>
        <Header/>
        <div className="flex justify-center items-center">
          <BottomNav/>
        </div>
        <main className="mt-16 lg:mt-24 mb-10 p-2 sm:p-4">
          <Routes>
            <Route path="/*" element={<Home />} />
            <Route path="/library" element={<Library />} />
            <Route path="/collab" element={<Collab />} />
            <Route path="/ai-news" element={<News />} />
            <Route path="/about-us" element={<About />} />
            <Route path="/updates" element={<Updates />} />
            <Route path="/user/dashboard" element={<Dashboard />} />
          </Routes>
        </main>
        <Footer/>
      </div>
    </AnimatePresence>
  );
}

export default App;
