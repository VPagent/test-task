


export const devideText = (text:string):string[] => {
    const first = text.split(".").filter(elem => elem !== "\n\n")
    return first
}