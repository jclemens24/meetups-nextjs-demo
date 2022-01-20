import Card from '../ui/Card';
import classes from './MeetupItem.module.css';
import Image from 'next/image';

function MeetupItem(props) {
  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <Image
            width={2000}
            height={1000}
            layout="responsive"
            src={props.image}
            alt={props.title}
            objectFit="cover"
          />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
        </div>
        <div className={classes.actions}>
          <button>Show Details</button>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;
