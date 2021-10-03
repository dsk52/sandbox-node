# sandbox node

## TypeORM

create some Entity

```
$ npm run typeorm -- typeorm entity:create -n <Name>
```

migration

```
$ npm run typeorm -- typeorm migration:create -n <Name>

$ npm run typeorm -- migration:generate -n <Name>
$ npm run build

$ npm run typeorm -- migration:show
$ npm run typeorm -- migration:run
```
