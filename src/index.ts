import 'dotenv/config'
import debug from "debug";

import { app } from "./app";

app.listen(process.env.PORT || 3000, () => {
  debug('api:webserver')(`Server is running in http://localhost:${process.env.PORT || 3000}`)
})
