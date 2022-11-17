import React, { useState } from "react"; //상태를 관리할 때 사용하는 hook중 하나
import "./App.css";
import Box from "./compotents/Box";

/*
  1. 박스 2개(타이틀, 사진, 결과)
  2. 박스 하단에 가위바위보 버튼
  3. 버튼 클릭 -> 클릭한 아이템이 유저박스에 보임
  4. 버튼 클릭 -> 컴퓨터 아이템이 랜덤하게 선택
  5. 3,4번의 승패 나눔
  6. 결과에 따라 박스테두리색, 글씨 색이 변함 (승-파랑/패-회색)
*/

function App() {
	const [userSelect, setUserSelect] = useState();
	const [computerSelect, setComputerSelect] = useState();
	const [result, setResult] = useState(); //승패를 보여주는 state, 비어있는 string type

	const choice = {
		scissors: { name: "Scissors", img: "scissors.png" },
		rock: { name: "Rock", img: "rock.png" },
		paper: { name: "Paper", img: "paper.png" },
	};

	const play = (userChoice) => {
		//console.log("내가 누른 버튼은? ", userChoice);

		setUserSelect(choice[userChoice]);
		let computerChoice = randomChoice();
		setComputerSelect(computerChoice);

		setResult(judgement(choice[userChoice], computerChoice)); //유저가 선택한 값, 컴퓨터가 선택한 값을 함수 judgement에 전달
	};

	const judgement = (uc, cc) => {
		console.log("유저 선택값은? ", uc, "컴퓨터 선택값은? ", cc);

		/*
  유저 == 컴퓨터                        -> TIE(비김)
  유저 == Rock, 컴퓨터 == Scissors      -> USER WIN(승)
  유저 == Rock, 컴퓨터 == Paper         -> USER LOSE(패)
  유저 == Scissors, 컴퓨터 == Paper     -> USER WIN(승)
  유저 == Scissors, 컴퓨터 == Rock      -> USER LOSE(패)
  유저 == Paper, 컴퓨터 == Rock         -> USER WIN(승)
  유저 == Paper, 컴퓨터 == Scissors     -> USER LOSE(패)
*/

		if (uc.name === cc.name) {
			return "tie";
		} else if (uc.name === "Rock")
			return cc.name === "Scissors" ? "win" : "lose";
		else if (uc.name === "Scissors")
			return cc.name === "Paper" ? "win" : "lose";
		else if (uc.name === "Paper") return cc.name === "Rock" ? "win" : "lose";
	};

	const randomChoice = () => {
		let itemArray = Object.keys(choice); //객체 choice의 key값만 뽑아옴
		// console.log('itemArray?', itemArray)
		let randomItem = Math.floor(Math.random() * itemArray.length); //0,1,2 중 랜덤
		let final = itemArray[randomItem];

		return choice[final];
	};

	return (
		<>
			<div className="main">
				<Box title="Mine" item={userSelect} result={result} />
				<Box title="Computer" item={computerSelect} result={result} />
			</div>
			<div className="main">
				<button onClick={() => play("scissors")}>
					가위<i class="fa-regular fa-hand-scissors"></i>
				</button>
				<button onClick={() => play("rock")}>
					바위<i class="fa-regular fa-hand-back-fist"></i>
				</button>
				<button onClick={() => play("paper")}>
					보<i class="fa-regular fa-hand"></i>
				</button>
			</div>
			<p className="main resultP">{result}</p>
		</>
	);
}

export default App;
