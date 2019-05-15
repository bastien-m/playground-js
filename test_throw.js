try {
    throw new Error('first')
} catch (e) {
    try {
        throw new Error('second')
    } catch (err) {
        console.log('aborted')
    }
}
finally {
    console.log('finally')
}