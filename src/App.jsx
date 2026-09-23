import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import CallForPapers from './pages/CallForPapers.jsx';
import ImportantDates from './pages/ImportantDates.jsx';
import Committee from './pages/Committee.jsx';
import Registration from './pages/Registration.jsx';
import Contact from './pages/Contact.jsx';

function NotFound() {
  return (
    <>
      <div className="page-banner">
        <div className="container">
          <p className="breadcrumb">
            <a href="./">Home</a>
            <span>/</span>
            <span>Not found</span>
          </p>
          <h1>Page not found</h1>
          <p>The page you are looking for does not exist. Please use the navigation above.</p>
        </div>
      </div>
      <section className="section">
        <div className="container">
          <a className="button" href="./">
            Back to home
          </a>
        </div>
      </section>
    </>
  );
}

// Both clean URLs (/about) and legacy .html URLs (/about.html) are
// supported so existing links, bookmarks, and search results keep working.
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="index.html" element={<Navigate to="/" replace />} />
          <Route path="about" element={<About />} />
          <Route path="about.html" element={<About />} />
          <Route path="call-for-papers" element={<CallForPapers />} />
          <Route path="call-for-papers.html" element={<CallForPapers />} />
          <Route path="important-dates" element={<ImportantDates />} />
          <Route path="important-dates.html" element={<ImportantDates />} />
          <Route path="committee" element={<Committee />} />
          <Route path="committee.html" element={<Committee />} />
          <Route path="registration" element={<Registration />} />
          <Route path="registration.html" element={<Registration />} />
          <Route path="contact" element={<Contact />} />
          <Route path="contact.html" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
