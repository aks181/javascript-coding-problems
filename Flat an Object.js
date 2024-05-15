const user = {
    name: {
        firstName: 'John',
        midName: 'Von',
        lastName: 'Doe'
    },
    age: 27,
    address: {
        flatNumber: 21,
        area: {
            locality: 'Sector 12',
            city: {
                name: 'Noida',
                isMetro: false,
                pin: 203130
            }
        }
    }
}

function flattenObject(obj) {
    const flatObject = {};

    for (let key in obj) {
        if (typeof obj[key] === 'object' && obj[key] !== null) {
            const nestedObject = flattenObject(obj[key]);
            for (let nestedKey in nestedObject) {
                flatObject[`${key}.${nestedKey}`] = nestedObject[nestedKey]
            }
        } else {
            flatObject[key] = obj[key];
        }
    }

    return flatObject;
}

const flattenedObject = flattenObject(user);

function getValue(str) {
    if(flattenedObject.hasOwnProperty(str)) {
        return flattenedObject[str];
    } else return undefined;
}

console.log(flattenedObject);
console.log(getValue('name.midName'));
console.log(getValue('name'));

/**
 * 
 * Points to remember - 
 *  > typeof returns a string
 *  > recursive calls create a new execution context
 *    each call return new flatObject
 *    but at last the initial flatObject is returned
 *    so storing results of recursion call is important
 *  > inside template strings, anything like 'user.', '_' can be added as prefix or suffix 
 *   
 */