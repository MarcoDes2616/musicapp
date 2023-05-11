const request = require("supertest")
const app = require("../app");
const Genre = require("../models/Genre");
const Artist = require("../models/Artist");
require("../models")

let songId;
let data = {
    name: "denuevo",
}

let dataGenre = {
    name: "genre",
}

let dataArtist = {
    "name": "Marc Anthony",
    "country": "Puerto Rico",
    "formationYear": 1983,
    "image": "image"
}

test("GET /songs should return status 200", async() => {
    const res = await request(app).get("/songs");
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveLength(2);
    expect(res.body[0].album).toBeDefined()
    expect(res.body[0].genres).toBeDefined()
    expect(res.body[0].artists).toBeDefined()
})

test("POST /songs should return status 201", async() => {
    const res = await request(app).post("/songs").send(data);
    songId = res.body.id
    expect(res.statusCode).toBe(201);
    expect(res.body.name).toBe(data.name)
})

test("POST /:id/genres should return status 201", async() =>{
    const genre = await Genre.create(dataGenre);
    const res = await request(app).post(`/songs/${songId}/genres`).send([genre.id]);
    await genre.destroy()
    expect(res.statusCode).toBe(201);
    expect(res.body.length).toBe(1)
})

test("POST /:id/artists should return status 201", async() =>{
    const artist = await Artist.create(dataArtist);
    const res = await request(app).post(`/songs/${songId}/artists`).send([artist.id]);
    await artist.destroy()
    expect(res.statusCode).toBe(201);
    expect(res.body.length).toBe(1)
})

test("GET /songs/:id to getOne should return status 200", async() => {
    const res = await request(app).get(`/songs/${songId}`);
    expect(res.statusCode).toBe(200);
    expect(res.body.name).toBe(data.name)
    expect(res.body.album).toBeDefined()
    expect(res.body.genres).toBeDefined()
    expect(res.body.artists).toBeDefined()
})

test("PUT /songs/:id should return status 201", async() => {
    const res = await request(app).put(`/songs/${songId}`).send({"name": "denuevo"});
    expect(res.statusCode).toBe(200);
    expect(res.body.name).toBe("denuevo")
})

test("DELETE /songs/:id should return status 204", async() => {
    const res = await request(app).delete(`/songs/${songId}`);
    expect(res.statusCode).toBe(204);
})