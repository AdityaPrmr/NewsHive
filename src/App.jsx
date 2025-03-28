import {
  Routes,
  Route,
  HashRouter as Router,
  Navigate,
} from "react-router-dom";
import Home from "./Pages/Home";
import NewsInfo from "./Pages/NewsInfo";
import MainLayout from "./dashboard/layout/MainLayout";
import WriterIndex from "./dashboard/pages/WriterIndex";
import AddWriter from "./dashboard/pages/AddWriter";
import Writers from "./dashboard/pages/Writers";
import Login from "./dashboard/pages/Login";
import Profile from "./dashboard/pages/Profile";
function App() {
  return (
    <Router>
      <Routes>
        {/* Redirect root to /NewsHive */}
        <Route path="/" element={<Navigate to="/NewsHive" />} />
        <Route path="/login" element={<Login />} />
        {/* Define Routes */}
        <Route path="/NewsHive" element={<Home />} />
        {/* Nested Route inside MainLayout */}
        <Route path="/admin" element={<MainLayout />}>
          <Route path="writer/add" element={<AddWriter />} />
          <Route path="writers" element={<Writers />} />
          <Route path="profile" element={<Profile />} />
        </Route>

        <Route path="/news/:id" element={<NewsInfo />} />
        {/* Catch-all route for 404 */}
        {/* <Route path="*" element={<Navigate to="/NewsHive" />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
