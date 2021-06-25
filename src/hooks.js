const isBrowser = typeof window !== 'undefined';

export const useSendEvent = (...args) => {
  if (isBrowser && window?.ga?.send) {
    return (...args) => window.ga.send('send', 'event', ...args);
  };

  return (...args) => console.log(JSON.stringify(args));
};
