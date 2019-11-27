const alphabet = 'abcdefghijklmnopqrstuvwxyz';
const accents = 'éèê';
const separators = '_ .,|-:/\\\'';
const ponctuation = '!?';

const newIndex = 7;

function init() {
    return alphabet.split('').concat(
        alphabet.toLocaleUpperCase().split(''),
        accents.split(''),
        separators.split(''),
        ponctuation.split(''),
    );
}

export async function crypter(text) {
    return new Promise((resolve, rejects) => {
        const chars = text.split('');
        const cryptValues = chars.map(char => {
            let finalIndex = 0;
            const alpha = init();
            const i = alpha.indexOf(char);
            if (i === -1) return rejects('Doesn\'t reconize this char: ' + char);
            finalIndex = i + newIndex;
            if (finalIndex > alpha.length - 1) finalIndex = 0;
            if (finalIndex < 0) finalIndex = alpha.length - 1;
            return alpha[finalIndex];
        })
        resolve(cryptValues.join(''));
    })
}

export async function decrypter(text) {
    return new Promise((resolve, rejects) => {
        const chars = text.split('');
        const cryptValues = chars.map(char => {
            let finalIndex = 0;
            const alpha = init();
            const i = alpha.indexOf(char);
            if (i === -1) return rejects('Doesn\'t reconize this char: ' + char);
            finalIndex = i - newIndex;
            if (finalIndex > alpha.length - 1) finalIndex = 0;
            if (finalIndex < 0) finalIndex = alpha.length - 1;
            return alpha[finalIndex];
        })
        resolve(cryptValues.join(''));
    })
}