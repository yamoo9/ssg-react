// 내보내지 않을 것
function getStyle(element, property, pseudoElement = null) {
  return getComputedStyle(element, pseudoElement).getPropertyValue(property);
}

function setStyle(element, property, value) {
  element.style[property] = value;
}

// 내보낼 것
export const css = (element, property, value) => {
  if (!value) {
    return getStyle(element, property);
  } else {
    setStyle(element, property, value);
  }
};
