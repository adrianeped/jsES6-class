class CustomError extends Error{
    constructor ({message, data}) {
        super(message);
        this.data = data;
    }
}

try{
const name = 'Adriane Antunes';

const myError = new CustomError({
    message: 'Custom message on custom error',
    data: {
        type: 'Server error'
    }
});

throw myError
} catch(err) {
    if (err.data.type === 'Server error') {
        console.log(err);
    } else {
        console.log(err.data);
    }

    //console.log(err);
    //console.log(err.data);
} finally {
    console.log('Keep going...');
}

