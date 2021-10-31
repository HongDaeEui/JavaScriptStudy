axios.request({
  method: "GET",
  url: `https://www.test.com`,
  headers: { "Content-Type": "application/json" },
  params: { msg: hi },
});

axios.request({
  method: "POST",
  url: `https://www.test.com`,
  headers: { "Content-Type": "application/json" },
  data: { password: "testpw123" },
});

const formdata = new FormData();
formdata.append("password", "testpw123");
axios.request({ method: "POST", url: `https://www.test.com`, data: formdata });
