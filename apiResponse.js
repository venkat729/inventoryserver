function apiResponse(msg,status) {
  return {
    data: msg,
    success: status
  };
}

module.exports = apiResponse