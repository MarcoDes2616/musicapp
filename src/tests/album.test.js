const request = require("supertest")
const app = require("../app");
require("../models")

let albumId;
let data = {
    "name": "entre",
    "releaseYear": 1983,
    "image": "image",
    "artistId": 1
}

// let dataCourse = {
//     name: "React js",
//     credits: 3
// }

test("GET /albums should return status 200", async() => {
    const res = await request(app).get("/albums");
    console.log(res.body);
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveLength(2);
    // expect(res.body[0].artist).toBeDefined()
    // expect(res.body[0].songs).toBeDefined()
})

// test("POST /albums should return status 201", async() => {
//     const res = await request(app).post("/albums").send(data);
//     albumId = res.body.id
//     expect(res.statusCode).toBe(201);
//     expect(res.body.name).toBe(data.name)
// })

// test("POST /:id/courses should return status 201", async() =>{
//     const course = await Course.create(dataCourse);
//     const res = await request(app).post(`/students/${studentId}/courses`).send([course.id]);
//     await course.destroy()
//     expect(res.statusCode).toBe(201);
//     expect(res.body.length).toBe(1)
// })

// test("GET /albums/:id to getOne should return status 200", async() => {
//     const res = await request(app).get(`/albums/${albumId}`);
//     expect(res.statusCode).toBe(200);
//     expect(res.body.name).toBe(data.name)
//     expect(res.body.artist).toBeDefined()
//     expect(res.body.songs).toBeDefined()
// })

// test("PUT /albums/:id should return status 201", async() => {
//     const res = await request(app).put(`/albums/${albumId}`).send({"program": "Programacion"});
//     expect(res.statusCode).toBe(200);
//     expect(res.body.program).toBe("Programacion")
// })

// test("DELETE /albums/:id should return status 204", async() => {
//     const res = await request(app).delete(`/albums/${albumId}`);
//     expect(res.statusCode).toBe(204);
// })