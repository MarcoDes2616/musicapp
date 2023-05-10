const request = require("supertest")
const app = require("../app");
const Genre = require("../models/Genre");
require("../models")

let artistId;
let data = {
    "name": "Mana",
    "country": "Mexico",
    "formationYear": 1983,
    "image": "image"
}

let dataGenre = {
    name: "React js"
}

test("GET /artists should return status 200", async() => {
    const res = await request(app).get("/artists");
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveLength(2);
    expect(res.body[0].genres).toBeDefined()
})

test("POST /artists should return status 201", async() => {
    const res = await request(app).post("/artists").send(data);
    artistId = res.body.id
    expect(res.statusCode).toBe(201);
    expect(res.body.name).toBe(data.name)
})

test("POST /:id/genres should return status 201", async() =>{
    const genre = await Genre.create(dataCourse);
    const res = await request(app).post(`/artists/${artistId}/genres`).send([genre.id]);
    await genre.destroy()
    expect(res.statusCode).toBe(201);
    expect(res.body.length).toBe(1)
})

test("GET /artists/:id to getOne should return status 200", async() => {
    const res = await request(app).get(`/artists/${artistId}`);
    expect(res.statusCode).toBe(200);
    expect(res.body.name).toBe(data.name)
    expect(res.body.genres).toBeDefined()
})

test("PUT /artists/:id should return status 201", async() => {
    const res = await request(app).put(`/artists/${artistId}`).send({"name": "Castro"});
    expect(res.statusCode).toBe(200);
    expect(res.body.name).toBe("Castro")
})

test("DELETE /artists/:id should return status 204", async() => {
    const res = await request(app).delete(`/artists/${artistId}`);
    expect(res.statusCode).toBe(204);
})