# Lambda Dead letter queue Demo

## How to setup

```
$ yarn install
$ yarn sls deploy
```

## Try Dead letter queue

```
$ yarn sls invoke -t Event -f hello -p event.json
```

:warning: Lambda's execution loops infinitely with the above command.

### How to stop Lambda

```
$ yarn sls remove
```
