import { SanityDocument } from "next-sanity";
import Image from "next/image";
import { urlForImage } from "../../../sanity/lib/image";
import PictureTakenDate from "./GalleryCardDate";
import GalleryCardTitle from "./GalleryCardTitle";

const GalleryCard = async (props: SanityDocument) => {
	return (
		<div className="flex flex-col gap-2 p-2 cursor-pointer border border-dashed rounded-md bg-primary/10 border-primary hover:shadow-lg hover:scale-105 duration-200">
			<PictureTakenDate pictureTakenAt={props.pictureTakenAt} />
			<Image
				className="aspect-square object-cover rounded-md"
				src={urlForImage(props.mainImage.asset._ref)}
				alt={props.mainImage.alt}
				width={1024}
				height={1024}
			/>
			<GalleryCardTitle description={props.body[0].children[0].text} />
		</div>
	);
};

export default GalleryCard;
