//const { request, expect } = require("./config.js");
import {request, expect} from './config.js';


describe ("Airport Api",  () => {
describe("GET /airports", () => {
  describe("When retireving airports ", () => {  
  it("should return list of all airports, limited to 30 per page", async () => {
    const response = await request.get("/airports");

    expect(response.status).to.eql(200);
    expect(response.body.data.length).to.eql(30);
  });
});
})  

describe("POST /airports/distance", () => {
  describe("when calculating the distance b/w the two airports", () => { 
  it("it should return a 200 status code and the distance between two airports", async () => {
    const response = await request
      .post("/airports/distance")
      .send({ from: "KIX", to: "SFO" });

    expect(response.status).to.eql(200);

    const attributes = response.body.data.attributes;
    expect(attributes).to.include.keys(
      "kilometers",
      "miles",
      "nautical_miles"
    );

    expect(attributes.kilometers).to.be.closeTo(8692, 1);
    expect(attributes.miles).to.be.closeTo(5397, 1);
    expect(attributes.nautical_miles).to.be.closeTo(4690, 1);
  });
});
})
})