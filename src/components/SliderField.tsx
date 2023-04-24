import icon_copy from '../assets/images/icon-copy.svg';

export interface SliderFieldProps {
    name: string,
    value: number,
    onChange: (value: number) => void
}

export default function SliderField(props: SliderFieldProps) {
    return (
        <div className={'slider_field'}>
            <div className={'slider_top'}>
                <p className={'slider_label'}>{props.name}</p>
                <p className={'slider_value'}>{props.value}</p>
            </div>
            <input type="range" min="1" max="128" value={props.value} className={'slider_input'} onInput={evt => props.onChange(Number((evt.target as HTMLInputElement).value))}/>
        </div>
    )   
}