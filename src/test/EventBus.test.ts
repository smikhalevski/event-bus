import {EventBus} from '../main';

describe('EventBus', () => {

  test('publishes an event', () => {
    const subscriber = jest.fn();
    const eventBus = new EventBus<number>();

    eventBus.subscribe(subscriber);

    eventBus.publish(123);

    expect(subscriber).toHaveBeenCalledTimes(1);
    expect(subscriber).toHaveBeenCalledWith(123);
  });

  test('unsubscribes subscriber', () => {
    const subscriber = jest.fn();
    const eventBus = new EventBus<number>();

    const unsubscribe = eventBus.subscribe(subscriber);

    unsubscribe();

    eventBus.publish(123);

    expect(subscriber).toHaveBeenCalledTimes(0);
  });
});
