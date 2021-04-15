export const habitValidator = (title) => {
    let isValid = true;
    isValid = isValid && title.length>1;
    isValid = isValid && title.length<50;
    return isValid;
}

export const taskValidator = (task) => {
    let isValid = true;
    isValid = isValid && task.title.value.length>1;
    isValid = isValid && task.title.value.length<50;
    isValid = isValid && task.date.value!=="";
    return isValid;
}