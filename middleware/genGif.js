var moment = require('moment');

var genGif = (from, url) => {
    return {
        from,
        url,
        
        created: moment().utcOffset('+05:30').format('h:mm A D/M/YYYY')
    }
}
module.exports = {
    genGif,
}