import { useState, useRef, useEffect } from "react";

export default function SidebarFooter() {
  const [activeTab, setActiveTab] = useState("chats");
  const [sliderStyle, setSliderStyle] = useState({});
  const tabsRef = useRef([]);

  useEffect(() => {
    const activeTabElement = tabsRef.current.find(
      (tab) => tab?.dataset.tab === activeTab
    );
    if (activeTabElement) {
      const { offsetLeft, offsetWidth } = activeTabElement;
      setSliderStyle({
        left: `${offsetLeft}px`,
        width: `${offsetWidth}px`,
      });
    }
  }, [activeTab]);

  return (
    <div className="sidebar-footer">
      <div className="footer-tab-slider" style={sliderStyle} />
      <button
        ref={(el) => (tabsRef.current[0] = el)}
        data-tab="chats"
        className={`footer-tab ${activeTab === "chats" ? "active" : ""}`}
        onClick={() => setActiveTab("chats")}
      >
        Chats
      </button>
      <button
        ref={(el) => (tabsRef.current[1] = el)}
        data-tab="options"
        className={`footer-tab ${activeTab === "options" ? "active" : ""}`}
        onClick={() => setActiveTab("options")}
      >
        Opciones
      </button>
    </div>
  );
}
