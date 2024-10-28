import { useState } from "react";

function Square({ value, onSquareClick }) {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}

function Board({ xIsNext, squares, onPlay }) {
  function handleClick(i) {
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    onPlay(nextSquares);
  }

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }

  return (
    <>
      <>
        <div className="board-row">
          <button>01</button>
          <button>panatha</button>
          <button>03</button>
          <button>04</button>
          <button>Lele_Yavroum</button>
          <button>Serenity</button>
          <button>07</button>
          <button>08</button>
          <button>darko</button>
          <button>10</button>
        </div>
        <div className="board-row">
          <button>11</button>
          <button>Alice</button>
          <button>13</button>
          <button>notsavv</button>
          <button>margout</button>
          <button>16</button>
          <button>17</button>
          <button>18</button>
          <button>Kisses from Theo</button>
          <button>20</button>
        </div>
        <div className="board-row">

          <button>2button1</button>
          <button>Tasioudis was hereeeee</button>
          <button>PAOOOOOOOOOOOOOOOOOOK</button>
          <button>21</button>
          <button>Tasioudis Yusurum</button>
          <button>23</button>
          <button>24</button>
          <button>25</button>
          <button>26</button>
          <button>27</button>
          <button>28</button>
          <button>29</button>
          <button>30</button>
          <button>31</button>
          <button>32</button>
          <button>konnyd_</button>
          <button>34</button>
          <button>35</button>
          <button>36Giorgos Karagiannis</button>
          <button>38</button>
        </div>
      </>
    </>
  );
}

export default function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
  }

  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = "Go to move #" + move;
    } else {
      description = "Pull request Demo";
    }
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });

  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <ol>{moves}</ol>
      </div>
    </div>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
