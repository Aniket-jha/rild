// components/ProjectCard.js
import React from 'react';
import styles from '../Home/Home.css';
import Image from 'next/image';

export default function ProjectCard({ project }) {
  const { title, subtitle, location, area, price, image } = project;
  
  const hasDetails = area && price;
  
  return (
    <div className={`${styles.card} ${!hasDetails ? styles.smallCard : ''}`}>
      <div className={styles.imageContainer}>
        <Image 
          src={image} 
          alt={title}
          layout="fill"
          objectFit="cover"
          className={styles.image}
        />
        <div className={styles.overlay}>
          <div className={styles.content}>
            <h3 className={styles.cardTitle}>{title}</h3>
            <p className={styles.cardSubtitle}>{subtitle}</p>
            <p className={styles.location}>{location}</p>
            
            {hasDetails && (
              <div className={styles.details}>
                <div className={styles.areaDetail}>
                  <span className={styles.areaValue}>{area}</span>
                  <span className={styles.areaUnit}>sqft</span>
                </div>
                
                <div className={styles.priceDetail}>
                  <span className={styles.priceValue}>Rs: {price}</span>
                  <span className={styles.priceUnit}>Onwards</span>
                </div>
              </div>
            )}
            
            {hasDetails && (
              <button className={styles.exploreButton}>Explore Deals</button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
