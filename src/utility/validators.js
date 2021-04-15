export const habitValidator = (title) => {
    let isValid = true;
    isValid = isValid && title.length>1;
    isValid = isValid && title.length<50;
    return isValid;
}