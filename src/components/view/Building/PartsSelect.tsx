import { css } from "@emotion/react";
import { motion } from "framer-motion";
import { VFC } from "react";
import PcPartCard from "./PcPartCard";
import {
	caseFanParts,
	caseParts,
	cpuCoolerParts,
	cpuParts,
	gpuParts,
	memoryParts,
	motherboardsParts,
	osParts,
	powerSupplyParts,
	storageParts,
} from "../../../data/pcPartData";

const PartsSelect: VFC = () => {
	const wrap = css`
		width: 100vw;
		margin-bottom: 160px;
		h2 {
			font-size: clamp(24px, 3vw, 32px);
			text-align: center;
			margin-bottom: 64px;
		}
	`;

	const test = css`
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 64px;
	`;

	return (
		<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} css={wrap}>
			<h2>パーツを選択してください</h2>
			<div css={test}>
				<PcPartCard ttl="CPU" data={cpuParts} />
				<PcPartCard ttl="MOTHERBOARD" data={motherboardsParts} />
				<PcPartCard ttl="CPU COOLER" data={cpuCoolerParts} />
				<PcPartCard ttl="GPU" data={gpuParts} />
				<PcPartCard ttl="MEMORY" data={memoryParts} />
				<PcPartCard ttl="POWER SUPPLY" data={powerSupplyParts} />
				<PcPartCard ttl="STORAGE" data={storageParts} />
				<PcPartCard ttl="CASE" data={caseParts} />
				<PcPartCard ttl="CASE FAN" data={caseFanParts} />
				<PcPartCard ttl="OS" data={osParts} />
			</div>
		</motion.div>
	);
};

export default PartsSelect;
