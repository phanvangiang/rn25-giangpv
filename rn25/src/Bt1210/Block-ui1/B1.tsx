import React, { Component } from "react";

type Props = {
    text: string;
    color1: string;
    color2: string;
    percentage: number;
};

type State = {};

class B1 extends Component<Props, State> {
  state = {};

  const BlockUi01 = (props: Props) => {
    return <>
    B1
      <div className="divContainer">
      <div className={styles.divContainer}>
        <div
          className="divLeft"
          style={{ backgroundColor: props.propterty.color1 }}
          className={styles.divLeft}
          style={{ backgroundColor: props.color1 }}
        >
          <p className="textLeft">{props.propterty.text}</p>
          <p className={styles.textLeft}>{props.text}</p>
        </div>
        <div className="divRight">
        <div className={styles.divRight}>
          <div
            className="divShow"
            className={styles.divShow}
            style={{
              backgroundColor: props.propterty.color2,
              width: '${props.propterty.percentage}%',
              backgroundColor: props.color2,
              width: '${props.percentage}%',
            }}
          >
            <p className="textPercentage">{props.propterty.percentage}%</p>
            <p className={styles.textPercentage}>{props.percentage}%</p>
          </div>
        </div>
      </div>
      </>
  };
};

export default B1;
