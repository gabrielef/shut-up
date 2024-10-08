# Shut-Up
This tiny script let you choose logging levels using the standard console object.

## Getting Started

### Installing

```bash
$ npm i @gabrielef/shut-up
```

### Usage
Configure the logging level using the env varibale `process.env.SHUT_UP_LOG_LEVEL` then require the script.

```js
require('@gabrielef/shut-up');
```
or

```js
process.env['SHUT_UP_LOG_LEVEL'] = 'trace';

require('@gabrielef/shut-up');
```

Available levels are: trace, debug, info, log, warn, error. Default is `error`.

The below table shows the output for each level.

|                   | **error** | **warn** | **log** | **info** | **debug** | **trace** |
|-------------------|:---------:|:--------:|:-------:|:--------:|:---------:|:---------:|
| **console.error** |     Y     |     Y    |    Y    |     Y    |     Y     |     Y     |
| **console.warn**  |     N     |     Y    |    Y    |     Y    |     Y     |     Y     |
| **console.log**   |     N     |     N    |    Y    |     Y    |     Y     |     Y     |
| **console.info**  |     N     |     N    |    N    |     Y    |     Y     |     Y     |
| **console.debug** |     N     |     N    |    N    |     N    |     Y     |     Y     |
| **console.table** |     N     |     N    |    N    |     N    |     Y     |     Y     |
| **console.time**  |     N     |     N    |    N    |     N    |     Y     |     Y     |
| **console.timeLog**  |     N     |     N    |    N    |     N    |     Y     |     Y     |
| **console.timeEnd**  |     N     |     N    |    N    |     N    |     Y     |     Y     |
| **console.trace** |     N     |     N    |    N    |     N    |     N     |     Y     |

## License
This project is licensed under the GPU GPL 3.0 License - see the LICENSE.md file for details