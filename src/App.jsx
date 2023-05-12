import React from "react";
import { Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import HomePageWrapper from "./pages/HomePage";
import DetailNotePageWrapper from "./pages/DetailNotePage";
import PageNotFound from "./pages/PageNotFound";
import AddNotePage from "./pages/AddNotePage";
import ArchivePageWrapper from "./pages/ArchivePage";

function App() {
  return (
    <div className="app-container">
      <header>
        <Navigation />
      </header>
      <main>
        <Routes>
          <Route path="/*" element={<PageNotFound />} />
          <Route path="/" element={<HomePageWrapper />} />
          <Route path="/notes/:id" element={<DetailNotePageWrapper />} />
          <Route path="/archives" element={<ArchivePageWrapper />} />
          <Route path="/notes/new" element={<AddNotePage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
