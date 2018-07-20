/**
 * History 생성
 */
const History = {
  index: -1,
  stack: [],
  /**
   * 이전 stage 가 있는지 확인
   * @return {boolean}
   */
  hasBefore() {
    return !!(this.stack[this.index - 1])
  },
  // /**
  //  * 다음 stage 가 있는지 확인
  //  * @return {boolean}
  //  */
  // hasNext() {
  //   return Boolean(this.stack[this.index + 1])
  // },
  
  /**
   * 인덱스를 다음으로 이동한다
   */
  next() {
    this.index++
  },
  /**
   * 인덱스를 이전으로 이동한다
   */
  before() {
    this.index--
  },
  /**
   * 현재 히스토리를 반환한다
   * @return {Object} stack
   */
  get() {
    return this.stack[this.index]
  },
  /**
   * 히스토리를 추가한다
   * @param {Object} stage
   */
  addStage(stage) {
    this.stack.push(stage)
    this.next()
  },

  reset() {
    this.stack = []
    this.index = -1
  }
}

export default History
