// ExpressError_Utils

// Custom ExpressError:-

class ExpressError extends Error {
    // Constructor
    constructor(statusCode, message) {
        // Super Constructor
        super();
        this.statusCode = statusCode;
        this.message = message;
    }
}

module.exports = ExpressError;

// ......................................................................................................................