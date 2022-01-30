import { VFC } from "react";
import CustomBanner from "../components/view/customBuild/CustomBanner";
import CustomStep from "../components/view/customBuild/CustomStep";
import CustomTop from "../components/view/customBuild/CustomTop";

const CustomPage: VFC = () => {
	return (
		<div>
			<CustomTop />
			<CustomBanner />
			<CustomStep />
		</div>
	);
};

export default CustomPage;
