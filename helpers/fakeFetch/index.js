const base = (method, url, requestData, responseData) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (responseData.success) resolve(responseData);
      else reject(new Error());
    }, 1000);
  });
};

const fakeFetch = {};

['get', 'post', 'put', 'delete', 'patch'].forEach(method => {
  fakeFetch[method] = base.bind(Object.create(null), method);
});

export default fakeFetch;
