import Candidate from './Candidate'
import { $ } from '../lib/utils';

const StageManager = {
  /**
   * 임시 winner list
   */
  winnerList: [],
  /**
   * 강을 전환한다
   */
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
  },
  setFinalTree() {
    const $container = $('#matchContainer')
    const $resultContainer = $('#resultContainer')
    $container.addClass('hide')
    $resultContainer.removeClass('hide')
    $resultContainer.addClass('show')
  }
}

export default StageManager
