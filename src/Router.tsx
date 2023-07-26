import { Route, Routes } from "react-router-dom";
import { Event } from "./pages/Event";
import { Subscribe } from "./pages/Subscribe";
import { MainPage } from "./pages/MainPage";

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/inscricao" element={<Subscribe />} />
            <Route path="/evento" element={<Event />} />
            <Route path="/evento/aula/:slug" element={<Event />} />
        </Routes>
    )
}