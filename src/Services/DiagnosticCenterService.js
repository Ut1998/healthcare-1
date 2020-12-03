import axios from "axios";
import React from "react";

const CENTER_API_BASE_URL = "http://localhost:8080/health/";

class DiagnosticCenterService {
  viewAllCenters() {
    return axios.get(CENTER_API_BASE_URL + "retrievecenters" + "/" + "all");
  }

  addDiagnosticCenter(diagnosticCenter) {
    return axios.post(CENTER_API_BASE_URL + "addcenter", diagnosticCenter);
  }

  getCenterById(centerId) {
    return axios.get(CENTER_API_BASE_URL + "retrievecenters" + "/" + centerId);
  }

  updateDiagnosticCenter(centerId, diagnosticCenter) {
    return axios.put(
      CENTER_API_BASE_URL + "updatecenter" + "/" + centerId,
      diagnosticCenter
    );
  }

  deleteDiagnosticCenter(centerId) {
    return axios.delete(CENTER_API_BASE_URL + "deletecenter" + "/" + centerId);
  }
}

export default new DiagnosticCenterService();
