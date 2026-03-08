export function normalize(text: string){
    return text
    .toLocaleLowerCase()
    .replace(/[^\w\s]/g, "")
    .trim();
}