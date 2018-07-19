class EventManager {
  constructor() {
    this.events = {}
  }

  /**
   * bind event
   * @param type{string} - event type
   * @param listener{function} - event listener
   * @param target{object} - target to bind
   */
  on(event, listener) {
    if (typeof this.events[event] !== 'object') {
      this.events[event] = []
    }
    this.events[event].push(listener)
    console.log(this.events)
  }

  emit(event) {
    var i,
      listeners,
      length,
      args = [].slice.call(arguments, 1)

    listeners = this.events[event]
    console.log(listeners)
    length = listeners.length

    for (i = 0; i < length; i++) {
      listeners[i].apply(this, args)
    }
  }

  /**
   * unbind event
   * @param type{string} - event type
   * @param listener{function} - event listener
   * @param target{object} - target to unbind
   */
  off(event, listener) {
    var idx
    if (typeof this.events[event] === 'object') {
      idx = this.events[event].indexOf(this.events[event], listener)

      if (idx > -1) {
        this.events[event].splice(idx, 1)
      }
    }
  }

}

export default EventManager
