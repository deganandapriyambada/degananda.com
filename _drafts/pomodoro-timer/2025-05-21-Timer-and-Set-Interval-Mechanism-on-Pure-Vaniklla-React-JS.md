Timer is time based watcher for activating certain rule or actions at designed time state . For example on stopwatch, the time watcher will keep rolling up until the user click the stop button.

In otherhand, a countdown time watcher will reduce the time left until it reach zero (eg: new year countdown timer, pomodoro timer, 20-20-20 myopia control timer)

Fortunately, javascript/nodejs has extensive capabilities to build various kind of timer. React can utilize these timer natively without any interpreter.

# Timer Function on Javascript

There are three javascript function that can be used for create a time watcher or timer. 

1. setTimeout()
2. setInterval()
3. requestAnimationFrame()

Each function excel at different timing scenario. For example, setTimeout is commonly used for one time action trigger. In otherhand, setInterval() can trigger multiple action at fixed interval (continuous)

At some cases, both setTimeout and setInterval will be combined to create good UI/UX. take a look at realtime stop watch. setTimeout() will force the stopwatch to stop(unless user click it before the time end), while the setInterval() is used to create the timer animation (rolling of the minutes, hour or second)

## setTimeout() Timer Function on Pure ReactJS