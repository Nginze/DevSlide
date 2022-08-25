export const calculateProficiency = (skill_level) => {
    if (skill_level.toLowerCase() ==="beginner") return 30
    else if (skill_level.toLowerCase()==="intermediate") return 60
    else if (skill_level.toLowerCase()==="advance") return 90
    return -1;
}


export const claculateAverage = (proficiency_percent) => {
    
    let total = 0;
    for(let i = 0; i < proficiency_percent.length; i++) {
        total = total + (proficiency_percent[i])
    }
    return total / (proficiency_percent.length)
}