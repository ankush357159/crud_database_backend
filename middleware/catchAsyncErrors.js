module.exports = (prop) => (req, res, next) => {
	Promise.resolve(prop(req, res, next)).catch(next);
};
