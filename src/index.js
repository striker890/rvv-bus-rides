const axios = require('axios');
const JsonConverter = require('./jsonConverter');

function extractRides(jsonObj) {
    let rides = [];
    jsonObj.efa.ts.tp.forEach(element => {
        
        let ride = {};
        ride.duration = element.d;

        element.ls.l.ps.p.forEach(element => {

            let stop = {
                name: element.n,
                date: element.dt.da,
                time: element.dt.t
            }

            if (element.u === "departure") {
                ride.departure = stop;
            }

            if (element.u === "arrival") {
                ride.arrival = stop;
            }
        });

        rides.push(ride);
    });

    return rides;
}

exports.getData = function(url) {
    return new Promise((resolve, reject) => {
        axios.get(url)
        .then(function (response) {
          let jsonConverter = new JsonConverter();
          let jsonObj = jsonConverter.convert(response.data);
      
          let rides = extractRides(jsonObj);
          resolve(rides);
        })
        .catch(function (error) {
          reject(error);
        });
    });
}


