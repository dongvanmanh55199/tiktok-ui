import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import Image from '~/components/Image';
const cx = classNames.bind(styles);
function AccountItem({ data }) {
    return (
        <Link to={`/@${data.nickname}`} className={cx('wrapper')}>
            <Image
                className={cx('avatar')}
                // src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/7311f55e7cbfa803afb1e964dbf185c4.webp?x-expires=1678719600&x-signature=OmflogK2c4%2B4ImS73mD6Bv6Cvlg%3D"
                src={data.avatar}
                alt={data.full_name}
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>{data.full_name}</span>
                    {data.tick && <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />}
                </h4>
                <span className={cx('username')}>{data.nickname}</span>
            </div>
        </Link>
    );
}

export default AccountItem;
