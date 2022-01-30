import { css } from "@emotion/react";
import { useState, VFC } from "react";
import { useNavigate } from "react-router";
import { useRecoilState } from "recoil";
import { buildTransitionAtom } from "../../../stores/buildTransitionAtom";
import Btn from "../../atoms/Btn";

type infoProps = {
	value: number;
};

const BuildingInfo: VFC<infoProps> = (props) => {
	const [transitionNum, setTransitionNum] = useRecoilState(buildTransitionAtom);
	const navigate = useNavigate();

	const handleFinish = async () => {
		await setTimeout(() => {
			navigate("/custombuild/afterbuy");
			setTransitionNum(1);
		}, 1000);
	};

	const handleClick = () => {
		if (transitionNum === 2) {
			setTransitionNum(3);
		} else if (transitionNum === 3) {
			handleFinish();
		}
	};

	const w = css`
		display: flex;
		position: fixed;
		bottom: 0;
		width: 100vw;
		height: 12vh;
		background-color: #fff;
		justify-content: center;
		box-shadow: 2px -4px 12px rgba(0, 0, 0, 0.2);
	`;

	const dw = css`
		width: 90%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		.val-w {
			.value {
				font-size: 32px;
				font-weight: 700;
				color: #333;
				letter-spacing: 2px;
			}
			.t {
				font-size: 12px;
				color: #333;
			}
		}
	`;

	return (
		<div css={w}>
			<div css={dw}>
				<div className="val-w">
					<p className="value">{props.value}円</p>
					<p className="t">月額払い可能</p>
				</div>
				<div className="btn">
					<Btn w="144px" h="48px" txt="購入する" bgColor="#3165ec" txtColor="#fff" onClick={handleClick} />
				</div>
			</div>
		</div>
	);
};

export default BuildingInfo;
