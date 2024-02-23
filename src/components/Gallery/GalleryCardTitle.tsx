import { FC } from "react";

interface GalleryCardTitleProps {
	title: string;
}

const GalleryCardTitle: FC<GalleryCardTitleProps> = ({
	title,
}: GalleryCardTitleProps) => {
	return (
		<p className="bg-primary/10 py-2 rounded-md lg:text-sm md:text-sm text-[10px] border-l-4 border-primary pl-3">
			{title}
		</p>
	);
};

export default GalleryCardTitle;
