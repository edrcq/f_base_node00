const axios = require('axios').default

async function test_filters() {
    try {
        const { data } = await axios.get(`http://127.0.0.1:8080/v0/filters`, { params: {
            title: 'Contre vent'
        }}) // URL/filters?title=Contre%XXvent

        if (data.query && data.query.title) {
            console.log('/filters passed', { data })
        } else {
            console.log('/filters ERROR', { data })
        }
    }
    catch (err) {
        console.error('/filters ERROR : ' + err.message)
    }
}

async function test_error() {
    try {
        const { status } = await axios.get(`http://127.0.0.1:8080/v0/error`)

        console.error('/error ERROR : Status:', status)
    }
    catch (err) {
        if (err.response && err.response.status)
            console.log('/error passed. Status:', err.response.status)
        else
            console.error('/error ERROR:' + err.message)
    }
}

test_filters()
test_error()
