import { yarg } from "./config/args.plugin";
import { ServerApp } from "./presentation/server-app";


const main = async () => {
    console.log(yarg)
}

(async() => {
    const { b: base, l: limit, s: showTable, n: fileName, d: fileDestination } = yarg

    ServerApp.run({ base, limit, showTable, fileName, fileDestination })
})()

