import * as jQuery from "jquery";

const posts_api = "/blog-api/post/";
const topic_api = "/blog-api/topic/";
const author_api = "/blog-api/author/";

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

function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}

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

  const response_data = await fetch(`${api}/${pk}`)
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

  const response_data = await fetch(`${api}/${pk}`, requestOptions)
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

  const response_data = await fetch(`${api}/${pk}`, requestOptions)
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => console.log(error));
  return response_data;
};
