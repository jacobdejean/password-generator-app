export interface StrengthMeterProps {
    value: number
}

const strengthMap = [
    { message: 'TOO WEAK!', color: '#F64A4A' },
    { message: 'WEAK', color: '#FB7C58' },
    { message: 'MEDIUM', color: '#F8CD65' },
    { message: 'STRONG', color: '#A4FFAF' }
]

export default function StrengthMeter(props: StrengthMeterProps) {
    const status = strengthMap.filter((item, index) => index <= props.value)[Math.max(props.value - 1, 0)];
    const message = status ? status.message : '';
    const filledStyle = status ? {
        backgroundColor: status.color,
        outlineColor: status.color
    } : {};

    return (
        <div className={'strength_meter'}>
            <p className={'strength_meter_label'}>STRENGTH</p>
            <div className={'strength_meter_group'}>
                <p className={'strength_meter_message'}>{message}</p>
                <div className={`strength_meter_bar`} style={ props.value >= 1 ? filledStyle : {} }></div>
                <div className={`strength_meter_bar`} style={ props.value >= 2 ? filledStyle : {} }></div>
                <div className={`strength_meter_bar`} style={ props.value >= 3 ? filledStyle : {} }></div>
                <div className={`strength_meter_bar`} style={ props.value >= 4 ? filledStyle : {} }></div>
            </div>
        </div>
    )
}