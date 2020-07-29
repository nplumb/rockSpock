import { handleResponse, handleError } from "./apiUtils";
const baseUrl = "http://localhost:51710/api/weaponsAndWinners/";
//process.env.API_URL + '
// export function getCourses() {
//   debugger
//   return fetch(baseUrl).then(handleResponse).catch(handleError)
// }

// export function saveCourse(course) {
//   return fetch(baseUrl + (course.id || ''), {
//     method: course.id ? 'PUT' : 'POST', // POST for create, PUT to update when id already exists.
//     headers: { 'content-type': 'application/json' },
//     body: JSON.stringify(course),
//   })
//     .then(handleResponse)
//     .catch(handleError)
// }

export function getWeaponsAndWinners(weaponId) {
    return fetch(baseUrl + weaponId)
        .then(handleResponse)
        .catch(handleError);
}
