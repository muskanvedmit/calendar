import { API } from "./config";
import axios from "axios";

const authHeader = () => {
  // Assuming the token is stored in local storage or retrieved from some auth service
  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NSwibmFtZSI6Ik1hbmlzaDEgUGF0aGFrMSIsImVtYWlsIjoibWFuaXNoQGdtYWlsLmNvbSIsInJvbGVfaWQiOjEsInJvbGUiOiJTdXBlckFkbWluIiwicm9sZV9wZXJtaXNzaW9ucyI6IntcIkRhc2hib2FyZFwiOiB0cnVlLCBcIkZldGNoXCI6IHRydWUsIFwiRmx1c2hcIjogdHJ1ZSwgXCJDb25maWdcIjogdHJ1ZSwgXCJDaGFuZ2VQYXNzd29yZFwiOiB0cnVlLCBcIlByb2plY3RzXCI6IHRydWUsXCJEZXZlbG9wZXJzXCI6ZmFsc2V9IiwiaWF0IjoxNzE2NDQzNjU5LCJleHAiOjE3MTY1MzAwNTl9.IuTnFNpsp4IDT1DkkpxrQyEvhUTzNizEmbsDjQCEG7I';
  return {
    'x-access-token': token,
    // You can add other headers here if needed
  };
};

export const CreatemasterDeveloper = async (reqData) => {
  return await axios({
    method: "POST",
    url: `${API.createMasterdeveloper}`,
    data: reqData,
    headers: authHeader(),
  })
    .then((request) => {
      return request;
    })
    .catch((error) => {
      if (error.response.status === 401) {

      }
      return error;
    });
};

export const getTimesheetDataById = async (id) => {
  return await axios({
    method: "POST",
    url: `${API.getTimesheetDataById}/${id}`,
    headers: authHeader(),
  })
    .then((request) => {
      return request;
    })
    .catch((error) => {
      if (error.response.status === 401) {
      
      }
      return error;
    });
};

export const getDeveloper = async () => {
  return await axios({
    method: "GET",
    url: `${API.getDeveloper}`,
    headers: authHeader(),
  })
    .then((request) => {
      return request;
    })
    .catch((error) => {
      if (error.response.status === 401) {
        
      }
      return error;
    });
};