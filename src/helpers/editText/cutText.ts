

export const cutText = (text:string, word:string, word2?:string):string[] => {
    const first = text.split(word)
    const second = first[1].split(word2)
    return word2 ? second : first
}