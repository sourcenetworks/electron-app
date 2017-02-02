All IPC functions acting as 'endpoints' for the renderer process(es) should go here.

The basic idea is that the main process should act like a server for the renderer process.

Todo: Right now this process is unidirectional (think UDP - renderer emits an event and receives no confirmation).
I want to write a library that makes it bi-directional in a promisified manner. The API is simple:

1. (renderer) - promiseIpc.send('route', jsonData).then(foo => ...).catch(err => console.error(err));
2. (main) - promiseIpc.on('route', jsonData => asyncCalcAndReturnPromise(jsonData));

The API should be exactly the same in the reverse direction.
