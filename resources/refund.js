/*
Paystack API - Refund
*/

const route = "/refund";

module.exports = {
  /*
  Create Refund
  */
  create: {
    method: "post",
    route: route,
    params: ["transaction*"] // ...
  },

  /*
  List Refunds
  */
  list: {
    method: "get",
    route: route
  },

  /*
  Get Refund
  */
  get: {
    method: "get",
    route: `${route}/{trans_id}`
  }
};
