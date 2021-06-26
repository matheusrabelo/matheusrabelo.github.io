import { useState, useEffect } from "react";

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

export const useAB = (experiment) => {
  const [variant, setVariant] = useState(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && window.ab) {
      setVariant(window?.ab[experiment]);
    }
  }, [experiment, typeof window !== 'undefined' && window.ab]);

  return variant;
};
