import { Stage } from './Stage'
import { Handler } from '../handle/Handler'
import History from './History'
import data from '../data'

const createTournament = () => {
  class Tournament {
    constructor() {
      this.step = 0
      this.stage = null
      this.stepName = ['32강', '16강', '8강', '4강', '결승']
      this.candidates = []
      this.winners = []
      this.Handler = new Handler(this)

      this.init()
    }

    init() {
      this.fetchData(data)
      this.setStage()
    }

    setStage() {
      this.stage = new Stage(this.step, this.winners)
      History.addStage(this.stage)
      this.nextStep()
    }

    cancelStage() {
      if (History.hasBefore()) {
        History.before()
        this.stage = History.get()
        this.prevStep()
      }
    }
    /**
     * 현재 스테이지를 생성한다
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
      this.candidates = data
      console.log(this.candidates)
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
