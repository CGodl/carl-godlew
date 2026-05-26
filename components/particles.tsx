"use client";

import { useRef, useEffect } from "react";
import { useMousePosition } from "@/util/mouse";

type StarColor = "white" | "blue" | "purple";

interface ParticlesProps {
	className?: string;
	quantity?: number;
	staticity?: number;
	ease?: number;
	refresh?: boolean;
	variant?: "default" | "header";
	sizeMin?: number;
	sizeMax?: number;
	speed?: number;
}

type Circle = {
	x: number;
	y: number;
	translateX: number;
	translateY: number;
	size: number;
	alpha: number;
	targetAlpha: number;
	dx: number;
	dy: number;
	magnetism: number;
	color: StarColor;
	twinklePhase: number;
	twinkleSpeed: number;
};

const STAR_COLORS: Record<StarColor, (alpha: number) => string> = {
	white: (a) => `rgba(255, 255, 255, ${a})`,
	blue: (a) => `rgba(147, 197, 253, ${a})`,
	purple: (a) => `rgba(192, 132, 252, ${a})`,
};

function pickStarColor(): StarColor {
	const r = Math.random();
	if (r < 0.6) return "white";
	if (r < 0.85) return "blue";
	return "purple";
}

export default function Particles({
	className = "",
	quantity = 30,
	staticity = 50,
	ease = 50,
	refresh = false,
	variant = "default",
	sizeMin,
	sizeMax,
	speed = 1,
}: ParticlesProps) {
	const isHeader = variant === "header";
	const resolvedSizeMin = sizeMin ?? (isHeader ? 1 : 0.1);
	const resolvedSizeMax = sizeMax ?? (isHeader ? 3.5 : 2.1);
	const resolvedSpeed = isHeader ? speed * 1.5 : speed;

	const canvasRef = useRef<HTMLCanvasElement>(null);
	const canvasContainerRef = useRef<HTMLDivElement>(null);
	const context = useRef<CanvasRenderingContext2D | null>(null);
	const circles = useRef<Circle[]>([]);
	const mousePosition = useMousePosition();
	const mouse = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
	const canvasSize = useRef<{ w: number; h: number }>({ w: 0, h: 0 });
	const dpr = typeof window !== "undefined" ? window.devicePixelRatio : 1;
	const frameRef = useRef<number>(0);

	useEffect(() => {
		if (canvasRef.current) {
			context.current = canvasRef.current.getContext("2d");
		}
		initCanvas();
		frameRef.current = window.requestAnimationFrame(animate);
		window.addEventListener("resize", initCanvas);

		return () => {
			window.removeEventListener("resize", initCanvas);
			if (frameRef.current) {
				window.cancelAnimationFrame(frameRef.current);
			}
		};
	}, []);

	useEffect(() => {
		onMouseMove();
	}, [mousePosition.x, mousePosition.y]);

	useEffect(() => {
		initCanvas();
	}, [refresh]);

	const initCanvas = () => {
		resizeCanvas();
		drawParticles();
	};

	const onMouseMove = () => {
		if (canvasRef.current) {
			const rect = canvasRef.current.getBoundingClientRect();
			const { w, h } = canvasSize.current;
			const x = mousePosition.x - rect.left - w / 2;
			const y = mousePosition.y - rect.top - h / 2;
			const inside = x < w / 2 && x > -w / 2 && y < h / 2 && y > -h / 2;
			if (inside) {
				mouse.current.x = x;
				mouse.current.y = y;
			}
		}
	};

	const resizeCanvas = () => {
		if (canvasContainerRef.current && canvasRef.current && context.current) {
			circles.current.length = 0;
			canvasSize.current.w = canvasContainerRef.current.offsetWidth;
			canvasSize.current.h = canvasContainerRef.current.offsetHeight;
			canvasRef.current.width = canvasSize.current.w * dpr;
			canvasRef.current.height = canvasSize.current.h * dpr;
			canvasRef.current.style.width = `${canvasSize.current.w}px`;
			canvasRef.current.style.height = `${canvasSize.current.h}px`;
			context.current.setTransform(dpr, 0, 0, dpr, 0, 0);
		}
	};

	const circleParams = (): Circle => {
		const x = Math.floor(Math.random() * canvasSize.current.w);
		const y = Math.floor(Math.random() * canvasSize.current.h);
		const size =
			Math.random() * (resolvedSizeMax - resolvedSizeMin) + resolvedSizeMin;
		const targetAlpha = isHeader
			? parseFloat((Math.random() * 0.5 + 0.5).toFixed(2))
			: parseFloat((Math.random() * 0.6 + 0.1).toFixed(1));
		const drift = 0.2 * resolvedSpeed;
		return {
			x,
			y,
			translateX: 0,
			translateY: 0,
			size,
			alpha: isHeader ? targetAlpha : 0,
			targetAlpha,
			dx: (Math.random() - 0.5) * drift,
			dy: (Math.random() - 0.5) * drift,
			magnetism: 0.1 + Math.random() * 4,
			color: isHeader ? pickStarColor() : "white",
			twinklePhase: Math.random() * Math.PI * 2,
			twinkleSpeed: 0.02 + Math.random() * 0.03,
		};
	};

	const drawCircle = (circle: Circle, update = false) => {
		if (!context.current) return;

		let drawAlpha = circle.alpha;
		if (isHeader) {
			drawAlpha =
				circle.targetAlpha *
				(0.75 + 0.25 * Math.sin(circle.twinklePhase));
		}

		const { x, y, translateX, translateY, size, color } = circle;
		context.current.translate(translateX, translateY);
		context.current.beginPath();
		context.current.arc(x, y, size, 0, 2 * Math.PI);
		context.current.fillStyle = STAR_COLORS[color](drawAlpha);
		context.current.fill();
		context.current.setTransform(dpr, 0, 0, dpr, 0, 0);

		if (!update) {
			circles.current.push(circle);
		}
	};

	const clearContext = () => {
		if (context.current) {
			context.current.clearRect(
				0,
				0,
				canvasSize.current.w,
				canvasSize.current.h,
			);
		}
	};

	const drawParticles = () => {
		clearContext();
		for (let i = 0; i < quantity; i++) {
			drawCircle(circleParams());
		}
	};

	const remapValue = (
		value: number,
		start1: number,
		end1: number,
		start2: number,
		end2: number,
	): number => {
		const remapped =
			((value - start1) * (end2 - start2)) / (end1 - start1) + start2;
		return remapped > 0 ? remapped : 0;
	};

	const animate = () => {
		clearContext();
		circles.current.forEach((circle, i) => {
			const edge = [
				circle.x + circle.translateX - circle.size,
				canvasSize.current.w - circle.x - circle.translateX - circle.size,
				circle.y + circle.translateY - circle.size,
				canvasSize.current.h - circle.y - circle.translateY - circle.size,
			];
			const closestEdge = edge.reduce((a, b) => Math.min(a, b));
			const edgeFade = isHeader
				? 1
				: parseFloat(remapValue(closestEdge, 0, 20, 0, 1).toFixed(2));

			if (isHeader) {
				circle.alpha = circle.targetAlpha;
			} else if (edgeFade > 1) {
				circle.alpha += 0.02;
				if (circle.alpha > circle.targetAlpha) {
					circle.alpha = circle.targetAlpha;
				}
			} else {
				circle.alpha = circle.targetAlpha * edgeFade;
			}

			circle.twinklePhase += circle.twinkleSpeed;
			circle.x += circle.dx;
			circle.y += circle.dy;
			circle.translateX +=
				(mouse.current.x / (staticity / circle.magnetism) - circle.translateX) /
				ease;
			circle.translateY +=
				(mouse.current.y / (staticity / circle.magnetism) - circle.translateY) /
				ease;

			if (
				circle.x < -circle.size ||
				circle.x > canvasSize.current.w + circle.size ||
				circle.y < -circle.size ||
				circle.y > canvasSize.current.h + circle.size
			) {
				circles.current.splice(i, 1);
				drawCircle(circleParams());
			} else {
				drawCircle({ ...circle }, true);
			}
		});
		frameRef.current = window.requestAnimationFrame(animate);
	};

	return (
		<div className={className} ref={canvasContainerRef} aria-hidden="true">
			<canvas ref={canvasRef} />
		</div>
	);
}
