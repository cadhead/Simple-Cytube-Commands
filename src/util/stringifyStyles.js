export default styles => {
  let style = { ...styles };
  
  let styleString = (
    Object.entries(style).reduce((styleString, [propName, propValue]) => {
      return `${styleString}${propName}:${propValue};`;
    }, '')
  );

  return styleString
}