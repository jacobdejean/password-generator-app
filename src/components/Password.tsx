import icon_copy from '../assets/images/icon-copy.svg';
import { useEffect, useRef, useState } from 'react';
import StatusTip from './StatusTip';

export interface PasswordProps {
    value: string
}

export default function Password(props: PasswordProps) {
    const [copied, setCopied] = useState(false);

    function copyToClipboard() {
        setCopied(true);

        if (navigator && navigator.clipboard && navigator.clipboard.writeText)
          return navigator.clipboard.writeText(props.value);

        return Promise.reject('The Clipboard API is not available.');
    }

    useEffect(() => {
        if (copied) {
            const timeout = setTimeout(() => {
                setCopied(false);
            }, 2000);
        }
    }, [copied]);

    return (
        <div className={'password_field'}>
            <input className={'password_value'} value={props.value} onChange={() => true}/>
            <div className={'password_copy_section'}>
                { copied ? 
                    <StatusTip message={'Copied!'} /> :
                    <img src={icon_copy} onClick={copyToClipboard} className={'password_copy'}/>
                }
            </div>
        </div>
    )   
}