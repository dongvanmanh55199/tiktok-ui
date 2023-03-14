import { forwardRef, useState } from 'react';
import img from '~/assets/images';

import classNames from 'classnames';
import style from './Img.module.scss';
function Image({ alt, src, className, fallback: customFallback = img.noImage }, ref) {
    const [fallback, setFallback] = useState('');
    const handleError = () => {
        setFallback(customFallback);
    };

    return (
        <img
            ref={ref}
            src={fallback || src}
            onError={handleError}
            className={classNames(style.wrapper, className)}
            alt={alt}
        />
    );
}

export default forwardRef(Image);
