import { Events } from 'types/index';

interface EventBus {
  callbacks: Events
}

class EventBus {
  constructor() {
    this.callbacks = {};
  }

  on(event: string, _callback: Function) {
    if (typeof event !== 'string') {
      console.error('event should be string');
      return;
    }

    if (typeof _callback !== 'function') {
      console.error('callback should be functions');
    }

    const callback = this.callbacks[event];

    if (!callback || Object.prototype.toString.call(callback) !== '[object Array]') {
      this.callbacks[event] = [];
    } else {
      callback.push(_callback);
    }

    return this;
  }

  trigger(event: string, data: Object) {
    if (typeof event !== 'string') {
      console.error('event should be string');
      return;
    }

    const callbacks = this.callbacks[event] || [];

    for (let i = 0, len = callbacks.length; i < len; i++) {
      callbacks[i](data);
    }

    return this;
  }
}

export default EventBus;
