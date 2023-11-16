import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classes from '../styles.module.scss';

function Avatar() {
  return (
    <FontAwesomeIcon icon={faCircle} color="whitesmoke" size="2xl" className={`${classes.avatar}`} />
  );
}

export default Avatar;
