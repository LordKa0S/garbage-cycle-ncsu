# garbage-cycle-ncsu

Keeps track of taking out the trash in shared living spaces

## Set Up

1. Create a `conf` directory
2. Create configuration files in the `conf` directory with JSON representations of the following objects:
   - `conf/order.json`: `List<string>` representing the people to cycle through
   - `conf/current.json`: `number` 0-based index in `order.json` of the initial person responsible
   - `conf/logs.json`: `List<{name: string, ts: string}>` to store logs. Initial value may be `[]`
   
## Run

```
npm start
```
Browse to `localhost:3000`
