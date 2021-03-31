/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from "react";
import "antd/dist/antd.css";
import { Carousel } from "antd";
import * as styles from "./productCard.module.scss";

const ProductCard = (props) => {
  const { product } = props;
  const [quantity, setQuantity] = React.useState("");

  const handleQuantityChange = (e) => {
    setQuantity(e.currentTarget.value);
  };

  const getPrice = (quantity) => {
    if (product.prices && product.prices.length) {
      const filteredPrices = product.prices.filter(
        (price) => price.unit <= quantity,
      );
      if (filteredPrices.length) {
        const totalPrice =
          filteredPrices[filteredPrices.length - 1].amount * quantity;
        return Math.round(totalPrice * 100) / 100;
      }
    } else {
      // eslint-disable-next-line prettier/prettier
      return 0.00;
    }
  };

  return (
    <div className={styles.cardWrapper}>
      <div className={styles.cardTitle}>
        <h2>
          <a href={product.productURL}>{product.productName}</a>
        </h2>
      </div>
      <div className={styles.carousel}>
        {product.images && product.images.length ? (
          <Carousel>
            {product.images.map((img, idx) => (
              <img
                src={img}
                alt={`${product.productName}_img_${idx}`}
                key={`${product.productName}_img_${idx}`}
              />
            ))}
          </Carousel>
        ) : (
          <></>
        )}
      </div>
      <div>
        <span className={styles.purchasePrices}>
          Ankaufpreise*, {product.priceUnit}
        </span>
        <div className={styles.allPrices}>
          {product.prices && product.prices.length ? (
            <>
              {product.prices.map((price) => (
                <div
                  className={styles.scPrice}
                  key={`${price.unit}_${price.amount}`}
                >
                  <span className={styles.value}>{price.amount}</span>
                  <span>ab {price.unit} kg</span>
                </div>
              ))}
            </>
          ) : (
            <></>
          )}
        </div>
        <div className={styles.bigAmount}>
          <span>Großmengen:</span>
          <div className={styles.inquireBtn}>
            <a href="https://pro.schrott24.de/">Anfragen</a>
          </div>
        </div>
        <div className={styles.priceCalculationGroup}>
          <span>Bis zu*:</span>
          <span className={styles.cardCalculation}>
            €{getPrice(quantity) || "0.00"}
          </span>
        </div>
        <div className={styles.groupInputButtons}>
          <input
            className={styles.inputProductCard}
            placeholder="Gewicht schätzen "
            type="number"
            onChange={handleQuantityChange}
            value={quantity}
          />
          {!getPrice(quantity) ? (
            <div className={styles.greyProductButton}>
              <a role="button" onClick={(event) => event.preventDefault()}>
                In den Verkaufskorb
              </a>
            </div>
          ) : (
            <div className={styles.enabledProductButton}>
              <a href={`/co/cart/?productId=18059&amp;quantity=${quantity}`}>
                In den Verkaufskorb
              </a>
            </div>
          )}
          <div className={styles.transparentProductButton}>
            <a href="https://www.schrott24.de/altmetall-ankauf/elektronik/elektronikschrott-gemischt/">
              Mehr info
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
