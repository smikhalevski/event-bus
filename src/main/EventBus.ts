export type Subscriber<Event> = (event: Event) => boolean | void;

export class EventBus<Event = void> {

  protected subscribers: Array<Subscriber<Event>> = [];

  public publish(event: Event): void {
    for (const subscriber of this.subscribers) {
      subscriber(event);
    }
  }

  public subscribe(subscriber: Subscriber<Event>): () => void {
    const subscribers = this.subscribers;

    if (subscribers.indexOf(subscriber) === -1) {
      subscribers.push(subscriber);
    }
    return () => {
      subscribers.splice(subscribers.indexOf(subscriber), 1);
    };
  }
}
