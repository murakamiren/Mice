import { css } from "@emotion/react";
import { VFC } from "react";
import { useSetRecoilState } from "recoil";
import {
	caseFanStateAtom,
	caseStateAtom,
	cpuCoolerStateAtom,
	cpuStateAtom,
	gpuStateAtom,
	memoryStateAtom,
	motherboardStateAtom,
	osStateAtom,
	powerSupplyStateAtom,
	storageStateAtom,
} from "../../../stores/pcPartAtoms";

import Btn from "../../atoms/Btn";

type partDescProps = {
	name: string;
	value: number;
	src: string;
	mark: number;
	category: string;
	isSelected: boolean;
	onClick: (partName: string) => void;
};

const PcPartDesc: VFC<partDescProps> = (props) => {
	const setCpuState = useSetRecoilState(cpuStateAtom);
	const setMotherboardState = useSetRecoilState(motherboardStateAtom);
	const setCpuCoolerState = useSetRecoilState(cpuCoolerStateAtom);
	const setMemoryState = useSetRecoilState(memoryStateAtom);
	const setGpuState = useSetRecoilState(gpuStateAtom);
	const setPowerSupplyState = useSetRecoilState(powerSupplyStateAtom);
	const setStorage = useSetRecoilState(storageStateAtom);
	const setCase = useSetRecoilState(caseStateAtom);
	const setCaseFan = useSetRecoilState(caseFanStateAtom);
	const setOs = useSetRecoilState(osStateAtom);

	const handleClick = () => {
		props.onClick(props.name);

		if (props.category === "cpu") {
			setCpuState({
				name: props.name,
				value: props.value,
				mark: props.mark,
				category: props.category,
			});
		} else if (props.category === "motherboard") {
			setMotherboardState({
				name: props.name,
				value: props.value,
				mark: props.mark,
				category: props.category,
			});
		} else if (props.category === "cpuCooler") {
			setCpuCoolerState({
				name: props.name,
				value: props.value,
				mark: props.mark,
				category: props.category,
			});
		} else if (props.category === "memory") {
			setMemoryState({
				name: props.name,
				value: props.value,
				mark: props.mark,
				category: props.category,
			});
		} else if (props.category === "gpu") {
			setGpuState({
				name: props.name,
				value: props.value,
				mark: props.mark,
				category: props.category,
			});
		} else if (props.category === "powerSupply") {
			setPowerSupplyState({
				name: props.name,
				value: props.value,
				mark: props.mark,
				category: props.category,
			});
		} else if (props.category === "storage") {
			setStorage({
				name: props.name,
				value: props.value,
				mark: props.mark,
				category: props.category,
			});
		} else if (props.category === "case") {
			setCase({
				name: props.name,
				value: props.value,
				mark: props.mark,
				category: props.category,
				img: props.src,
			});
		} else if (props.category === "caseFan") {
			setCaseFan({
				name: props.name,
				value: props.value,
				mark: props.mark,
				category: props.category,
			});
		} else if (props.category === "os") {
			setOs({
				name: props.name,
				value: props.value,
				mark: props.mark,
				category: props.category,
			});
		}
	};
	const d = css`
		display: flex;
		border-top: solid 2px rgba(0, 0, 0, 0.4);
		margin: 16px 32px 0;

		padding: 32px;
		justify-content: space-between;
		align-items: center;
		gap: 80px;
		@media screen and (max-width: 1024px) {
			flex-direction: column;
			gap: 32px;
		}
	`;
	const imgW = css`
		width: 160px;
		height: 140px;
		/* overflow: hidden; */
		display: flex;
		justify-content: center;
		img {
			/* width: 100%; */
			width: 100%;
			height: 100%;
			object-fit: contain;
			object-position: center;
			transition: all 0.3s cubic-bezier(0.07, 0.18, 0.14, 1);
			&:hover {
				scale: 1.1;
			}
		}
	`;
	const txtW = css`
		display: flex;
		flex-direction: column;
		gap: 1em;
		@media screen and (max-width: 1024px) {
			margin-left: 0;
			align-items: center;
			text-align: center;
		}
	`;
	return (
		<div css={d}>
			<div css={imgW}>
				<img src={props.src} alt="" />
			</div>
			<div css={txtW}>
				<p>{props.name}</p>
				<p>{props.value}円</p>
			</div>
			<div>
				<Btn
					w="120px"
					h="40px"
					txt={props.isSelected ? "選択中" : "選択する"}
					bgColor={props.isSelected ? "#3165ec" : "#333"}
					txtColor="#fff"
					onClick={handleClick}
				/>
			</div>
		</div>
	);
};

export default PcPartDesc;
