import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Tab from "@/components/tab/Tab";

const tabs = [
  { label: "Home", id: "/" },
  { label: "About", id: "/about" },
  { label: "Schedule", id: "/schedule" },
  { label: "Projects", id: "/projects" },
  { label: "Resume", id: "/resume" },
  { label: "Contact", id: "/contact" },
];

const Nav = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState(location.pathname);

  useEffect(() => {
    const savedTab = sessionStorage.getItem("activeTab");
    if (savedTab) {
      setActiveTab(savedTab);
      navigate(savedTab);
    } else {
      setActiveTab(location.pathname);
    }
  }, [location.pathname, navigate]);

  function handleTab(id) {
    setActiveTab(id);
    navigate(id);
    sessionStorage.setItem("activeTab", id);
  }

  return (
    <div
      className="fixed w-full top-0 z-10 bg-opacity-80"
      style={{
        backdropFilter: "blur(15px)",
      }}
    >
      <Tab tabs={tabs} activeTab={activeTab} handleTab={handleTab} />
    </div>
  );
};

export default Nav;
