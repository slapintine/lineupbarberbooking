import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import DownloadAppPage from "./pages/DownloadAppPage";
import FAQPage from "./pages/FAQPage";
import ForBarbersPage from "./pages/ForBarbersPage";
import ForCustomersPage from "./pages/ForCustomersPage";
import HomePage from "./pages/HomePage";
import HowItWorksPage from "./pages/HowItWorksPage";
import LegalPage from "./pages/LegalPage";
import PricingPage from "./pages/PricingPage";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/how-it-works" element={<HowItWorksPage />} />
        <Route path="/for-customers" element={<ForCustomersPage />} />
        <Route path="/for-barbers" element={<ForBarbersPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/download-app" element={<DownloadAppPage />} />
        <Route path="/legal" element={<LegalPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}
