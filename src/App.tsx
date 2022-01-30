import { useEffect, VFC } from "react";
import HomePage from "./Pages/HomePage";
import "./css/font.css";
import { Route, Routes, useLocation } from "react-router";
import CustomPage from "./Pages/CustomPage";
import BulitPcPage from "./Pages/BuiltPcPage";
import PeripheralsPage from "./Pages/PeripheralsPage";
import SupportPage from "./Pages/SupportPage";
import NavBar from "./components/ui/NavBar";
import Footer from "./components/ui/Footer";
import BuildingPage from "./Pages/Build/BuildingPage";
import AfterBuyPage from "./Pages/Build/AfterBuyPage";

const App: VFC = () => {
	return (
		<div>
			<NavBar />
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="custombuild" element={<CustomPage />} />
				<Route path="builtpc" element={<BulitPcPage />} />
				<Route path="peripherals" element={<PeripheralsPage />} />
				<Route path="support" element={<SupportPage />} />
				<Route path="custombuild/building" element={<BuildingPage />} />
				<Route path="custombuild/afterbuy" element={<AfterBuyPage />} />
			</Routes>
			<Footer />
		</div>
	);
};

export default App;
