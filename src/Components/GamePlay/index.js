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
    text: '',
    newArray: [],
  }

  onclicked = id => {
    this.setState({onclicking: true, current: id})
  }

  onclickplayagain = () => {
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

  resultshow = (you, opponentval) => {
    let res = ''
    if (you === 'ROCK') {
      if (opponentval === 'ROCK') {
        res = 'IT IS DRAW'
      } else if (opponentval === 'PAPER') {
        res = 'YOU LOSE'
      } else {
        res = 'YOU WON'
      }
    } else if (you === 'PAPER') {
      if (opponentval === 'PAPER') {
        res = 'IT IS DRAW'
      } else if (opponentval === 'SCISSORS') {
        res = 'YOU LOSE'
      } else {
        res = 'YOU WON'
      }
    } else if (you === 'SCISSORS') {
      if (opponentval === 'SCISSORS') {
        res = 'IT IS DRAW'
      } else if (opponentval === 'ROCK') {
        res = 'YOU LOSE'
      } else {
        res = 'YOU WON'
      }
    }
    return res
  }

  opponentrandomchoice = id => {
    console.log()
    const {score} = this.state
    const you = choicesList[id]
    console.log(you)
    const opponentint = Math.floor(Math.random() * 3)
    const opponentval = choicesList[opponentint].id
    const result = this.resultshow(you.id, opponentval)
    let updatedscore = score
    if (result === 'YOU WON') {
      updatedscore = score + 1
    } else if (result === 'YOU LOSE') {
      updatedscore = score - 1
    } else {
      updatedscore = score
    }

    this.setState({
      onclicking: true,
      score: updatedscore,
      text: result,
      newArray: [you, choicesList[opponentint]],
    })
  }

  render() {
    const {
      onclicking,
      score,
      current,
      onclickcolserules,
      text,
      newArray,
    } = this.state
    return (
      <div className="outer">
        <div className="score">
          <h1>Rock Paper Scissors</h1>
          <div>
            <Score score={score} />
          </div>
        </div>

        <Gameresult
          onclicking={onclicking}
          opponentrandomchoice={this.opponentrandomchoice}
          text={text}
          score={score}
          newArray={newArray}
          onclickplayagain={this.onclickplayagain}
        />
      </div>
    )
  }
}
export default GamePlay
