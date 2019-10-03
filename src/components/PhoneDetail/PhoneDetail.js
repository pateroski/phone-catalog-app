import React from 'react';
import classes from './PhoneDetail.module.css';

const phoneDetail = props => {
  const colors =
    Object.keys(props.phone).length > 0 ? props.phone.colors.join(', ') : null;
  return (
    <article className={classes.PhoneDetail}>
      <section className={classes.PhoneDescription}>
        <img
          className={classes.PhoneImage}
          src={props.phone.image}
          alt={props.phone.name}
        />
        <ul className={classes.DescriptionList}>
          <li>
            <span className={classes.DescriptionItem}>Brand: </span>
            <span>{props.phone.brand}</span>
          </li>
          <li>
            <span className={classes.DescriptionItem}>Model: </span>
            <span>{props.phone.name}</span>
          </li>
          <li>
            <span className={classes.DescriptionItem}>Price: </span>
            <span>{props.phone.price}</span>
          </li>
          <li>
            <span className={classes.DescriptionItem}>Year: </span>
            <span>{props.phone.year}</span>
          </li>
          <li>
            <span className={classes.DescriptionItem}>Colors: </span>
            <span>{colors}</span>
          </li>
          <li>
            <span className={classes.DescriptionItem}>Description: </span>
            <span>{props.phone.description}</span>
          </li>
          <li>
            <a
              href={props.phone.web}
              className={classes.VisitWebLink}
              target="_blank"
              rel="noopener noreferrer">
              Visita la web
            </a>
          </li>
        </ul>
      </section>
      <button
        className={classes.ShowExitBtn}
        onClick={props.clicked.bind(this, false)}>
        Salir
      </button>
    </article>
  );
};

export default phoneDetail;
