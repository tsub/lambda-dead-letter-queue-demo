# Lambda Dead letter queue Demo

## Requires

- AWS Credentials
- AWS Region

e.g.

```
$ export AWS_PROFILE=myprofile
$ export AWS_REGION=ap-northeast-1
```

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
