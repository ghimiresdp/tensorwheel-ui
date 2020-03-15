export const actions = {
  success,
  error,
  warning,
  info,
  clear
};

function success(message) {
  return {type: 'SUCCESS', message};
}

function error(message) {
  return {type: 'ERROR', message};
}

function warning(message) {
  return {type: 'ERROR', message};
}

function info(message) {
  return {type: 'ERROR', message};
}

function clear() {
  return {type: 'CLEAR'};
}