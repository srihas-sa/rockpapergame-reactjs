import './index.css'

const Score = props => {
  const {score} = props
  return (
    <div>
      <p>Score</p>
      <p className="scorr">{score}</p>
    </div>
  )
}

export default Score
