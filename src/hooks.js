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
  const variantName = `ab_${experiment}`;

  const handleVariant = useCallback(() => {
    setVariant(experiment);
  }, [experiment]);

  useEffect(() => {
    window.addEventListener(variantName, handleVariant);

    return () => {
      window.removeEventListener(variantName, handleVariant);
    };
  }, [variantName, handleVariant]);

  return variant;
};
