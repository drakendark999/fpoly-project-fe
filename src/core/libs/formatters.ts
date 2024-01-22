// 2021-09-23T12:00:00.000Z => Sep 21 2021
export const dateToLocaleDateFormatter = (value: string): string => {
  return new Date(value).toDateString().replace(/^\S+\s/, '');
};

export const dateToLocaleDateFormatter2 = (value: Date | string): string => {
  return new Date(value).toDateString().replace(/^\S+\s/, '');
};

// 2021-09-23T12:00:00.000Z => 23/09/2021
export const dateToDDmmYYYYFormatter = (dateParam: Date): string => {
  const fullYear: string | number = dateParam.getFullYear();
  let month: string | number = dateParam.getMonth() + 1;
  let date: string | number = dateParam.getDate();

  if (month < 10) {
    month = '0' + month;
  }

  if (date < 10) {
    date = '0' + date;
  }

  return `${date}/${month}/${fullYear}`;
};

// 23/09/2021 => 2021-09-23
export const ddMMyyyyToYYYYmmDDFormatter = (dateParam: string): string => {
  return dateParam.split('/').reverse().join('-');
};

// 2021-09-23T12:00:00.000Z => 21/09/2021 12:00
export const dateToDDmmYYYYhhMMssFormatter = (dateParam: Date): string => {
  if (dateParam) {
    const fullYear: string | number = dateParam.getFullYear();
    let month: string | number = dateParam.getMonth() + 1;
    let date: string | number = dateParam.getDate();
    let hours: string | number = dateParam.getHours();
    let minutes: string | number = dateParam.getMinutes();
    let seconds: string | number = dateParam.getSeconds();

    if (month < 10) {
      month = '0' + month;
    }

    if (date < 10) {
      date = '0' + date;
    }

    if (hours < 10) {
      hours = '0' + hours;
    }

    if (minutes < 10) {
      minutes = '0' + minutes;
    }

    if (seconds < 10) {
      seconds = '0' + seconds;
    }

    return `${fullYear}-${month}-${date} ${hours}:${minutes}:${seconds}`;
  }

  return '';
};

// 2021-09-23T12:00:00.000Z => 2021-09-23
export const dateToYYYYmmDDFormatter = (dateParam: Date): string => {
  const fullYear: string | number = dateParam.getFullYear();
  let month: string | number = dateParam.getMonth() + 1;
  let date: string | number = dateParam.getDate();

  if (month < 10) {
    month = '0' + month;
  }

  if (date < 10) {
    date = '0' + date;
  }

  return `${fullYear}-${month}-${date}`;
};

// 2021-09-23T12:00:00.000Z => 09/21/2021 12:00
export const dateToMMddYYYYhhMMssFormatter = (dateParam: Date): string => {
  if (dateParam) {
    const fullYear: string | number = dateParam.getFullYear();
    let month: string | number = dateParam.getMonth() + 1;
    let date: string | number = dateParam.getDate();
    let hours: string | number = dateParam.getHours();
    let minutes: string | number = dateParam.getMinutes();

    if (month < 10) {
      month = '0' + month;
    }

    if (date < 10) {
      date = '0' + date;
    }

    if (hours < 10) {
      hours = '0' + hours;
    }

    if (minutes < 10) {
      minutes = '0' + minutes;
    }

    return `${month}/${date}/${fullYear} ${hours}:${minutes}`;
  }

  return '';
};
