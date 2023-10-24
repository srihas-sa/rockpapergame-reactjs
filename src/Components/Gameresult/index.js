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
    onclicking,
    newArray,
    opponentrandomchoice,
    text,
  } = prop

  console.log(newArray)
  /*
  const incrementscore = () => {
    console.log(score)
    onIncreasescore()
  }


  const decreasing = () => {
    onDecreasescore()
  }
*/

  const onclicked = id => {
    console.log(id)
    opponentrandomchoice(id)
  }

  const playagainclicked = () => {
    onclickplayagain()
  }
  return (
    <div>
      {onclicking ? (
        <div>
          <div className="rowallign">
            <div>
              <img
                src={newArray[0].imageUrl}
                alt="your choice"
                className="image"
              />
            </div>
            <img
              src={newArray[1].imageUrl}
              alt="opponent choice"
              className="image"
            />
          </div>
          <p>{text}</p>
          <button onClick={playagainclicked} type="button">
            PLAY AGAIN
          </button>

          <Popups />
        </div>
      ) : (
        <div className="divcontainet">
          <button
            type="button"
            data-testid="rockButton"
            onClick={() => onclicked(0)}
          >
            <img
              src={choicesList[0].imageUrl}
              alt={choicesList[0].id}
              key={choicesList[0].id}
              className="imagesss"
            />
          </button>
          <button
            type="button"
            data-testid="paperButton"
            onClick={() => onclicked(1)}
          >
            <img
              src={choicesList[1].imageUrl}
              alt={choicesList[1].id}
              key={choicesList[1].id}
              className="imagesss"
            />
          </button>
          <button
            type="button"
            data-testid="scissorsButton"
            onClick={() => onclicked(2)}
          >
            <img
              src={choicesList[2].imageUrl}
              alt={choicesList[2].id}
              key={choicesList[2].id}
              className="imagesss"
            />
          </button>

          <Popups />
        </div>
      )}
    </div>
  )
}

export default Gameresult
