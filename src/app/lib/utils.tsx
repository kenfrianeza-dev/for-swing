import { RefObject } from "react";
import { parseISO, getYear, format } from "date-fns";

const handleSmoothScroll = (target: RefObject<HTMLDivElement>) => {
	if (target.current) {
		target.current.scrollIntoView({ behavior: "smooth", block: "start" });
	}
};

const getYearFromDate = (dateString: string) => {
	const parsedDate = parseISO(dateString);
	return getYear(parsedDate);
};

function formatDateYYYYMMDD(date: string) {
	return format(date, "MMM dd, yyyy");
}

export { handleSmoothScroll, getYearFromDate, formatDateYYYYMMDD };
