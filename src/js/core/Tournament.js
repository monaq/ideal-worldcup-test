import data from '../data'
import Candidate from './Candidate'
import History from './History'
import StageManager from './StageManager'
import { HandleStage } from '../handle/HandleStage'
import EventManager from './EventManager'
import { Results } from './Results'
import HandleHistory from '../handle/HandleHistory'

const createTournament = () => {
  class Tournament {
    constructor() {
      this.step = -1
      this.stage = {}
      this.stageName = ['32강', '16강', '8강', '4강', '결승']
      this.candidates = []
      this.winners = []

      this.eventManager = new EventManager()

      this.init()
    }

    init() {
      this.fetchData(data)
      this.winners = this.candidates

      this.setStage(this.winners)
      this.bindEvent()
    }

    bindEvent() {
      this.eventManager.on('next', () => {
        this.winners = StageManager.getWinnerList()
        History.addStage(this.stage)
        this.setStage(this.winners)
      })

      this.eventManager.on('final', () => {
        this.setFinalTree()
        const resultPage = new Results()
      })
    }

    fetchData(data) {
      data.forEach(item => {
        const candidate = new Candidate(item)
        this.candidates.push(candidate)
      })
    }
    /**
     * 강을 전환한다
     */
    nextStep() {
      this.step = StageManager.nextStep(this.step)
    }
    prevStep() {
      this.step = StageManager.prevStep(this.step)
    }
    /**
     * 다음 스테이지를 생성한다
     */
    setStage(winners) {
      this.nextStep()
      this.winners = winners
      this.stage = new HandleStage(
        this.getStageName(),
        this.winners,
        this.eventManager
      )
    
    }
    nextStage(winners) {
      this.stage.setStage(winners)
    }
    /**
     * 이전 스테이지로 돌아간다
     */
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
    getStageName() {
      const step = this.step
      return this.stageName[step]
    }
    setFinalTree() {
      StageManager.setFinalTree()
    }
  }

  const tournament = new Tournament()
}

export default createTournament
