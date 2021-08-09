export const proxy =
  window.location.protocol + "//" + window.location.hostname + ":8000/";

export const blankUser = {
  username: "",
  group: [],
  active: false,
  isActive: false,
  isStaff: false,
  isSuperUser: false,
};
