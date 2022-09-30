export const animate = (() => {
  let stopAnimateId;
  return (render, fps) => {
    stopAnimateId = setInterval(render, 1000 / fps);
    return () => clearInterval(stopAnimateId);
  };
})();