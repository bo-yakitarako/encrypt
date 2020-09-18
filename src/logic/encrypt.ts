const MOVEMENT = 11308;

export const encrypt = (text: string) => {
    return Array.from(text).map((char) =>
        String.fromCharCode(char.charCodeAt(0) + MOVEMENT)
    ).join('');
};

export const decrypt = (text: string) => {
    return Array.from(text).map((char) =>
        String.fromCharCode(char.charCodeAt(0) - MOVEMENT)
    ).join('');
};
