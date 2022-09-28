const axios = require('axios').default

async function test_post() {
    try {
        const { data } = await axios.post(`http://127.0.0.1:8080/v0/`, {
            title: 'Contre vent'
        })

        if (data.body && data.body.title) {
            console.log('/filters passed', { data })
        } else {
            console.log('/filters ERROR', { data })
        }
    }
    catch (err) {
        console.error('/filters ERROR : ' + err.message)
    }
}

test_post()
