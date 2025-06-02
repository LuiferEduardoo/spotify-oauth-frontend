import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { AuthProvider } from "../providers/AuthContext.provider";

import AccessControl from "./AccessControl.route";
import Terms from "../pages/terms";
import PrivacyPolicy from "../pages/privacyPolicy";

const AppRouter: React.FC = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<AccessControl />} />
          <Route path="/terms" element={<Terms />} />
           <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default AppRouter;