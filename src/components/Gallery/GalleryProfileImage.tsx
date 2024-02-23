import { FC } from "react";
import Image from "next/image";
import type Sanity from "sanity";
import { urlForImage } from "../../../sanity/lib/image";

interface GalleryProfileImageProps {
	_ref: Sanity.Image;
	alt: string;
}

const GalleryProfileImage: FC<GalleryProfileImageProps> = ({
	_ref,
	alt,
}: GalleryProfileImageProps) => {
	return (
		<Image
			className="aspect-square object-cover rounded-full scale-75 w-auto h-auto border border-dashed border-primary"
			src={urlForImage(_ref)}
			alt={alt}
			width={32}
			height={32}
		/>
	);
};

export default GalleryProfileImage;
