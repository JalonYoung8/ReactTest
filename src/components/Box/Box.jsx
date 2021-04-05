import classes from './Box.module.scss';

function Box({ name, category, value, img }) {
  return (
    <figure className={classes['Box']}>
      <div className={classes['Box-img-container']}>
        <img
          className={classes['Box-img']}
          src={img}
          alt={`${name} ${category}`}
        />
      </div>

      <figcaption className={classes['Box-details']}>
        <p>Name: {name}</p>
        <p>Category: {category}</p>
        <p>Value: {value}</p>
      </figcaption>
    </figure>
  );
}

export default Box;
