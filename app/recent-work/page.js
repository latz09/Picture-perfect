import { sanityClient } from "../../lib/sanityConnection";
import { FETCH_RECENT_WORK_DATA } from "../../data/queries/FETCH_RECENT_WORK_DATA";
import RecentWorkHero from "../../components/heros/RecentWorkHero";
import Navbar from "../../components/layout/Navbar";
import RecentWorks from "../../components/recentWork/RecentWorks";

const RecentWorkPage = async () => {
	const query = FETCH_RECENT_WORK_DATA;
	const data = await sanityClient.fetch(query);

	return (
		<div className="grid gap-16">
			
			<RecentWorkHero 
				image={data.image}
				heading={data.heading}
				subheading={data.subheading}
				recentWorkHeading={data.recentWorkheading}
			/>
			<RecentWorks data={data.recentPieces} heading={data.recentWorkheading} />
			
		</div>
	);
};

export default RecentWorkPage;


export const revalidate = 10;