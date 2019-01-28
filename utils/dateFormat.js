export default {
  isoDateToDMY: (dateConvert, spacetor) => {
    let date = new Date(dateConvert);
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let dt = date.getDate();

    if (dt < 10) {
      dt = "0" + dt;
    }
    if (month < 10) {
      month = "0" + month;
    }
    if (!spacetor) spacetor = "/";
    return `${dt}${spacetor}${month}${spacetor}${year}`;
  },

  isoDateToYMD: (dateConvert, spacetor) => {
    let date = new Date(dateConvert);
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let dt = date.getDate();

    if (dt < 10) {
      dt = "0" + dt;
    }
    if (month < 10) {
      month = "0" + month;
    }
    if (!spacetor) {
      spacetor = "/";
    }
    return `${year}${spacetor}${month}${spacetor}${dt}`;
  },

  toIsoDate: dateString => {
    var date = new Date(
      dateString.replace(/(\d{2})-(\d{2})-(\d{4})/, "$2/$1/$3")
    );
    return date.toISOString();
  }
};
