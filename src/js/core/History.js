/**
 * @summary History 생성
 */
const History = {
  index: -1,
  data: [],
  /**
   * @description 이전 stage 가 있는지 확인
   * @return {boolean}
   */
  hasBefore() {
    return !!this.data[this.index - 1]
  },
  /**
   * @description 인덱스를 다음으로 이동한다
   */
  next() {
    this.index++
  },
  /**
   * @description 인덱스를 이전으로 이동한다
   */
  before() {
    this.index--
  },
  /**
   * @description 현재 히스토리를 반환한다
   * @return {Object} data
   */
  get() {
    return this.data[this.index]
  },
  /**
   * @description 히스토리를 추가한다
   * @param {Object} stage
   */
  addStage(stage) {
    this.data.push(stage)
    this.next()
  },
  /**
   * @description 히스토리를 초기화
   */
  reset() {
    this.data = []
    this.index = -1
  }
}

export default History
