import { Fragment, VFC } from "react";
import HomeSecond from "../components/view/HomeSecond";
import HomeFirst from "../components/view/HomeFirst";
import MainVisual from "../components/view/MainVisual";
import HomePcIntroduction from "../components/view/HomePcIntroduction";
import HomePcSecond from "../components/view/HomePcSecond";

const HomePage: VFC = () => {
	return (
		<Fragment>
			<MainVisual />
			<HomeFirst />
			<HomeSecond />
			<HomePcIntroduction />
			<HomePcSecond />
		</Fragment>
	);
};

export default HomePage;
