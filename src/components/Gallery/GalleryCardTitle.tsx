import { FC } from "react";

interface GalleryCardTitleProps {
	description: string;
}

const GalleryCardTitle: FC<GalleryCardTitleProps> = ({
	description,
}: GalleryCardTitleProps) => {
	return (
		<p className="text-sm border-l-4 border-primary pl-2">{description}</p>
	);
};

export default GalleryCardTitle;
