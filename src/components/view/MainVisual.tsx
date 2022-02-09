import { css } from "@emotion/react";
import { motion } from "framer-motion";
import { useEffect, useRef, useState, VFC } from "react";
import mvImg from "../../assets/home-mv-img-01.jpg";
import mvImg2 from "../../assets/home-mv-img-02.jpg";
import mvImg03 from "../../assets/home-mv-img-03.jpg";
import mvImg04 from "../../assets/home-mv-img-04.jpg";
import Btn from "../atoms/Btn";
import { FaTwitter, FaFacebookF, FaInstagram } from "react-icons/fa";
import { useNavigate } from "react-router";

const MainVisual: VFC = () => {
	const navigate = useNavigate();
	const handleClick = () => {
		navigate("/custombuild");
	};

	const imgArr = [mvImg, mvImg2, mvImg03, mvImg04];

	const [imgNum, setImgNum] = useState(Number);

	const interval3s = () => {
		setTimeout(() => {
			if (imgNum === imgArr.length - 1) {
				setImgNum(0);
			} else {
				setImgNum((pre) => pre + 1);
			}
		}, 8000);
	};

	useEffect(() => {
		interval3s();
	}, [imgNum]);

	const imgIn = {
		off: {
			scale: 1.2,
			filter: "brightness(120%)",
		},
		on: {
			scale: 1,
			filter: "brightness(75%)",
			transition: {
				duration: 1,
				ease: [0.07, 0.18, 0.14, 1],
			},
		},
	};

	const fadeIn = {
		hidden: {
			opacity: 0,
		},
		show: {
			opacity: 1,
			transition: {
				staggerChildren: 0.3,
				delayChildren: 2.1,
			},
		},
	};

	const fadeInItems = {
		hidden: {
			opacity: 0,
			x: -100,
		},
		show: {
			opacity: 1,
			x: 0,
			transition: {
				duration: 1,
				ease: [0.07, 0.18, 0.14, 1],
			},
		},
	};

	const fadeInItemsReverse = {
		hidden: {
			opacity: 0,
			x: 100,
		},
		show: {
			opacity: 1,
			x: 0,
			transition: {
				duration: 1,
				ease: [0.07, 0.18, 0.14, 1],
			},
		},
	};

	const mv = css`
		height: 100vh;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		align-items: center;
		gap: 10vw;
		background-color: rgba(0, 0, 0, 1);
		position: relative;
		z-index: 0;
		.mv-img {
			position: absolute;
			top: 0;
			left: 0;
			width: 100vw;
			height: 100%;
			z-index: -10;
			overflow: hidden;
			img {
				position: absolute;
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
				object-position: 70% center;
				object-fit: cover;
				filter: brightness(75%);
			}
		}
		.left {
			width: 50vw;
			display: flex;
			flex-direction: column;
			padding-top: 8vh;
			padding-left: 15vw;
			h1 {
				font-size: clamp(32px, 4vw, 72px);
				letter-spacing: 2px;
				line-height: 1.1em;
				font-weight: 700;
				color: #fff;
				span {
					display: inline-block;
					background: -webkit-linear-gradient(
						45deg,
						rgba(49, 101, 236, 1) 0%,
						rgba(77, 120, 228, 1) 73%,
						rgba(151, 173, 230, 1) 100%
					);
					background-clip: text;
					-webkit-background-clip: text;
					-webkit-text-fill-color: transparent;
				}
			}
			p {
				color: #fff;
				font-size: clamp(16px, 2vw, 20px);
				margin-top: 1em;
				width: 75%;
				span {
					display: block;
					margin-top: 2em;
				}
			}
		}
		.right {
			display: flex;
			flex-direction: column;
			align-items: flex-end;
			justify-content: center;
			margin-right: 32px;
			gap: 32px;
			div {
				cursor: pointer;
				.svg {
					width: 32px;
					height: 32px;
					transition: all 0.3s cubic-bezier(0.07, 0.18, 0.14, 1);
				}
				.twi:hover {
					fill: #1da1f2;
				}
				.fa:hover {
					fill: #3b5998;
				}
				.ins:hover {
					fill: #f77737;
				}
			}
		}
		@media screen and (max-width: 1024px) {
			.wrap {
				justify-content: flex-start;
				align-items: center;
				flex-direction: column;
				gap: 0;
			}
			.left {
				width: 100vw;
				align-items: center;
				margin: 0 5vw;
				padding-top: 12vh;
				padding-left: 0;
				text-align: center;
				p {
					margin-top: 2em;
					padding-left: 0;
				}
			}
			.right {
				width: 100vw;
				flex-direction: row;
				justify-content: space-evenly;
				align-items: center;
				margin-right: 0;
			}
		}
		.btns {
			margin-top: 40px;
			display: flex;
			gap: 24px;
			z-index: 10;
		}
	`;
	return (
		<motion.div css={mv} className="wrap">
			<motion.div className="mv-img" variants={imgIn} initial="off" animate="on">
				{imgArr.map((img, i) => {
					const imgSty = css`
						opacity: ${i === imgNum ? 1 : 0};
						transition: all 0.7s ease-in-out;
					`;
					return <img key={i} src={img} alt="" css={imgSty} />;
				})}
			</motion.div>
			<motion.div className="left" variants={fadeIn} initial="hidden" animate="show">
				<motion.h1 variants={fadeInItems}>
					あなたの理想の
					<br />
					<span>ゲーミングPC</span>
				</motion.h1>
				<motion.p variants={fadeInItems}>
					貴方だけの想像あふれるオリジナルゲーミングPCを簡単に、スピーディーに組み立てよう。
					<br />
					<span>さあ、早速ビルドしよう</span>
				</motion.p>
				<motion.div variants={fadeInItems} className="btns">
					<Btn w="144px" h="48px" txt="組み立てる" bgColor="#3165ec" txtColor="#fff" onClick={handleClick} />
					<Btn w="144px" h="48px" txt="詳細" bgColor="#fff" txtColor="#333" />
				</motion.div>
			</motion.div>
			<motion.div className="right" variants={fadeIn} initial="hidden" animate="show">
				<motion.div variants={fadeInItemsReverse}>
					<FaTwitter color={"#fff"} className="svg twi" />
				</motion.div>
				<motion.div variants={fadeInItemsReverse}>
					<FaFacebookF color={"#fff"} className="svg fa" />
				</motion.div>
				<motion.div variants={fadeInItemsReverse}>
					<FaInstagram color={"#fff"} className="svg ins" />
				</motion.div>
			</motion.div>
		</motion.div>
	);
};

export default MainVisual;
