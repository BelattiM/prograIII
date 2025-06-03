const validate = (schema) => {
    return (req, res, next) => {
        const { error } = schema.validate(req.body, {abortEarly: false});
        if (error) {
            const errores = error.details.map(e => ({
                message: e.message
            }));
            return res.status(400).json({
                errores
            });
        }
        next();
    };
};

module.exports = validate;