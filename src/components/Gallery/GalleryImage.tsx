"use client";

import Image from "next/image";
import { SanityDocument } from "next-sanity";
import { urlForImage } from "../../../sanity/lib/image";

const GalleryImage = (props: SanityDocument) => {
	return (
		<Image
			className="transition-opacity opacity-0 duration-300 aspect-square object-cover rounded-md"
			src={urlForImage(props.mainImage.asset._ref)}
			alt={props.mainImage.alt}
			width={1024}
			height={1024}
			onLoadingComplete={(image) => {
				image.classList.remove("opacity-0");
				image.classList.add("opacity-85");
				image.classList.add("hover:opacity-100");
			}}
		/>
	);
};

export default GalleryImage;
