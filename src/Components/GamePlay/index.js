import {Component, React} from 'react'
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'
import {RiCloseLine} from 'react-icons/ri'
import Gameresult from '../Gameresult'
import Popups from '../Popups'
import Score from '../Score'
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

class GamePlay extends Component {
  state = {
    score: 0,
    onclicking: false,
    current: 0,
    onclickcolserules: false,
  }

  onclicked = id => {
    this.setState({onclicking: true, current: id})
  }

  playagainclicked = () => {
    this.setState({onclicking: false})
  }

  /*
  onIncreasescore = () => {
    const {score} = this.state
    console.log(score)
    this.setState({score: score + 1})
  }

  onDecreasescore = () => {
    const {score} = this.state
    console.log(score)
    this.setState({score: score - 1})
  }
*/

  onclickedfunction = () => {
    const {score, current} = this.state

    const opponentint = Math.floor(Math.random() * 3)
    const opponentval = choicesList[opponentint].id
    return (
      <Gameresult
        score={score}
        current={current}
        opponentint={opponentint}
        opponentval={opponentval}
        onclickplayagain={this.playagainclicked}
        // onIncreasescore={this.onIncreasescore}
        //  onDecreasescore={this.onDecreasescore}
      />
    )
  }

  render() {
    const {onclicking, score, current, onclickcolserules} = this.state
    return (
      <div className="outer">
        <div className="score">
          <h1>Rock Paper Scissors</h1>
          <div>
            <Score score={score} />
          </div>
        </div>

        {onclicking ? (
          <div>{this.onclickedfunction()}</div>
        ) : (
          <div className="divcontainet">
            <button type="button" data-testid="rockButton">
              <img
                src={choicesList[0].imageUrl}
                alt={choicesList[0].id}
                key={choicesList[0].id}
                onClick={() => this.onclicked(0)}
                className="imagesss"
              />
            </button>
            <button type="button" data-testid="paperButton">
              <img
                src={choicesList[1].imageUrl}
                alt={choicesList[1].id}
                key={choicesList[1].id}
                onClick={() => this.onclicked(1)}
                className="imagesss"
              />
            </button>
            <button type="button" data-testid="scissorsButton">
              <img
                src={choicesList[2].imageUrl}
                alt={choicesList[2].id}
                key={choicesList[2].id}
                onClick={() => this.onclicked(2)}
                className="imagesss"
              />
            </button>

            <Popups />
          </div>
        )}
      </div>
    )
  }
}
export default GamePlay
