import 'dotenv/config'

import { app } from "./app";
import { appLogger } from './utils/logger';

app.listen(process.env.PORT || 3000, () => {
  appLogger(`Server is running in http://localhost:${process.env.PORT || 3000}`)
})
