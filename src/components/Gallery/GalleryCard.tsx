import { SanityDocument } from "next-sanity";
import { client } from "../../../sanity/lib/client";
import GalleryCardDate from "./GalleryCardDate";
import GalleryCardTitle from "./GalleryCardTitle";
import GalleryImage from "./GalleryImage";
import GalleryProfileImage from "./GalleryProfileImage";

const GalleryCard = async (props: SanityDocument) => {
	const authorData = await client.fetch(`*[_id == $authorId][0]`, {
		authorId: props.author._ref,
	});

	return (
		<div className="flex flex-col gap-2.5 p-2.5 cursor-pointer border border-dashed rounded-md bg-primary/10 border-primary hover:shadow-lg hover:scale-105 duration-200">
			<div className="flex justify-between items-center md:gap-4">
				<GalleryCardDate pictureTakenAt={props.pictureTakenAt} />
				<GalleryProfileImage
					_ref={authorData.image.asset._ref}
					alt={authorData.image.alt}
				/>
			</div>
			<GalleryImage {...props} />
			<GalleryCardTitle title={props.title} />
			{/* <GalleryCardTitle description={props.body[0].children[0].text} /> */}
		</div>
	);
};

export default GalleryCard;
