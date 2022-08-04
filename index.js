
const app = require('./app')

require('dotenv').config()

const port = process.env.PORT || 2004

app.listen(port, () => console.log ('Welcome to port ' + port))