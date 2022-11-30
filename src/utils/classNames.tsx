export default function (classes: any) {
  if (!classes) {
    return '';
  }
  if (Array.isArray(classes)) {
    return classes.filter((item) => item && item.length > 0).join(' ');
  }
  var res: any = [];
  Object.keys(classes).map(function (className) {
    classes[className] && res.push(className);
  });
  return res.length ? res.join(' ') : '';
}
