/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const styles = {
  small: {
    "--height": "8px",
    "--padding": 0,
    "--outer-radius": "4px",
    "--inner-radius": "4px",
  },
  medium: {
    "--height": "12px",
    "--padding": 0,
    "--outer-radius": "4px",
    "--inner-radius": "4px",
  },
  large: {
    "--height": "16px",
    "--padding": "4px",
    "--outer-radius": "8px",
    "--inner-radius": "4px",
  },
};

const ProgressBar = ({ value, size }) => {
  const style = styles[size];

  return (
    <Wrapper
      style={style}
      role="progressbar"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={value}
    >
      <Trimmer>
        <Bar style={{ "--width": value + "%" }} value={value} />
        <VisuallyHidden>{value}%</VisuallyHidden>
      </Trimmer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: ${COLORS.transparentGray15};
  border-radius: var(--outer-radius);
  box-shadow: inset 0px 2px 4px 0px ${COLORS.transparentGray35};
  padding: var(--padding);
`;

const Trimmer = styled.div`
  border-radius: var(--inner-radius);
  overflow: hidden;
`;

const Bar = styled.div`
  width: var(--width);
  background-color: ${COLORS.primary};
  height: var(--height);
`;

export default ProgressBar;
