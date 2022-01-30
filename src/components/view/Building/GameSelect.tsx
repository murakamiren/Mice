import { css } from "@emotion/react";
import { VFC } from "react";
import GameCard from "./GameCard";
import osuImg from "../../../assets/custom/gameselect-img-01.png";
import apexImg from "../../../assets/custom/gameselect-img-02.jpg";
import valImg from "../../../assets/custom/gameselect-img-03.jpg";
import { motion } from "framer-motion";

const GameSelect: VFC = () => {
	const wrap = css`
		width: 100vw;
		margin-bottom: 160px;
		h2 {
			font-size: clamp(24px, 3vw, 32px);
			text-align: center;
			margin-bottom: 64px;
		}
	`;

	const gameWrap = css`
		display: flex;
		justify-content: center;
		gap: 64px;
		margin-bottom: 64px;
		@media screen and (max-width: 1024px) {
			flex-direction: column;
			align-items: center;
		}
	`;
	return (
		<motion.div css={wrap} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
			<h2>あなたがしたいゲームを選択してください</h2>
			<div css={gameWrap}>
				<GameCard src={osuImg} />
				<GameCard src={apexImg} />
				<GameCard src={valImg} />
			</div>
			<div css={gameWrap}>
				<GameCard src={osuImg} />
				<GameCard src={apexImg} />
				<GameCard src={valImg} />
			</div>
		</motion.div>
	);
};

export default GameSelect;
