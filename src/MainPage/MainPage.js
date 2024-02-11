import { useState } from "react";

import "./MainPage.css";

function MainPage() {
  const data = [
    { Text: "What do you mean NO?", Btn: "NO?", img: 2 },
    { Text: "Really??", Btn: "No", img: 3 },
    {
      Text: "If you don't,I will summon monhoraga",
      Btn: "Wait.Wait.Wait.I'will",
      img: 4,
    },
    { Text: "So you want to be my valentine?", Btn: "Yes", img: 6 },
    { Text: "I Love You My Strawberry", Btn: "I Love You too", img: 5 },
  ];

  const [newText, setNewText] = useState("Will You Be My Valentine");
  const [newBtnText2, setNewBtnText2] = useState("No");
  const [newImg, setNewImg] = useState(1);
  const [count, setCount] = useState(0);
  const [newBtnText1, setNewBtnText1] = useState("Yes");

  const handleNo = () => {
    if (count >= 5) {
      return;
    } else if (count === 2) {
      document.querySelector(".yes-btn").style.display = "none";
      setNewBtnText2(data[count].Btn);
      setNewText(data[count].Text);
      setNewImg(data[count].img);
      console.log(count);
      setCount(count + 1);
    } else {
      setNewBtnText2(data[count].Btn);
      setNewText(data[count].Text);
      setNewImg(data[count].img);
      setCount(count + 1);
    }
  };
  const handleYes = () => {
    setNewBtnText1(data[4].Btn);
    setNewText(data[4].Text);
    setNewImg(data[4].img);
    document.querySelector(".no-btn").style.display = "none";
  };
  return (
    <div className="MainPage">
      <div>
        <img
          className="img"
          src={process.env.PUBLIC_URL + `/img/${newImg}.jpg`}
          alt="fasf"
        />
        <h1>{newText}</h1>
        <button className="yes-btn" onClick={handleYes}>
          {newBtnText1}
        </button>
        <button className="no-btn" onClick={handleNo}>
          {newBtnText2}
        </button>
      </div>
    </div>
  );
}

export default MainPage;
