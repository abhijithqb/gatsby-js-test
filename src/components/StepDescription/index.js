import * as React from "react";
import { Steps } from "antd";
import * as styles from "./stepDescription.module.scss";

const { Step } = Steps;

const StepDescription = (props) => {
  const { data } = props;
  return (
    <>
      <span className={styles.howDoesItWorks}>So funktioniert's</span>
      <h2>
        Altmetall zum aktuellen Schrottpreis verkaufen — in nur 3 Schritten
      </h2>
      {data && data.length ? (
        <Steps>
          {data.map((step) => (
            <Step
              icon={<img src={step.stepIcon} alt={step.stepIcon} />}
              description={
                <div className={styles.description}>
                  <h2>{step.descriptionTitle}</h2>
                  {step.description}
                </div>
              }
            />
          ))}
        </Steps>
      ) : (
        <></>
      )}
      <div className={styles.orangeButton}>
        <a href="/altmetall-ankauf">SCHROTTPREIS BERECHNEN</a>
      </div>
    </>
  );
};

export default StepDescription;
