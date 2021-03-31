import * as React from "react";
import "antd/dist/antd.css";
import ProductCard from "../components/ProductCard";
import StepDescription from "../components/StepDescription";
import * as styles from "./index.module.scss";
import { data, stepData } from "./data"; // temporary purpose

const IndexPage = () => {
  return (
    <main className={styles.app}>
      <title>Home Page</title>
      <div className={styles.cardContainer}>
        {data.map((productData) => (
          <ProductCard product={productData} key={productData.productName} />
        ))}
      </div>
      <div className={styles.stepContainer}>
        <StepDescription data={stepData} />
      </div>
    </main>
  );
};

export default IndexPage;
