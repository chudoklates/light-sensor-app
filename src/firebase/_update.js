import { db } from '../config'

const updateDocument = async (key, value) => {
    try {
        await db.ref(key).update(value)
        return 0
    } catch (err) {
        console.error(err.message)
        return 1
    }
}

export default updateDocument
