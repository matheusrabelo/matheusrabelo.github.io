import { useState, useEffect, useCallback } from "react";

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

  const handleVariant = useCallback(() => {
    setVariant(true);
  }, [experiment]);

  useEffect(() => {
    window.addEventListener(experiment, handleVariant);

    return () => {
      window.removeEventListener(experiment, handleVariant);
    };
  }, [experiment, handleVariant]);

  return variant;
};

export const useMultiVariant = (experiment) => {
  const [variant, setVariant] = useState(null);

  const handleMultiVariant = useCallback((event) => {
    setVariant(event.detail());
  });

  useEffect(() => {
    window.addEventListener(experiment, handleMultiVariant);

    return () => {
      window.removeEventListener(experiment, handleMultiVariant);
    };
  }, [experiment, handleMultiVariant]);

  return variant;
};
