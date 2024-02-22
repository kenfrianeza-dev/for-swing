import Content from "@/components/Content";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery/index";

export default async function HomePage() {
	return (
		<main>
			<Content />
			<Gallery />
			<Footer />
		</main>
	);
}
