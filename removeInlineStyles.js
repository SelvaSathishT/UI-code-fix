module.exports = function transformer(file, api) {
  const j = api.jscodeshift;
  const root = j(file.source);

  root.find(j.JSXAttribute, { name: { name: 'style' } }).remove();

  return root.toSource();
};
