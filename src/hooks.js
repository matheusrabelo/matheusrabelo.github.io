const isBrowser = typeof window !== 'undefined';

export const useSendEvent = () => {
  if (isBrowser && window?.ga?.getAll) {
    const tracker = window.ga.getAll()[0];

    return ({ category, action, label }) => tracker.send({
      hitType: 'event',
      eventCategory: category,
      eventAction: action,
      eventLabel: label
    });
  };

  return (...args) => console.log(JSON.stringify(args));
};
