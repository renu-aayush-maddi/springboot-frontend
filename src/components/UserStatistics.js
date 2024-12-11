import React, { useEffect, useRef } from "react";
import "./UserStatistics.css"; // Assuming this is your shared CSS

const UserStatistics = () => {
  const userCanvasRef = useRef(null);
  const blogCanvasRef = useRef(null);

  useEffect(() => {
    // Dummy data for User Statistics (Replace with fetched data from your backend)
    const userStats = {
      "2024-12-01": 10,
      "2024-12-02": 15,
      "2024-12-03": 20,
      "2024-12-04": 25,
      "2024-12-05": 30,
    };

    const blogStats = {
      "2024-12-01": 5,
      "2024-12-02": 10,
      "2024-12-03": 15,
      "2024-12-04": 20,
      "2024-12-05": 25,
    };

    const drawChart = (canvasRef, data, color) => {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");

      // Parse data
      const labels = Object.keys(data);
      const dataPoints = Object.values(data);

      // Chart dimensions
      const chartWidth = canvas.width;
      const chartHeight = canvas.height;
      const padding = 50;

      // Calculate scaling
      const maxData = Math.max(...dataPoints);
      const xStep = (chartWidth - 2 * padding) / (labels.length - 1);
      const yStep = (chartHeight - 2 * padding) / maxData;

      // Clear canvas
      ctx.clearRect(0, 0, chartWidth, chartHeight);

      // Draw axes
      ctx.beginPath();
      ctx.moveTo(padding, padding);
      ctx.lineTo(padding, chartHeight - padding);
      ctx.lineTo(chartWidth - padding, chartHeight - padding);
      ctx.stroke();

      // Plot data
      ctx.beginPath();
      dataPoints.forEach((point, index) => {
        const x = padding + index * xStep;
        const y = chartHeight - padding - point * yStep;

        if (index === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      });
      ctx.strokeStyle = color;
      ctx.lineWidth = 2;
      ctx.stroke();

      // Draw data points
      dataPoints.forEach((point, index) => {
        const x = padding + index * xStep;
        const y = chartHeight - padding - point * yStep;

        ctx.beginPath();
        ctx.arc(x, y, 5, 0, Math.PI * 2);
        ctx.fillStyle = color === "blue" ? "red" : "orange"; // Different colors for points
        ctx.fill();
      });

      // Add labels
      ctx.font = "12px Arial";
      ctx.textAlign = "center";
      labels.forEach((label, index) => {
        const x = padding + index * xStep;
        const y = chartHeight - padding + 20;
        ctx.fillText(label, x, y);
      });

      ctx.textAlign = "right";
      for (let i = 0; i <= maxData; i += Math.ceil(maxData / 10)) {
        const x = padding - 10;
        const y = chartHeight - padding - i * yStep;
        ctx.fillText(i, x, y);
      }
    };

    drawChart(userCanvasRef, userStats, "blue");
    drawChart(blogCanvasRef, blogStats, "green");
  }, []); // Empty dependency array ensures it runs once on mount

  return (
    <div className="user-statistics-container">
      <h1>User & Blog Statistics</h1>

      <div className="charts-container">
        <div className="chart">
          <h2>User Statistics</h2>
          <canvas ref={userCanvasRef} width="800" height="400"></canvas>
        </div>

        <div className="chart">
          <h2>Blog Statistics</h2>
          <canvas ref={blogCanvasRef} width="800" height="400"></canvas>
        </div>
      </div>
    </div>
  );
};

export default UserStatistics;
