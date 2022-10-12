const PropTypes = {
  string(props, propName, componentName) {
    let value = props[propName];
    let valueType = typeof value;
    if (valueType !== 'string') {
      throw new TypeError(`
        ${componentName} 컴포넌트의 ${propName} prop의 타입 기댓값은 "string"이나, 전달된 타입은 ${valueType}입니다.
      `);
    }
  },
  number(props, propName, componentName) {
    let value = props[propName];
    let valueType = typeof value;
    if (valueType !== 'number') {
      throw new TypeError(`
        ${componentName} 컴포넌트의 ${propName} prop의 타입 기댓값은 "number"이나, 전달된 타입은 ${valueType}입니다.
      `);
    }
  },
};

export default PropTypes;
