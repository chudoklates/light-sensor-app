import { db } from '../config'

/**
 * Write a document to the Firebase DB. key can be something like /users/kamil or /test/123
 * @param {string} key
 * @param {object} value
 * @returns 0 (success), 1 (error)
 */
const writeDocument = async (key, value) => {
    try {
        await db.ref(key).set(value)
        return 0
    } catch (err) {
        console.error(err.message)
        return 1
    }
}

export default writeDocument
