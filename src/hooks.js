const isBrowser = typeof window !== 'undefined';

export const useSendEvent = () => {
  if (isBrowser && window?.ga?.getAll) {
    const tracker = window.ga.getAll()[0];

    return (...args) => tracker.send('send', 'event', ...args);
  };

  return () => (...args) => console.log(JSON.stringify(args));
};
