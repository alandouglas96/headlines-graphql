
const URL = 'http://localhost:5000'

function fetchRequest (path, options) {
  return fetch(URL + path, options)
    .then((res) =>
      res.status < 400 ? res : Promise.reject()
    ).then((res) => {
      return res.status !== 204 ? res.json() : res;
    }).catch((err) => {
      console.error(`Error ${err} fetching ${path}`)
    })
}


