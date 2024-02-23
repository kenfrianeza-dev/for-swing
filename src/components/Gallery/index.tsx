import { SanityDocument } from "next-sanity";
import { loadQuery } from "../../../sanity/lib/store";
import { POSTS_QUERY } from "../../../sanity/lib/queries";
import { FC } from "react";
import GalleryCard from "./GalleryCard";

interface GalleryProps {}

const Gallery: FC<GalleryProps> = async () => {
	const posts = await loadQuery<SanityDocument[]>(POSTS_QUERY);
	const { data } = posts;

	return (
		<div className="h-full flex flex-col items-center justify-center gap-5">
			<div className="font-semibold text-center text-3xl">
				<h1>Memories that</h1>
				<h1>we made</h1>
			</div>

			<section className="max-w-6xl w-11/12 grid gap-4 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 ">
				{data.map((item) => {
					return <GalleryCard key={item._id} {...item} />;
				})}
			</section>
		</div>
	);
};

export default Gallery;
