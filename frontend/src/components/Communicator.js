import * as jQuery from "jquery";

const posts_api = "/blog-api/post/";
const topic_api = "/blog-api/topic/";
const author_api = "/blog-api/author/";

const auth_api = "/auth-api/";
const user_info_api = "/user-api/";

const chooseApi = (use) => {
  var api = posts_api;
  switch (use) {
    case "post":
      api = posts_api;
      break;
    case "topic":
      api = topic_api;
      break;
    case "author":
      api = author_api;
      break;
    default:
      api = posts_api;
  }

  return api;
};

function getCookie(name) {
  var cookieValue = null;
  if (document.cookie && document.cookie !== "") {
    var cookies = document.cookie.split(";");
    for (var i = 0; i < cookies.length; i++) {
      var cookie = jQuery.trim(cookies[i]);
      if (cookie.substring(0, name.length + 1) === name + "=") {
        cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
        break;
      }
    }
  }
  return cookieValue;
}

// // Not required, but still a helpful function
// function handleErrors(response) {
//   if (!response.ok) {
//     throw Error(response.statusText);
//   }
//   return response;
// }

export const getList = async (use = "post") => {
  const api = chooseApi(use);

  const response_data = await fetch(api)
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => console.log(error));
  return response_data;
};

export const getDocument = async (use = "post", pk = "1") => {
  const api = chooseApi(use);

  const response_data = await fetch(`${api}${pk}`)
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => console.log(error));
  return response_data;
};

export const postDocument = async (instance, use = "post", pk = "1") => {
  const api = chooseApi(use);
  var csrftoken = getCookie("csrftoken");

  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      // Authorization: `Token ${tkn}`,
      "X-CSRFToken": csrftoken,
    },
    body: JSON.stringify(instance),
  };

  const response_data = await fetch(`${api}${pk}`, requestOptions)
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => console.log(error));
  return response_data;
};

export const insertDocument = async (instance, use = "post") => {
  const api = chooseApi(use);
  var csrftoken = getCookie("csrftoken");

  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      // Authorization: `Token ${tkn}`,
      "X-CSRFToken": csrftoken,
    },
    body: JSON.stringify(instance),
  };

  const response_data = await fetch(`${api}`, requestOptions)
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => console.log(error));
  return response_data;
};

export const deleteDocument = async (use = "post", pk = "1") => {
  const api = chooseApi(use);
  var csrftoken = getCookie("csrftoken");

  const requestOptions = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      // Authorization: `Token ${tkn}`,
      "X-CSRFToken": csrftoken,
    },
  };

  const response_data = await fetch(`${api}${pk}`, requestOptions)
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => console.log(error));
  return response_data;
};

export const loginUser = async (credential) => {
  const api = auth_api;
  var csrftoken = getCookie("csrftoken");

  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      // Authorization: `Token ${tkn}`,
      "X-CSRFToken": csrftoken,
    },
    body: JSON.stringify(credential),
  };

  const response_data = await fetch(`${api}`, requestOptions)
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => console.log(error));
  return response_data;
};

export const get_user = async (api = user_info_api) => {
  if (api === null) {
    api = user_info_api;
  }
  var csrftoken = getCookie("csrftoken");
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json", "X-CSRFToken": csrftoken },
    body: JSON.stringify({}),
  };
  const data = await fetch(api, requestOptions)
    .then((respo) => respo.json())
    .then((data) => data);
  // console.log(data);
  return data;
};

export const logoutUser = async () => {
  const api = user_info_api;
  var csrftoken = getCookie("csrftoken");
  const requestOptions = {
    method: "DELETE",
    headers: { "Content-Type": "application/json", "X-CSRFToken": csrftoken },
    body: JSON.stringify({}),
  };
  const data = await fetch(api, requestOptions)
    .then((respo) => respo.json())
    .then((data) => data);
  console.log(data);
  return data;
};

const options = () => {
  var csrftoken = getCookie("csrftoken");

  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json", "X-CSRFToken": csrftoken },
    body: JSON.stringify({}),
  };
  return requestOptions;
};
export const fetcher = (url) => fetch(url, options()).then((r) => r.json());
