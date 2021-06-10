const express = require('express')

const absentDayRouter = require('./routers/absent_days')
const absentDetailsRouter = require('./routers/absent_details')
const leaveBalanceRouter = require('./routers/leave_balance')
const holidatCalenderRouter = require('./routers/holiday_calender')

const app = express()
const port = process.env.PORT || 3000

app.use(absentDayRouter)
app.use(absentDetailsRouter)
app.use(leaveBalanceRouter)
app.use(holidatCalenderRouter)

app.listen(port, () => {
    console.log("Server is up and running on port: " + port)
})