"use client";

import { useRef, useState, FC } from "react";
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";
import { handleSmoothScroll } from "@/app/lib/utils";

interface ContentProps {}

const Content: FC<ContentProps> = () => {
	const section1 = useRef<HTMLDivElement>(null);
	const section2 = useRef<HTMLDivElement>(null);
	const section3 = useRef<HTMLDivElement>(null);
	const [toggle, setToggle] = useState<boolean>(true);

	return (
		<div>
			<div
				ref={section1}
				className={`max-w-6xl w-11/12 mx-auto h-screen py-16 flex flex-col items-center ${
					!toggle ? "justify-between" : "justify-center"
				}`}
			>
				<button
					onClick={() => {
						setToggle(!toggle);
					}}
					className={`${
						!toggle ? "animate-pulse" : "animate-bounce"
					} bg-primary hover:bg-primary/70 duration-200 ease-in-out transition-all text-secondary text-2xl font-semibold px-[30px] py-[15px] rounded-full hover:shadow-md hover:shadow-[#7b0044ad]`}
				>
					{toggle ? "Press the button" : "Reset"}
				</button>

				{!toggle && (
					<div className="font-semibold text-4xl text-center">
						<h1>Happy</h1>
						<h1>Monthsary</h1>
						<h1>Baby 🤍</h1>
					</div>
				)}

				{!toggle && (
					<TiArrowSortedDown
						size={45}
						className="cursor-pointer transition duration-100 hover:scale-125 animate-pulse"
						onClick={() => {
							handleSmoothScroll(section2);
						}}
					/>
				)}
			</div>

			<div
				ref={section2}
				className={`max-w-6xl w-11/12 mx-auto h-screen py-16 flex flex-col items-center ${
					!toggle ? "justify-between" : "justify-center"
				}`}
			>
				<TiArrowSortedUp
					size={45}
					className="cursor-pointer transition duration-100 hover:scale-125 animate-pulse"
					onClick={() => {
						handleSmoothScroll(section1);
					}}
				/>

				<div className="flex flex-col gap-8 text-center">
					<div className="font-semibold text-4xl">
						<h1>I Love You</h1>
						<h1>So Much Baby</h1>
						<h1>(⁠ ⁠˘⁠ ⁠³⁠˘⁠)⁠♥</h1>
					</div>
					<div className="font-semibold">
						<p>from bebe mo: Ken</p>
						<p>to bebe ko: Stella</p>
					</div>
					<div className="italic">
						<p>09-15-22</p>
						<p>Recent Monthsary: 02-15-24</p>
					</div>
				</div>

				<div className="flex flex-col items-center justify-center">
					<p className="text-sm">View Gallery</p>
					<TiArrowSortedDown
						onClick={() => {
							handleSmoothScroll(section3);
						}}
						size={45}
						className="cursor-pointer transition duration-100 hover:scale-125 animate-pulse"
					/>
				</div>
			</div>

			<div
				ref={section3}
				className="max-w-6xl w-11/12 mx-auto h-full flex flex-col items-center"
			>
				<div className="flex flex-col items-center justify-center">
					<TiArrowSortedUp
						size={45}
						className="cursor-pointer transition duration-100 hover:scale-125 animate-pulse"
						onClick={() => {
							handleSmoothScroll(section2);
						}}
					/>
				</div>
			</div>
		</div>
	);
};

export default Content;
