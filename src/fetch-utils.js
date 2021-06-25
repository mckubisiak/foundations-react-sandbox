import request from 'superagent';

const URL = 'https://infinite-reaches-27560.herokuapp.com/marbles'; 

export async function getAllMarbles() {
    const data = await request.get(`${URL}`);

    return data.body;
}

export async function getOneMarble(id) {
    const { body } = await request.get(`${URL}/${id}`);

    return body;
}

export async function updateMarble(id, gameData) {
    const { body } = await request.put(`${URL}/${id}`)
        .send(gameData);

    return body;
}

export async function createMarble(gameData /* whatever the user put in the form */) {
    const { body } = await request
        .post(`${URL}`)
        .send(gameData);

    return body;
}

export async function getAllRaritys() {
    const { body } = await request.get('https://infinite-reaches-27560.herokuapp.com/raritys');

    return body;
}

export async function deleteGame(id) {
    const { body } = await request.delete(`${URL}/${id}`);

    return body;
}