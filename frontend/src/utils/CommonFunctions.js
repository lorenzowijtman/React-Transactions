export function checkName(name) {

    let regex = /^[0-9a-zA-Z]{1,20}$/;

    if (!new RegExp(regex).test(name)) {
        return false
    } else {
        return true;
    }
}

export function checkDescription(description) {
    let regex = /^[^\s]+[-a-zA-Z0-9\s]+([-a-zA-Z0-9]+)*$/;


    if (!new RegExp(regex).test(description)) {
        console.log(false);
        return false
    } else {
        return true;
    }
}
