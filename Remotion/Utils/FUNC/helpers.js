export function getProperty(obj, prop) {
    if (obj.hasOwnProperty(prop)) {
      return obj[prop];
    } else {
      return undefined;
    }
  }