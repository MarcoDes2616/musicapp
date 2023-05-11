const request = require("supertest")
const app = require("../app");
const Artist = require("../models/Artist");
require("../models")

let genreId;
let data = {
    name: "Ska",
}
let dataArtist = {
    "name": "Juan Luis Guerra",
    "country": "Puerto Rico",
    "formationYear": 1983,
    "image": "image"
}

test("GET /genres should return status 200", async() => {
    const res = await request(app).get("/genres");
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveLength(2);
    expect(res.body[0].artists).toBeDefined()
})

test("POST /genres should return status 201", async() => {
    const res = await request(app).post("/genres").send(data);
    genreId = res.body.id
    expect(res.statusCode).toBe(201);
    expect(res.body.name).toBe(data.name)
})

test("POST /:id/artists should return status 201", async() =>{
    const artist = await Artist.create(dataArtist);
    const res = await request(app).post(`/genres/${genreId}/artists`).send([artist.id]);
    await artist.destroy()
    expect(res.statusCode).toBe(201);
    expect(res.body.length).toBe(1)
})

test("GET /genres/:id to getOne should return status 200", async() => {
    const res = await request(app).get(`/genres/${genreId}`);
    expect(res.statusCode).toBe(200);
    expect(res.body.name).toBe(data.name)
    expect(res.body.artists).toBeDefined()
})

test("PUT /genres/:id should return status 201", async() => {
    const res = await request(app).put(`/genres/${genreId}`).send({"name": "Opera"});
    expect(res.statusCode).toBe(200);
    expect(res.body.name).toBe("Opera")
})

test("DELETE /genres/:id should return status 204", async() => {
    const res = await request(app).delete(`/genres/${genreId}`);
    expect(res.statusCode).toBe(204);
})