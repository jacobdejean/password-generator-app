import { OptionState } from './App'

const includableCharacters = {
    includeUppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    includeLowercase: 'abcdefghijklmnopqrstuvwxyz',
    includeNumbers: '0123456789',
    includeSymbols: '!@#$%^&*()_+-={}[]|:;<>,.?/~'
}

type GeneratorOptions = { 
    characterLength: number, 
    included: Omit<OptionState, 'characterLength'> 
}

export function generatePassword(options: GeneratorOptions) {
    let validCharacters = []
    
    for(const option in options.included) {
        if(options.included[option as keyof typeof options.included]) {
            validCharacters.push(includableCharacters[option as keyof typeof includableCharacters])
        }
    }

    const characters = validCharacters.join('')

    let password = ''

    for(let i = 0; i < options.characterLength; i++) {
        password += characters.charAt(Math.floor(Math.random() * characters.length))
    }

    return password
  }