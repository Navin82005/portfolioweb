import React, { useEffect, useRef, useState } from "react";
import "./GitHubSnake.css"; // Make sure this file exists and is styled correctly

const GitHubSnake = () => {
    const gridRef = useRef(null);
    const [data, setData] = useState([]);
    const gridWidth = 53; // GitHub grid width
    const gridHeight = 7;  // GitHub grid height

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch(
                "https://github-user-contribution.platane.workers.dev/github-user-contribution/Navin82005"
            );
            const raw = await res.json();
            const contributions = raw.contributions || raw;
            setData(contributions);
        };

        fetchData();
    }, []);

    useEffect(() => {
        if (data.length === 0 || !gridRef.current) return;

        const container = gridRef.current;
        container.innerHTML = "";

        const grid = Array.from({ length: gridWidth * gridHeight }, (_, i) => {
            const x = i % gridWidth;
            const y = Math.floor(i / gridWidth);
            const cell = document.createElement("div");
            cell.className = "cell";
            cell.style.gridColumn = x + 1;
            cell.style.gridRow = y + 1;
            container.appendChild(cell);
            return { x, y, el: cell };
        });

        const foodPath = [];
        data.forEach(d => {
            for (let i = 0; i < d.count; i++) {
                foodPath.push({ x: d.x, y: d.y });
            }
        });

        let head = foodPath[0] || { x: 0, y: 0 };
        let snake = [];
        let foodIndex = 0;

        const moveToward = (from, to) => {
            if (from.x < to.x) return { x: from.x + 1, y: from.y };
            if (from.x > to.x) return { x: from.x - 1, y: from.y };
            if (from.y < to.y) return { x: from.x, y: from.y + 1 };
            if (from.y > to.y) return { x: from.x, y: from.y - 1 };
            return from;
        };

        const tick = () => {
            const target = foodPath[foodIndex % foodPath.length];
            const next = moveToward(head, target);
            head = next;
            snake.push({ ...head });

            const idx = head.y * gridWidth + head.x;
            if (grid[idx]) {
                grid[idx].el.classList.add("snake-head");
                grid[idx].el.classList.remove("food");

                if (snake.length > 1) {
                    const prev = snake[snake.length - 2];
                    const prevIdx = prev.y * gridWidth + prev.x;
                    grid[prevIdx]?.el.classList.replace("snake-head", "snake-body");
                }
            }

            if (head.x === target.x && head.y === target.y) {
                foodIndex++;
            } else {
                const tail = snake.shift();
                const tailIdx = tail.y * gridWidth + tail.x;
                grid[tailIdx]?.el.classList.remove("snake-body", "snake-head");
            }
        };

        const interval = setInterval(tick, 120);
        return () => clearInterval(interval);
    }, [data]);

    return (
        <div className="snake-wrapper">
            <div ref={gridRef} className="snake-grid"></div>
            <h2 className="snake-title">🐍 GitHub Snake — Contribution Tracker</h2>
        </div>
    );
};

export default GitHubSnake;