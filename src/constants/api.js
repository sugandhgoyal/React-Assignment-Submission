export const FETCH_DATA = `http://localhost:3000/data`;

/**
 * Api to convert one currency to another
 * @param {string} scurr - source currency
 * @param {string} dcurr - destination currency
 * @param {number} samount - source amount
 */
export const FETCH_CONVERT_DATA = (scurr,dcurr,samount) => {
    return `https://data.fixer.io/api/convert?access_key=a22225565c9b3d18d2ebb3694ef5f6e4&from=${scurr}&to=${dcurr}&amount=${samount}`;
}
