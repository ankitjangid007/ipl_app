import React from 'react'
import './Match.css'

const Match = ({ match }) => {
  return (
    <div className='match__container'>
        <div className="match__box" id='first'>
            <div className="match__teams">
                <div className="team1">
                    <img src={match.logo_home_team} alt='team1' />
                    <h4>{match.home_team}</h4>
                </div>
                <div className="vs">
                    <h4>VS</h4>
                </div>
                <div className="team2">
                    <h4>{match.away_team}</h4>
                    <img src={match.logo_away_team} alt='team2' />
                </div>
            </div>

            <div className="match__details">
                <button>MATCH CENTER</button>
                <div className='details'>
                    <h5>MATCH {match.id} | {match.date}</h5>
                    <p>{match.time} {match['pm/am']} +04 (10:00 GMT)</p>
                    <h5>{match.venue}</h5>
                </div>
            </div>
        </div>

        {/* max-width : 768px */}
        <div className="match__box" id='second'>
            <div className='details'>
                <p>{match.time} {match['pm/am']} +04 (10:00 GMT)</p>
                <h5>MATCH {match.id} | {match.date}</h5>
            </div>
            <div className="match__teams">
                <div className="team1">
                    <img src={match.logo_home_team} alt='team1' />
                    <h4>{match.home_team}</h4>
                </div>
                <div className="vs">
                    <h4>VS</h4>
                </div>
                <div className="team2">
                    <img src={match.logo_away_team} alt='team2' />
                    <h4>{match.away_team}</h4>
                </div>
            </div>

            <div className="match__details">
                <h5>{match.venue}</h5>
                <button>MATCH CENTER</button>
            </div>
        </div>
    </div>
  )
}

export default Match