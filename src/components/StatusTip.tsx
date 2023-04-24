export interface StatusTipProps {
    message: string
}

export default function StatusTip(props: StatusTipProps) {
    return (
        <div className={'status_tip'}>
            <p className={'status_message'}>{props.message}</p>
        </div>
    )
}