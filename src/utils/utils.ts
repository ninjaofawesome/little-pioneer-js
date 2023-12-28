/**
 * 
 * @param {*} obj 
 * 
 * fetches all the JSON data from a file/url and returns it for use
 */

export const readJSON = async (file) => {
    const response = await fetch(file);
    return await response.json();
};

/**
 * 
 * @param {*} file 
 * @returns 
 * 
 * handy utility for logging JSON data using the readJSON function
 */

export const JSONLogger = (file) => readJSON(file).then(data => console.log(data)); 
 