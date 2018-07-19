import Candidate from './Candidate';

const StageManager = {
  /**
   * 강을 전환한다
   */
  winnerList: [],
  nextStep(step) {
    return ++step
  },
  prevStep(step) {
    return --step
  },
  getCandidate(id, candidates) {
    const candidate = candidates.filter(item => item.id === id)
    return new Candidate(...candidate)
  },
  setNextWinner(winnerList) {
    this.winnerList = winnerList
  },
  getWinnerList() {
    return this.winnerList
  }
}

export default StageManager
