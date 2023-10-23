import Score from '../Score'
import Popups from '../Popups'
import './index.css'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]

const Gameresult = prop => {
  const {
    score,
    current,
    onclickplayagain,
    // onIncreasescore,
    // onDecreasescore,
    opponentval,
    opponentint,
  } = prop
  console.log(choicesList[current].id)
  console.log(opponentval)

  let resu = ''

  /*
  const incrementscore = () => {
    console.log(score)
    onIncreasescore()
  }


  const decreasing = () => {
    onDecreasescore()
  }
*/

  const playagainclicked = () => {
    onclickplayagain()
  }

  switch (true) {
    case choicesList[current].id === 'ROCK':
      if (opponentval === 'ROCK') {
        resu = 'IT IS DRAW'
      } else if (opponentval === 'PAPER') {
        resu = 'YOU LOSE'
      } else {
        resu = 'YOU WON'
      }

      break

    case choicesList[current].id === 'PAPER':
      if (opponentval === 'PAPER') {
        resu = 'IT IS DRAW'
      } else if (opponentval === 'SCISSORS') {
        resu = 'YOU LOSE'
      } else {
        resu = 'YOU WON'
      }

      break

    case choicesList[current].id === 'SCISSORS':
      if (opponentval === 'SCISSORS') {
        resu = 'IT IS DRAW'
      } else if (opponentval === 'ROCK') {
        resu = 'YOU LOSE'
      } else {
        resu = 'YOU WON'
      }

      break
    default:
      ;<h1>edehou</h1>
  }
  if (resu === 'YOU WON') {
    console.log(resu)
    // incrementscore()
  } else if (resu === 'You Lose') {
    console.log(resu)
    // decreasing()
  }

  return (
    <div>
      <div className="rowallign">
        <Score score={score} />
        <div>
          <img
            src={choicesList[current].imageUrl}
            alt="your choice"
            className="image"
          />
        </div>
        <img
          src={choicesList[opponentint].imageUrl}
          alt="opponent choice"
          className="image"
        />
      </div>
      <p>{resu}</p>
      <button onClick={playagainclicked} type="button">
        PLAY AGAIN
      </button>

      <Popups />
    </div>
  )
}

export default Gameresult
