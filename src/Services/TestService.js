import React from 'react';
import axios from 'axios';
const HEALTH_API__URL="http://localhost:8080/health";
//const HEALTH_API_URL="http://localhost:8080/health/tests/getAllTests";
class TestService
{
    // constructor(props)
    // {
    //     //super(props);
    //     this.state={
    //         testName:'',
    //         testPrice:'',
    //         normalValue:'',
    //         units:'',
            
            
    //     }
    // }
    getAllTest(){
        return axios.get(HEALTH_API__URL+"/tests/getAllTests");
        //return axios.get(HEALTH_API_URL);
    }
    addTest(tests){
        return axios.post(HEALTH_API__URL+"/tests/addTest",tests);
    }
    viewAllCenters() {
        return axios.get(HEALTH_API__URL + "retrievecenters" + "/" + "all");
    }
    getTestByid(testId)
    {
        return axios.get(HEALTH_API__URL+'/'+testId);
    }
    updateTest(testId,test)
    {
        return axios.put(HEALTH_API__URL+'/'+testId,test);
    }
    
}
export default new TestService();