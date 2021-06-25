const log = (...args) => console.log(JSON.stringify(args));

export const useSendEvent = () => ({ category, action, label }) => {
  const tracker = window?.ga?.getAll()[0] || { send: log };
  tracker.send({
    hitType: 'event',
    eventCategory: category,
    eventAction: action,
    eventLabel: label
  });
};
