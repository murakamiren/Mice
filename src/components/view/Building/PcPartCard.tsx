import { css } from "@emotion/react";
import React, { useState, VFC } from "react";
import PcPartDesc from "./PcPartDesc";
import { FaAngleUp, FaAngleDown } from "react-icons/fa";
import { motion } from "framer-motion";
import { partType } from "../../../types/partType";

type cardProps = {
	ttl: string;
	data: partType[];
};

const PcPartCard: VFC<cardProps> = (props) => {
	const [isOpen, setIsOpen] = useState(false);
	const [isName, setIsName] = useState(String);

	const handleOpen = () => {
		setIsOpen((pre) => !pre);
	};

	const handleClick = (partName: string) => {
		setIsName(partName);
	};

	const wrap = css`
		width: 80%;
		display: flex;
		justify-content: center;
		@media screen and (max-width: 1024px) {
			width: 100%;
		}
	`;
	const card = css`
		width: 80%;
		overflow: hidden;
		box-shadow: 2px 4px 12px rgba(0, 0, 0, 0.2);
		border-radius: 16px;
		height: ${isOpen ? "100%" : "72px"};
		.more {
			width: 100%;
			height: 64px;
			display: flex;
			justify-content: center;
			position: relative;

			.pt {
				line-height: 64px;
				font-weight: 700;
				font-size: 24px;
				text-align: center;
				color: ${isOpen ? "#3165ec" : "#333"};
				@media screen and (max-width: 1024px) {
					font-size: 20px;
				}
			}
			.l {
				position: absolute;
				width: 32px;
				height: 32px;
				fill: #333;
				top: 50%;
				transform: translateY(-50%);
				right: 5%;
				@media screen and (max-width: 1024px) {
					width: 24px;
					height: 24px;
				}
			}
		}
	`;

	return (
		<div css={wrap}>
			<motion.div css={card}>
				<div className="more">
					<p className="pt">{props.ttl}</p>
					{isOpen ? (
						<FaAngleUp className="l" onClick={handleOpen} />
					) : (
						<FaAngleDown className="l" onClick={handleOpen} />
					)}
				</div>
				{props.data.map((d: partType) => {
					return (
						<PcPartDesc
							key={d.id}
							name={d.name}
							value={d.value}
							src={d.img}
							mark={d.mark}
							category={d.category}
							isSelected={isName === d.name}
							onClick={handleClick}
						/>
					);
				})}
			</motion.div>
		</div>
	);
};

export default PcPartCard;
