export const useSendEvent = (...args) => {
  if (window.ga && window.ga.send) {
    return window.ga.send('send', 'event', ...args);
  };

  console.log(JSON.stringify(args));
};
