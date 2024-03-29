import { FC } from "react";
import { formatDateYYYYMMDD } from "@/app/lib/utils";

interface GalleryCardDateProps {
	pictureTakenAt: string;
}

const GalleryCardDate: FC<GalleryCardDateProps> = ({
	pictureTakenAt,
}: GalleryCardDateProps) => {
	const date = formatDateYYYYMMDD(pictureTakenAt);
	return (
		<div className="flex flex-col lg:items-start md:items-start items-center gap-2">
			<p className="w-fit py-[4px] px-4 lg:text-sm md:text-sm text-[10px] rounded-md font-bold bg-primary text-secondary hover:bg-primary/75 duration-200">
				{date}
			</p>
		</div>
	);
};

export default GalleryCardDate;
