import React from 'react';
import { connect } from 'react-redux';
import { vote, voteAgain, select } from '../store/actions/index';

function Poll(props) {

    const calculatePerUp = (candidate) => {
        const total = candidate.votes_up + candidate.votes_down;
        return total === 0 ? '0%' : ((candidate.votes_up / (candidate.votes_up + candidate.votes_down)) * 100).toFixed(0) + '%';
    }

    const calculatePerDown = (candidate) => {
        const total = candidate.votes_up + candidate.votes_down;
        return total === 0 ? '0%' : ((candidate.votes_down / (candidate.votes_up + candidate.votes_down)) * 100).toFixed(0) + '%';
    }

    const voteFor = (candidate) => () => {
        props.vote(candidate);
        alert('Thanks for voting');
    }

    const voteAgainFor = (candidate) => () => {
        props.voteAgain(candidate);
    }

    const selectUp = (candidate) => () => {
        props.select({ candidate, kind: 'up' });
    }

    const selectDown = (candidate) => () => {
        props.select({ candidate, kind: 'down' });
    }

    return (
        <>
            <div className="header-c">
                <div className="header">
                    <h3 className="title">
                        Rule of Thumb.
                  </h3>
                    <div className="header-list-c">
                        <ul className="header-list">
                            <a href="past-trials.html"><li className="list-element">Past trials</li></a>
                            <a href="how-it-works.html"><li className="list-element">How it works</li></a>
                            <a href="login.html"><li className="list-element">Log in/Sign up</li></a>
                            <i className="fa fa-search"></i>
                        </ul>
                    </div>
                </div>
                <div className="main-header">
                    <div className="main-img-layer">
                        <div className="item-a"></div>
                        <div className="header-description-c">
                            <div className="header-description">
                                <span className="z-3">What's your opinion on</span>
                                <h1 className="z-3">Pope Francis?</h1>
                                <p className="z-3">He's talking tough on clergy sexual abuse, but is he just another papal pervet protector? (thumbs down) or a true pedophile punishing pontiff? (thumps up)</p>
                                <a className="more-info-a" href="https://en.wikipedia.org/wiki/Pope_Francis"><i className="fa fa-wikipedia-w z-3"></i><span className="z-3 more-info">More information</span></a>
                                <h4 className="verdict z-3"> What's Your Verdict?</h4>
                                <div className="header-description-layer z-2"></div>
                            </div>
                            <div className="buttons-c z-3">
                                <button className="borderless-button bg-blue button-font-size">
                                    <i className="fa fa-thumbs-up"></i>
                                </button>
                                <button className="borderless-button bg-yellow button-font-size">
                                    <i className="fa fa-thumbs-down"></i>
                                </button>
                            </div>
                        </div>
                        <div className="days-left">
                            <div className="closing-in">
                                <span>Closing in</span>
                            </div>
                            <div className="days">
                                <span>22 days</span>
                            </div>
                        </div>
                    </div>
                    <img className="big-img" src="./assets/img/pope.png" />
                    <img className="sml-img" src="./assets/img/pope-2.png" />
                </div>
            </div>
            <div className="content-c">
                <div className="content">
                    <div className="description">
                        <div className="description-left">
                            <span>Speak out. Be Heard</span>
                            <span>Be counted</span>
                        </div>
                        <div className="description-right">
                            <p>Rule of thumb is a crowd sourced court of public opinion where anyone can speak out and speak freely. It's easy you share your opinion, we analyze and put the data in a public report.</p>
                            <i>X</i>
                        </div>
                    </div>
                    <h2 className="vote-section">
                        Votes
                  </h2>
                    {props.candidates.map((candidate, i) => (
                        <div className="candidate" key={i}>
                            <div className="candidate-layer">
                                <img src={candidate.img}></img>
                            </div>
                            <div className="candidate-layout">
                                <div className="overall-status">
                                    <i className="fa fa-thumbs-up z-2 overall bg-blue"></i>
                                </div>
                                <div className="candidate-content">
                                    <h2 className="candidate-name z-2">{candidate.name}</h2>
                                    <span className="candidate-legend z-2"><b>1 month ago</b> in Entertainment</span>
                                    <p className="candidate-description z-2">Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus</p>
                                    <div className="candidate-buttons z-2">
                                        {candidate.just_voted ? (

                                            <button className="vote-button" onClick={voteAgainFor(candidate)}>Vote Again</button>
                                        ) : (
                                                <>
                                                    <i className="fa fa-thumbs-up vote-button-up bg-blue" style={{ border: candidate.selection.up ? '1px solid white' : 'none' }} onClick={selectUp(candidate)}></i>
                                                    <i className="fa fa-thumbs-down vote-button-down bg-yellow" style={{ border: candidate.selection.down ? '1px solid white' : 'none' }} onClick={selectDown(candidate)}></i>
                                                    <button className="vote-button" onClick={voteFor(candidate)}>Vote Now</button>
                                                </>
                                            )}
                                    </div>
                                </div>
                                <div className="percentage-bar z-2">
                                    <div className="positive bg-blue" style={{ width: calculatePerUp(candidate) }}>
                                        <i className="fa fa-thumbs-up"></i>
                                        <span>{calculatePerUp(candidate)}</span>
                                    </div>
                                    <div className="negative bg-yellow" style={{ width: calculatePerDown(candidate) }}>
                                        <span>{calculatePerDown(candidate)}</span>
                                        <i className="fa fa-thumbs-down"></i>
                                    </div>
                                </div>
                            </div>
                            <div className="gradient-layer"></div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

function mapStateToProps(state) {
    return {
        candidates: state.pollReducer.candidates ?
            state.pollReducer.candidates :
            []
    };
}

export default connect(
    mapStateToProps,
    { vote, voteAgain, select }
)(Poll);