import { FC } from "react";
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";

interface SectionProps {
	toggle: boolean;
	handleSmoothScroll: (ref: any) => void;
	children: React.ReactNode;
	hasArrowUp: boolean;
	hasArrowDown: boolean;
	currentRef: any;
	prevRef: any;
	nextRef: any;
}

const Section: FC<SectionProps> = ({
	toggle,
	handleSmoothScroll,
	children,
	hasArrowUp,
	hasArrowDown,
	currentRef,
	prevRef,
	nextRef,
}) => {
	return (
		<section
			ref={currentRef}
			className={`max-w-6xl w-11/12 mx-auto h-full py-16 flex flex-col items-center ${
				!toggle ? "justify-between" : "justify-center"
			}`}
		>
			{hasArrowUp && (
				<TiArrowSortedUp
					size={45}
					className="cursor-pointer transition duration-100 hover:scale-125 animate-pulse"
					onClick={() => {
						handleSmoothScroll(prevRef);
					}}
				/>
			)}
			{children}
			{hasArrowDown && (
				<TiArrowSortedDown
					onClick={() => {
						handleSmoothScroll(nextRef);
					}}
					size={45}
					className="cursor-pointer transition duration-100 hover:scale-125 animate-pulse"
				/>
			)}
		</section>
	);
};

export default Section;
