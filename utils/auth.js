// import jwtDecode from 'jwt-decode'
// import Cookie from 'js-cookie'

const getQueryParams = () => {
  const params = {};
  window.location.href.replace(
    /([^(?|#)=&]+)(=([^&]*))?/g,
    ($0, $1, $2, $3) => {
      params[$1] = $3;
    }
  );
  return params;
};

export const extractInfoFromHash = () => {
  if (process.SERVER_BUILD) return;
  const { id_token, state } = getQueryParams();
  return {
    token: id_token,
    secret: state
  };
};

export const setStorageUser = user => {
  if (process.SERVER_BUILD) return;
  window.localStorage.setItem("user", JSON.stringify(user));
};

export const unSetStorageUser = () => {
  if (process.SERVER_BUILD) return;
  window.localStorage.removeItem("user");
};

export const getUserFromLocalStorage = () => {
  const json = window.localStorage.user;
  return json ? JSON.parse(json) : undefined;
};

export const setToken = token => {
  if (process.SERVER_BUILD) return;
  window.localStorage.setItem("token", token);
  window.localStorage.setItem("user", JSON.stringify(jwtDecode(token)));
  Cookie.set("jwt", token);
};

export const unsetToken = () => {
  if (process.SERVER_BUILD) return;
  window.localStorage.removeItem("token");
  window.localStorage.removeItem("user");
  window.localStorage.removeItem("secret");
  Cookie.remove("jwt");
  window.localStorage.setItem("logout", Date.now());
};

export const getUserFromSession = (req, store) => {
  if (
    !req.session ||
    !req.session.uId ||
    !req.session.uName ||
    !req.session.profileId ||
    !req.session.kanbanSettings
  )
    return null;
  const uId = req.session.uId;
  const uName = req.session.uName;
  const profileId = req.session.profileId;
  const kanbanSettings = req.session.kanbanSettings;
  const lastDb = req.session.lastDb ? req.session.lastDb : "";

  const user = {
    uId,
    _id: uId,
    login: uName,
    uName,
    profileId,
    kanbanSettings,
    lastDb
  };

  return user;
};

export const setSecret = secret =>
  window.localStorage.setItem("secret", secret);

export const checkSecret = secret => window.localStorage.secret === secret;
