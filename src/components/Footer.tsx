import Link from "next/link";
import { FC } from "react";

interface FooterProps {}

const Footer: FC<FooterProps> = () => {
	return (
		<div className="text-center font-semibold text-sm p-4">
			<p>
				coded with 🤍 by{" "}
				<Link
					className="underline"
					href="https://www.facebook.com/kenfrianeza2555"
				>
					Ken Frianeza
				</Link>
			</p>
		</div>
	);
};

export default Footer;
