import { FC } from "react";

interface GalleryCardTitleProps {
	description: string;
}

const GalleryCardTitle: FC<GalleryCardTitleProps> = ({
	description,
}: GalleryCardTitleProps) => {
	return (
		<p className="lg:text-sm md:text-sm text-[10px] font-light border-l-4 border-primary pl-2">
			{description}
		</p>
	);
};

export default GalleryCardTitle;
