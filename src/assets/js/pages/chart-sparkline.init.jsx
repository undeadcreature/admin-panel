import React, { useEffect, useState } from "react";
import $ from "jquery"; //If you are using jQuery for Sparkline initialization
import "jquery-sparkline"; // Sparkline plugin (install via npm or include via CDN)

const DashboardCharts = () => {
  // State for mousemove-based Sparkline
  const [sparklineData, setSparklineData] = useState([]);
  const [pixelsPerSecond, setPixelsPerSecond] = useState(0);

  // Function to initialize Sparklines
  const initSparklines = () => {
    $("#sparkline1").sparkline([0, 23, 43, 35, 44, 45, 56, 37, 40], {
      type: "line",
      width: "100%",
      height: "165",
      chartRangeMax: 50,
      lineColor: "#5b69bc",
      fillColor: "rgba(91, 105, 188, 0.3)",
      highlightLineColor: "rgba(0,0,0,.1)",
      highlightSpotColor: "rgba(0,0,0,.2)",
    });
    $("#sparkline1").sparkline([25, 23, 26, 24, 25, 32, 30, 24, 19], {
      type: "line",
      width: "100%",
      height: "165",
      chartRangeMax: 40,
      lineColor: "#ff8acc",
      fillColor: "rgba(255, 138, 204, 0.3)",
      composite: true,
      highlightLineColor: "rgba(0,0,0,.1)",
      highlightSpotColor: "rgba(0,0,0,.2)",
    });

    $("#sparkline2").sparkline([3, 6, 7, 8, 6, 4, 7, 10, 12, 7, 4, 9, 12, 13, 11, 12], {
      type: "bar",
      height: "165",
      barWidth: "10",
      barSpacing: "3",
      barColor: "#71b6f9",
    });

    $("#sparkline3").sparkline([20, 40, 30], {
      type: "pie",
      width: "165",
      height: "165",
      sliceColors: ["#f5f5f5", "#188ae2", "#ff8acc"],
    });

    $("#sparkline4").sparkline([0, 23, 43, 35, 44, 45, 56, 37, 40], {
      type: "line",
      width: "100%",
      height: "165",
      chartRangeMax: 50,
      lineColor: "#10c469",
      fillColor: "transparent",
      highlightLineColor: "rgba(0,0,0,.1)",
      highlightSpotColor: "rgba(0,0,0,.2)",
    });
    $("#sparkline4").sparkline([25, 23, 26, 24, 25, 32, 30, 24, 19], {
      type: "line",
      width: "100%",
      height: "165",
      chartRangeMax: 40,
      lineColor: "#188ae2",
      fillColor: "transparent",
      composite: true,
      highlightLineColor: "rgba(0,0,0,1)",
      highlightSpotColor: "rgba(0,0,0,1)",
    });
  };

  // Mouse movement Sparkline logic
  const handleMouseMove = (e) => {
    const newPoint = Math.max(
      Math.abs(e.pageX - e.clientX || 0),
      Math.abs(e.pageY - e.clientY || 0)
    );
    setPixelsPerSecond((prev) => [...prev, newPoint].slice(-30));
  };

  // Sparkline update on resize
  const handleResize = () => {
    clearTimeout(window.resizeTimer);
    window.resizeTimer = setTimeout(() => {
      initSparklines();
    }, 300);
  };

  useEffect(() => {
    // Initialize Sparklines
    initSparklines();

    // Mousemove logic
    document.addEventListener("mousemove", handleMouseMove);

    // Resize logic
    window.addEventListener("resize", handleResize);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <div id="sparkline1" />
      <div id="sparkline2" />
      <div id="sparkline3" />
      <div id="sparkline4" />
      <div id="sparkline5" />
    </div>
  );
};

export default DashboardCharts;
