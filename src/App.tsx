import { useState, useReducer, useEffect } from 'react'
import Password from './components/Password'
import { generatePassword } from './generator'
import './App.css'
import SliderField from './components/SliderField'
import CheckboxField from './components/CheckboxField'
import StrengthMeter from './components/StrengthMeter'

export type OptionState = {
  characterLength: number,
  includeUppercase: boolean,
  includeLowercase: boolean,
  includeNumbers: boolean,
  includeSymbols: boolean
}

type OptionChangeAction = 
  | { type: 'characterLength', payload: { characterLength: number } }
  | { type: 'includeUppercase', payload: { includeUppercase: boolean } }
  | { type: 'includeLowercase', payload: { includeLowercase: boolean } }
  | { type: 'includeNumbers', payload: { includeNumbers: boolean } }
  | { type: 'includeSymbols', payload: { includeSymbols: boolean } }

type Reducer<OptionState, OptionChangeAction> = (state: OptionState, action: OptionChangeAction) => OptionState

function optionReducer(state: OptionState, action: OptionChangeAction) {
  switch (action.type) {
    case 'characterLength':
      return { ...state, characterLength: action.payload.characterLength }
    case 'includeUppercase':
      return { ...state, includeUppercase: action.payload.includeUppercase }
    case 'includeLowercase':
      return { ...state, includeLowercase: action.payload.includeLowercase }
    case 'includeNumbers':
      return { ...state, includeNumbers: action.payload.includeNumbers }
    case 'includeSymbols':
      return { ...state, includeSymbols: action.payload.includeSymbols }
    default:
      return state
  }
}

export interface AppProps {
  externalStyles?: string
}

function App(props: AppProps) {
  const [options, dispatchOptionChange] = useReducer(optionReducer, {
    characterLength: 32,
    includeUppercase: true,
    includeLowercase: false,
    includeNumbers: false,
    includeSymbols: false
  })

  const [password, setPassword] = useState(generatePassword({
    characterLength: options.characterLength,
    included: {
      includeUppercase: options.includeUppercase,
      includeLowercase: options.includeLowercase,
      includeNumbers: options.includeNumbers,
      includeSymbols: options.includeSymbols
    }
  }))

  return (
    <div className={'app'}>
      <style>{props.externalStyles}</style>
      <div className={'container'}>
        <p className={'title'}>Password Generator</p>
        <div className={'panel'}>
          <Password value={password} />
        </div>
        <div className={'panel'}>
          <SliderField name={'Character length'} value={options.characterLength} onChange={value => dispatchOptionChange({
            type: 'characterLength',
            payload: { characterLength: value }
          })} />
          <CheckboxField name={'Include uppercase'} value={options.includeUppercase} onChange={value => dispatchOptionChange({
            type: 'includeUppercase',
            payload: { includeUppercase: value }
          })}/>
          <CheckboxField name={'Include lowercase'} value={options.includeLowercase} onChange={value => dispatchOptionChange({
            type: 'includeLowercase',
            payload: { includeLowercase: value }
          })}/>
          <CheckboxField name={'Include numbers'} value={options.includeNumbers} onChange={value => dispatchOptionChange({
            type: 'includeNumbers',
            payload: { includeNumbers: value }
          })}/>
          <CheckboxField name={'Include symbols'} value={options.includeSymbols} onChange={value => dispatchOptionChange({
            type: 'includeSymbols',
            payload: { includeSymbols: value }
          })}/>
          <StrengthMeter value={
            [options.includeUppercase, options.includeLowercase, options.includeNumbers, options.includeSymbols].filter(o => o).length
          } />
          <button className={'generate'} onClick={() => setPassword(generatePassword({
            characterLength: options.characterLength,
            included: {
              includeUppercase: options.includeUppercase,
              includeLowercase: options.includeLowercase,
              includeNumbers: options.includeNumbers,
              includeSymbols: options.includeSymbols
            }
          }))}>Generate</button>
        </div>
      </div>
    </div>
  )
}

export default App