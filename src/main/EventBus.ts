export type Subscriber<Event> = (event: Event) => boolean | void;

export class EventBus<Event = void> {

  protected subscribers: Subscriber<Event>[] = [];

  /**
   * Synchronously invokes subscribers and passes the event.
   *
   * @param event The event to publish.
   */
  public publish(event: Event): void {
    for (const subscriber of this.subscribers) {
      subscriber(event);
    }
  }

  /**
   * Adds a subscriber to the event bus. Subscriber would receive all events published via {@link EventBus.publish}.
   *
   * @param subscriber The subscriber callback.
   * @returns The callback that unsubscribes the subscriber from the event bus.
   */
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
