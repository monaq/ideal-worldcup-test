import { Stage } from './Stage'
import { Handler } from '../handle/Handler'
import History from './History'
import data from '../data'
import Candidate from './Candidate'

const createTournament = () => {
  class Tournament {
    constructor() {
      this.step = -1
      this.stage = null
      this.stepName = ['32강', '16강', '8강', '4강', '결승']
      this.candidates = []
      this.winners = []
      this.Handler = new Handler(this)

      this.init()
    }

    init() {
      this.fetchData(data)
      this.winners = this.candidates
      this.setStage()
    }

    setStage() {
      this.nextStep()
      this.stage = new Stage(this.stepName[this.step], this.winners)
      History.addStage(this.stage)
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

    getStepName() {
      return this.stepName[this.step]
    }

    nextStep() {
      this.step++
    }

    prevStep() {
      this.step--
    }

    fetchData(data) {
      data.forEach((item)=> {
        const candidate = new Candidate(item)
        this.candidates.push(candidate)
      })
    }

    setWinners(winners = []) {
      this.winners = winners
    }

    getCandidates() {
      return this.candidates
    }
  }

  const tournament = new Tournament()
}

export default createTournament
