import React from "react";
import axios from "axios";
const HEALTH_API__URL = "http://localhost:8080/health";

class TestService {
  getAllTest() {
    return axios.get(HEALTH_API__URL + "/tests/getAllTests");
  }
  addTest(tests) {
    return axios.post(HEALTH_API__URL + "/tests/addTest", tests);
  }
  viewAllCenters() {
    return axios.get(HEALTH_API__URL + "retrievecenters" + "/" + "all");
  }
  getTestByid(testId) {
    return axios.get(HEALTH_API__URL + "/" + testId);
  }
  updateTest(testId, test) {
    return axios.put(HEALTH_API__URL + "/" + testId, test);
  }
  removeTest(id) {
    return axios.delete("http://localhost:8080/health/tests/deleteTest/" + id);
  }
}
export default new TestService();
