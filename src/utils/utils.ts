/**
 * 
 * @param {*} obj 
 * 
 * fetches all the JSON data from a file/url and returns it for use
 */

export const readJSON = async (file: string) => {
    const response = await fetch(file);
    const json = await response.json();
    return json;
};

/**
 * 
 * @param {*} file 
 * @returns 
 * 
 * handy utility for logging JSON data using the readJSON function
 */

export const JSONLogger = (file: string) => readJSON(file).then(data => console.log(data)); 
 