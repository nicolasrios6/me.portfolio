import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Icon = ({css, icon}) => {
    return (
        <FontAwesomeIcon className={css} icon={icon} />
    );
}

export default Icon;