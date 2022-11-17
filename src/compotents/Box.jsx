import React from "react";

const Box = (props) => {
	//승패를 유저, 컴퓨터의 반대로 나오게
	let rrr;
	if (
		props.title === "Computer" &&
		props.result !== "tie" &&
		props.result !== ""
	) {
		//컴퓨터쪽, 비기지 않았고, 결과값이 비어있지 않을 때

		rrr = props.result === "win" ? "lose" : "win";
		//유저의 결과가 승리였다면 졌음으로 바뀌고, 승리가 아니었다면 승리로 바뀜
	} else {
		//위의 경우가 아니면 props로 전달된 값을 그대로 쓰면 됨
		rrr = props.result;
	}

	return (
		<div className={`box ${rrr}`}>
			<h1>{props.title}</h1>
			<img src={props.item && props.item.img} className="item-img" alt="" />
			<h2>{rrr}</h2>
		</div>
	);
};

export default Box;
