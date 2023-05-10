const request = require("supertest")
const app = require("../app");
require("../models")

let genreId;
let data = {
    name: "Ska",
}

test("GET /genres should return status 200", async() => {
    const res = await request(app).get("/genres");
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveLength(2);
})

test("POST /genres should return status 201", async() => {
    const res = await request(app).post("/genres").send(data);
    genreId = res.body.id
    expect(res.statusCode).toBe(201);
    expect(res.body.name).toBe(data.name)
})

test("GET /genres/:id to getOne should return status 200", async() => {
    const res = await request(app).get(`/genres/${genreId}`);
    expect(res.statusCode).toBe(200);
    expect(res.body.name).toBe(data.name)
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