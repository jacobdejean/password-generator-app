import icon_copy from '../assets/images/icon-copy.svg';

export interface CheckboxFieldProps {
    name: string,
    value: boolean,
    onChange: (value: boolean) => void
}

export default function CheckboxField(props: CheckboxFieldProps) {
    return (
        <div className={'checkbox_field'}>
            <input type={'checkbox'} checked={props.value} className={'checkbox_input'}  onChange={evt => props.onChange((evt.target as HTMLInputElement).checked)}/>
            <p className={'checkbox_label'}>{props.name}</p>
        </div>
    )   
}