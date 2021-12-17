# event-bus [![build](https://github.com/smikhalevski/event-bus/actions/workflows/master.yml/badge.svg?branch=master&event=push)](https://github.com/smikhalevski/event-bus/actions/workflows/master.yml)

Yet another event bus. There are many like it, but this one is mine.

The most primitive implementation of a push-based event bus (pub/sub) that you can find.

```shell
npm install --save-prod @smikhalevski/event-bus
```

# Usage

```ts
import {EventBus} from '@smikhalevski/event-bus';

interface IFooEvent {
  foo: string;
}

const eventBus = new EventBus<IFooEvent>();

const unsubscribe = eventBus.subscribe((event) => console.log(event.foo));

eventBus.publish({foo: 'abc'}); // Outputs "abc" to console

unsubscribe();
```
