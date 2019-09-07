class EventBus {
  constructor() {
    this.events = {};
  }

  on(event: string, callback) {
    if (typeof event !== 'string') {
      console.error('event should be string');
      return;
    }

    this.events[event].push(callback);

    return this;
  }

  trigger(event: string, data: Object) {
    if (typeof event !== 'string') {
      console.error('event should be string');
      return;
    }

    const callbacks = this.events[event] || [];

    for (let i = 0, len = callbacks.length; i < len; i++) {
      callbacks[i](data);
    }

    return this;
  }
}

export default EventBus;
