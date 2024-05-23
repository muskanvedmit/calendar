// export const BASE_URL = "https://apimis.mangoitsol.com/api";
export const BASE_URL = "http://localhost:5003/api";

export const API = {
  authToken: `${BASE_URL}/getauthorizationtoken`,
  register: `${BASE_URL}/register`,
  login: `${BASE_URL}/login`,
  changePassword: `${BASE_URL}/change-password`,

  // Fetch Spreadsheet Data
  deleteTimesheetdata: `${BASE_URL}/delete-timesheet-data`,
  readSpreadSheetLink: `${BASE_URL}/read-spreadsheet-data`,
  saveSpreadSheetLink: `${BASE_URL}/save-datasheet-link`,
  readSpreadSheetNames: `${BASE_URL}/read-spreadsheet-sheet_names`,
  //master developer
  createMasterdeveloper: `${BASE_URL}/create-master-developer`,
  updateMasterdeveloper: `${BASE_URL}/update-master-developer`,
  getDeveloper: `${BASE_URL}/get-master-developer`,

  // master project
  createMasterProject: `${BASE_URL}/create-master-project`,
  getProject: `${BASE_URL}/get-master-projects`,

  // timesheet data
  saveTimesheetData: `${BASE_URL}/save-timesheet-data`,
  getTimesheetData: `${BASE_URL}/get-timesheets-data`,
  getTimesheetDataById: `${BASE_URL}/get-timesheets-data`,

  // dashboard data

  getDashboardData: `${BASE_URL}/get-dashboard-data`,
};
