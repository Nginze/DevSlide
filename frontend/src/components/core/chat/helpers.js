
export const isOwnMessage = (senderId, userId) => {
    if(senderId === userId){
        return true
    }
    return false
}

