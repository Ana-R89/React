const validateForm = user => {
    if (!user.username) return { username: 'First Name must have 3 characteres' }
    if (!user.email) return { email: 'Last Name must have 3 characteres' }
    if (!user.password) return { password: 'Email must have 3 characteres' }
    return true
}

export default validateForm