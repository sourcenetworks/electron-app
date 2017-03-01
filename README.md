## electron-app

All the electron-specific code for Source lives here. Great care should be taken to add as little
non-electron code as possible! Our lives will be much easier if we can test the app in isolation,
since so much of it is dependent on networks (which will be very difficult to configure on a test
machine).

## Building for release

```sh
./packageForMac.sh
```
