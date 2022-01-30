import { css } from "@emotion/react";
import { VFC } from "react";
import StepCard from "./parts/StepCard";
const stepContent = [
	{
		id: 1,
		step: 1,
		ttl: "ゲームを選ぶ",
		desc: "まず初めに、数ある人気タイトルから、あなたが満足いくようにプレイしたいゲームを選択しましょう。選ばれたゲームによって、提案されるパーツは変わります。",
	},
	{
		id: 2,
		step: 2,
		ttl: "パーツを選ぶ",
		desc: "プレイしたいゲームを選択できたら、次はパーツの選択です。様々なパーツの中からあなたがつけたいパーツを選びましょう。",
	},
	{
		id: 3,
		step: 3,
		ttl: "ビルド完了!",
		desc: "パーツを選び終えたら、あなたのオリジナルゲーミングPCの完成です!。後は私達が選ばれたパーツでPCを組み、あなたの元へ配送します。",
	},
];

const CustomStep: VFC = () => {
	const wrap = css`
		width: 100vw;
		margin-bottom: 160px;
		display: flex;
		justify-content: center;
	`;

	const cWrap = css`
		width: 90%;
		display: flex;
		flex-direction: column;
		align-items: center;
		h2 {
			font-size: clamp(32px, 4vw, 64px);
			margin-bottom: 80px;
		}
	`;

	const cards = css`
		display: flex;
		width: 100%;
		justify-content: space-around;
		@media screen and (max-width: 1024px) {
			flex-direction: column;
			align-items: center;
			gap: 32px;
		}
	`;
	const cardsList = stepContent.map((s) => {
		return <StepCard key={s.id} step={s.step} ttl={s.ttl} desc={s.desc} />;
	});

	return (
		<div css={wrap}>
			<div css={cWrap}>
				<h2>簡単、単純な3ステップ</h2>
				<div css={cards}>{cardsList}</div>
			</div>
		</div>
	);
};

export default CustomStep;
