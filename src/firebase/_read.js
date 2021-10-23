import { db } from '../config'

const readDocument = async (key) => {
    try {
        const value = await db.ref(key).once('value')
        return 0
    } catch (err) {
        console.error(err.message)
        return 1
    }
}

export default readDocument
