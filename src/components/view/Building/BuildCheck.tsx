import { css } from "@emotion/react";
import { motion } from "framer-motion";
import { useEffect, useState, VFC } from "react";
import { useRecoilValue } from "recoil";
import { caseStateAtom } from "../../../stores/pcPartAtoms";

type buildParts = {
	name: string;
	category: string;
	mark: number;
};

type checkProps = {
	partName: buildParts[];
	val: number;
};

const BuildCheck: VFC<checkProps> = (props) => {
	const pcImg = useRecoilValue(caseStateAtom);
	const [marks, setMarks] = useState<string>("");
	const markArr = props.partName;
	const preMarks = markArr.map((e) => {
		return e.mark;
	});

	useEffect(() => {
		const vn = preMarks.reduce((sum: number, currVal: number): number => {
			return sum + currVal;
		}, 0);
		let txt: string = "";
		if (vn > 37) {
			txt = "かなり快適";
		} else if (37 >= vn && vn >= 33) {
			txt = "快適";
		} else if (vn < 33) {
			txt = "普通";
		}
		console.log(vn);
		setMarks(txt);
	});

	const c = css`
		width: 100vw;
		margin-bottom: 160px;
	`;

	const w = css`
		width: 100%;
		h2 {
			font-size: clamp(24px, 3vw, 32px);
			text-align: center;
			margin-bottom: 64px;
		}
	`;

	const check = css`
		/* width: 100%; */
		display: flex;
		justify-content: flex-start;
		margin: 0 10vw;
		gap: 5vw;
		.img {
			width: 40%;
			img {
				width: 100%;
			}
		}
		.desc {
			display: flex;
			flex-direction: column;
			padding-top: 32px;
			h3 {
				font-size: clamp(24px, 3vw, 32px);
				margin-bottom: 0.8em;
			}
			ul {
				list-style: none;
				margin-bottom: 64px;
				li {
					margin-bottom: 0.5em;
				}
			}
			.totalVal {
				font-size: clamp(20px, 3vw, 32px);
				font-weight: 700;
			}
		}
		@media screen and (max-width: 1024px) {
			flex-direction: column;
			align-items: center;
			.img {
				width: 60%;
			}
			.desc {
			}
		}
	`;

	return (
		<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} css={c}>
			<div css={w}>
				<h2>最終確認</h2>
				<div css={check}>
					<div className="img">
						<img src={pcImg.img} alt="" />
					</div>
					<div className="desc">
						<h3>あなたのPCスペック</h3>
						<ul>
							{props.partName.map((selectedPart, i) => {
								return (
									<li key={i}>
										{selectedPart.category} - {selectedPart.name}
									</li>
								);
							})}
						</ul>
						<p>快適度: {marks}</p>
						<p className="totalVal">合計金額: {props.val}円</p>
					</div>
				</div>
			</div>
		</motion.div>
	);
};

export default BuildCheck;
