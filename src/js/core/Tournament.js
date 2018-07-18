import { Stage } from './Stage'
import History from './History'
import data from '../data'
import Candidate from './Candidate'
import { stringify } from 'querystring'
import HandleSelector from '../handle/HandleSelector';

const createTournament = () => {
  class Tournament {
    constructor() {
      this.step = -1
      this.stage = {}
      this.stepName = ['32강', '16강', '8강', '4강', '결승']
      this.candidates = []
      this.winners = []

      this.init()
    }

    init() {
      this.fetchData(data)
      this.winners = this.candidates
      this.setStage()
    }

    fetchData(data) {
      data.forEach(item => {
        const candidate = new Candidate(item)
        this.candidates.push(candidate)
      })
    }

    setStage() {
      this.nextStep()
      this.stage = new Stage(this.getStepName(), this.winners)
      History.addStage(this.stage)
      HandleSelector(this)
    }
    cancelStage() {
      if (History.hasBefore()) {
        History.before()
        this.stage = History.get()
        this.prevStep()
      }
    }
    /**
     * 현재 스테이지를 반환한다
     * @param {Object} stage
     */
    getStage() {
      return this.Stage
    }
    /**
     * 현재 스테이지 이름을 반환한다
     * @param {String}
     */
    getStepName() {
      return this.stepName[this.step]
    }
    /**
     * 강을 전환한다
     */
    nextStep() {
      this.step++
    }
    prevStep() {
      this.step--
    }

    setWinners(winners = []) {
      this.winners = winners
    }

    getCandidates() {
      return this.candidates
    }
    getWinners() {
      return this.winners
    }
  }

  const tournament = new Tournament()
}

export default createTournament
