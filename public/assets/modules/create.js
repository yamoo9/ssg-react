const create = (type, attrs = null, ...children) => {
  const element = document.createElement(type);
  if (attrs && typeof attrs === 'object' && !Array.isArray(attrs)) {
    for (const [name, value] of Object.entries(attrs)) {
      element.setAttribute(name, value);
    }
  }
  children.forEach((child) => element.append(child));
  return element;
};

export default create;