const mongoose = require("mongoose");
const supertest = require("supertest");
const app = require("../index");
const api = supertest(app);
const User = require("../models/userModel");
const Workout = require("../models/workoutModel");
const workouts = require("./data/workouts.js");

let token = null;

describe("Testing the api", () => {
  beforeAll(async () => {
    await User.deleteMany({});
    const result = await api
      .post("/api/user/signup")
      .send({ email: "mattiv@matti.fi", password: "R3g5T7#gh" });
    token = result.body.token;
  });

  describe("Response code 200, when there is initially some workouts saved", () => {
    beforeEach(async () => {
      await Workout.deleteMany({});
      await api
        .post("/api/workouts")
        .set("Authorization", "bearer " + token)
        .send(workouts[0])
        .send(workouts[1]);
    });

    test("Response code 200, workouts are returned as json", async () => {
      await api
        .get("/api/workouts")
        .set("Authorization", "bearer " + token)
        .expect(200)
        .expect("Content-Type", /application\/json/);
    });

    test("Response code 200, new workout added successfully", async () => {
      const newWorkout = {
        title: "testworkout",
        reps: 10,
        load: 100,
      };
      await api
        .post("/api/workouts")
        .set("Authorization", "bearer " + token)
        .send(newWorkout)
        .expect(201);
    });


    test("Updating a single workout by id", async () => {
      // first create a workout
      const newWorkout = {
        title: "thirtyWorkout",
        reps: 8,
        load: 60,
      };

      const createdWorkout = await api
        .post("/api/workouts")
        .set("Authorization", "bearer " + token)
        .send(newWorkout)
        .expect(201);

      const workoutId = createdWorkout.body._id;

      const amendedWorkout = {
        title: "doubleWorkout",
        load: 20,
      };


      const response = await api
        .patch(`/api/workouts/${workoutId}`)
        .set("Authorization", "bearer " + token)
        .send(amendedWorkout)
        .expect(200)
        .expect("Content-Type", /application\/json/);

      expect(response.body.title).toBe(amendedWorkout.title);
      expect(response.body.reps).toBe(newWorkout.reps);
      expect(response.body.load).toBe(amendedWorkout.load);
    });



    test("Reading a single workout by id", async () => {
      // first create a workout
      const newWorkout = {
        title: "singleWorkout",
        reps: 8,
        load: 60,
      };

      const createdWorkout = await api
        .post("/api/workouts")
        .set("Authorization", "bearer " + token)
        .send(newWorkout)
        .expect(201);

      const workoutId = createdWorkout.body._id;

      // now fetch it by id
      const response = await api
        .get(`/api/workouts/${workoutId}`)
        .set("Authorization", "bearer " + token)
        .expect(200)
        .expect("Content-Type", /application\/json/);

      expect(response.body.title).toBe(newWorkout.title);
      expect(response.body.reps).toBe(newWorkout.reps);
      expect(response.body.load).toBe(newWorkout.load);
    });

    test("Deleting a single workout by id", async () => {
      const newWorkout = {
        title: "todelete",
        reps: 5,
        load: 40,
      };
      const createdWorkout = await api
        .post("/api/workouts")
        .set("Authorization", "bearer " + token)
        .send(newWorkout)
        .expect(201);

      const workoutId = createdWorkout.body._id;

      // now fetch it by id
      await api
        .delete(`/api/workouts/${workoutId}`)
        .set("Authorization", "bearer " + token)
        .expect(200)
    });
  });
});

afterAll(() => {
  mongoose.connection.close();
});
