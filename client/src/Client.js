/* eslint-disable no-undef */
/*
CUSTOMERS
*/
function getCustomers(success) {
  return fetch('/api/v1/customers', {
    headers: {
      Accept: 'application/json',
    },
  }).then(checkStatus)
    .then(parseJSON)
    .then(success);
}

function getCustomerByProgress(progressType, success) {
  return fetch(`/api/v1/customers/progress/${progressType}`, {
    headers: {
      Accept: 'application/json',
    },
  }).then(checkStatus)
    .then(parseJSON)
    .then(success);
}

function getCustomerByStatus(statusType, success) {
  return fetch(`/api/v1/customers/status/${statusType}`, {
    headers: {
      Accept: 'application/json',
    },
  }).then(checkStatus)
    .then(parseJSON)
    .then(success);
}

function getProgressStats(success) {
  return fetch('/api/v1/customers/progress/data/stats', {
    headers: {
      Accept: 'application/json',
    },
  }).then(checkStatus)
    .then(parseJSON)
    .then(success);
}

function getCustomerByID(id, success) {
  return fetch(`/api/v1/customers/${id}`, {
    headers: {
      Accept: 'application/json',
    },
  }).then(checkStatus)
    .then(parseJSON)
    .then(success);
}

function createCustomer(data, callBack) {
  return fetch('/api/v1/customers', {
    method: 'post',
    body: JSON.stringify(data),
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
  }).then(checkStatus)
    .then(parseJSON)
    .then(callBack);
}

function updateCustomer(data) {
  return fetch('/api/v1/customers/' + data.id, {
    method: 'put',
    body: JSON.stringify(data),
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
  }).then(checkStatus);
}

function deleteCustomer(data) {
  return fetch('/api/v1/customers', {
    method: 'delete',
    body: JSON.stringify(data),
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
  }).then(checkStatus);
}

/*
  NOTES
*/
function getCustomerNotes(customer_id, success) {
  return fetch(`/api/v1/notes/${customer_id}`, {
    headers: {
      Accept: 'application/json',
    },
  }).then(checkStatus)
    .then(parseJSON)
    .then(success);
}

function createNote(data, callBack) {
  return fetch('/api/v1/notes', {
    method: 'post',
    body: JSON.stringify(data),
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
  }).then(checkStatus)
    .then(parseJSON)
    .then(callBack);
}

/*
  Orders
*/
function getCustomerOrders(customer_id, success) {
  return fetch(`/api/v1/customers/${customer_id}/orders`, {
    headers: {
      Accept: 'application/json',
    },
  }).then(checkStatus)
    .then(parseJSON)
    .then(success);
}

/*
  Integrations: AIS
*/
function getMarketingPerformance(success) {
  return fetch(`/api/v1/marketing/performance`, {
    headers: {
      Accept: 'application/json',
    },
  }).then(checkStatus)
    .then(parseJSON)
    .then(success);
}

/*
  Integrations: Production System
*/
function loginProductionSystem(callBack) {
  return fetch('https://recreation-usa.mikeross.xyz/api/auth/login', {
    method: 'post',
    body: JSON.stringify(
      {
          name: "crm1",
          password: "CustomersEatPie3"
      }
    ),
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
  }).then(checkStatus)
    .then(parseJSON)
    .then(callBack);
}

function getProductionInventory(token, success) {
  return fetch(`https://recreation-usa.mikeross.xyz/api/inventory?token=${token}`, {
    headers: {
      Accept: 'application/json',
    },
  }).then(checkStatus)
    .then(parseJSON)
    .then(success);
}

/*
  HELPERS
*/
function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  const error = new Error(`HTTP Error ${response.statusText}`);
  error.status = response.statusText;
  error.response = response;
  console.log(error); // eslint-disable-line no-console
  throw error;
}

function parseJSON(response) {
  return response.json();
}

const Client = {
  getCustomers,
  getCustomerByProgress,
  getCustomerByStatus,
  getProgressStats,
  getCustomerByID,
  createCustomer,
  updateCustomer,
  deleteCustomer,
  getCustomerNotes,
  createNote,
  getCustomerOrders,
  getMarketingPerformance,
  loginProductionSystem,
  getProductionInventory
};

export default Client;
