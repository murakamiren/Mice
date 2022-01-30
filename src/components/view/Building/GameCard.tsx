import { css } from "@emotion/react";
import { VFC } from "react";
import { useSetRecoilState } from "recoil";
import { buildTransitionAtom } from "../../../stores/buildTransitionAtom";

type GmaeCardProps = {
	src: string;
};

const GameCard: VFC<GmaeCardProps> = (props) => {
	const setTransitionNum = useSetRecoilState(buildTransitionAtom);
	const scrollTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	const handleClick = () => {
		scrollTop();
		setTransitionNum(2);
	};
	const wrap = css`
		width: 18%;
		height: 280px;
		overflow: hidden;
		border-radius: 5%;
		box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.2);
		position: relative;
		object-fit: cover;
		@media screen and (max-width: 1024px) {
			width: 60%;
		}
		div {
			width: 100%;
			height: 100%;
			img {
				width: 100%;
				height: 100%;
				filter: grayscale(70%);
				object-fit: cover;
				object-position: center;
				scale: 1;
				transition: all 0.3s cubic-bezier(0.07, 0.18, 0.14, 1);
				&:hover {
					filter: grayscale(0);
					scale: 1.1;
				}
			}
		}
	`;
	return (
		<div css={wrap} onClick={handleClick}>
			<div>
				<img src={props.src} alt="" />
			</div>
		</div>
	);
};

export default GameCard;
