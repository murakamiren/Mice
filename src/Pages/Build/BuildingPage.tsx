import { css } from "@emotion/react";
import { useEffect, useState, VFC } from "react";
import { useRecoilState } from "recoil";
import Btn from "../../components/atoms/Btn";
import BuildingInfo from "../../components/ui/Building/BuildingInfo";
import BuildCheck from "../../components/view/Building/BuildCheck";
import BuildingTop from "../../components/view/Building/BuildingTop";
import GameSelect from "../../components/view/Building/GameSelect";
import PartsSelect from "../../components/view/Building/PartsSelect";
import { buildTransitionAtom } from "../../stores/buildTransitionAtom";
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
} from "../../stores/pcPartAtoms";

const BuildingPage: VFC = () => {
	const [transitionNum, setTransitionNum] = useRecoilState(buildTransitionAtom);
	const [allVal, setAllVal] = useState(Number);
	const [cpuState, setCpuState] = useRecoilState(cpuStateAtom);
	const [motherboardState, setMotherboardState] = useRecoilState(motherboardStateAtom);
	const [cpuCooler, setCpuCooler] = useRecoilState(cpuCoolerStateAtom);
	const [memory, setMemory] = useRecoilState(memoryStateAtom);
	const [gpu, setGpu] = useRecoilState(gpuStateAtom);
	const [ps, setPs] = useRecoilState(powerSupplyStateAtom);
	const [storage, setStorage] = useRecoilState(storageStateAtom);
	const [caseS, setCase] = useRecoilState(caseStateAtom);
	const [caseFan, setCaseFan] = useRecoilState(caseFanStateAtom);
	const [os, setOs] = useRecoilState(osStateAtom);

	const partArr = [cpuState, motherboardState, cpuCooler, memory, gpu, ps, storage, caseS, caseFan, os];

	const filteredVal = partArr.map((val) => {
		return val.value;
	});

	const filteredName = partArr.map((val) => {
		return { name: val.name, category: val.category, mark: val.mark };
	});

	useEffect(() => {
		const fillValue: number[] = filteredVal;
		const v = fillValue.reduce((sum: number, currVal: number): number => {
			return sum + currVal;
		}, 0);

		setAllVal(v);
	}, [partArr]);

	const handleClick = () => {
		if (transitionNum === 2) {
			setTransitionNum(1);

			setCpuState({
				...cpuState,
				value: 0,
			});

			setMotherboardState({
				...motherboardState,
				value: 0,
			});

			setCpuCooler({
				...cpuCooler,
				value: 0,
			});

			setMemory({
				...memory,
				value: 0,
			});

			setGpu({
				...gpu,
				value: 0,
			});

			setPs({
				...ps,
				value: 0,
			});
			setStorage({
				...storage,
				value: 0,
			});
			setCase({
				...caseS,
				value: 0,
			});
			setCaseFan({
				...caseFan,
				value: 0,
			});
			setOs({
				...os,
				value: 0,
			});
		} else if (transitionNum == 3) {
			setTransitionNum(2);
		}
	};

	const btn = css`
		display: ${transitionNum === 1 ? "none" : "flex"};
		justify-content: center;
		margin-bottom: 160px;
	`;

	return (
		<div>
			<BuildingTop stepCount={transitionNum} />
			{transitionNum === 1 && <GameSelect />}
			{transitionNum === 2 && <PartsSelect />}
			{transitionNum === 3 && <BuildCheck partName={filteredName} val={allVal} />}
			<div css={btn}>
				<Btn w="144px" h="48px" txt="戻る" txtColor="#fff" bgColor="#333" onClick={handleClick} />
			</div>
			{transitionNum > 1 && <BuildingInfo value={allVal} />}
		</div>
	);
};

export default BuildingPage;
