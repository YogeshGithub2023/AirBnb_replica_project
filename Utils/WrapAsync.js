// WrapAsync_Utils

// we can write above code, in this way
module.exports = (fn) => {
    return (req, res, next) => {
        fn(req, res, next).catch(next);
    };
}

// ......................................................................................................................