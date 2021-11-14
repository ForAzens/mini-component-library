import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const STYLES = {
  small: {
    iconSize: 16,
    iconStrokeWidth: 1.8,
    fontSize: 14,
    inputLeftPadding: 24,
  },
  large: {
    iconSize: 24,
    iconStrokeWidth: 2,
    fontSize: 18,
    inputLeftPadding: 36,
  },
};

const IconInput = ({ label, icon, width = 250, size, ...delegate }) => {
  const styles = STYLES[size];

  return (
    <Wrapper
      style={{
        "--stroke-width": styles.iconStrokeWidth + "px",
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      <IconWrapper style={{ "--size": styles.iconSize + "px" }}>
        <Icon
          id={icon}
          size={styles.iconSize}
          strokeWidth={styles.iconStrokeWidth}
        />
      </IconWrapper>
      <InputWrapper
        {...delegate}
        style={{
          "--width": width,
          "--font-size": styles.fontSize / 16 + "rem",
          "--left-padding": styles.inputLeftPadding + "px",
        }}
      ></InputWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.label`
  display: block;
  position: relative;

  color: ${COLORS.gray700};

  &:hover {
    color: ${COLORS.black};
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  height: var(--size);
  margin: auto 0;
`;

const InputWrapper = styled.input`
  width: var(--width);

  border: none;
  border-bottom: var(--stroke-width) solid ${COLORS.black};
  padding-left: var(--left-padding);

  font-family: "Roboto", sans-serif;
  font-size: var(--font-size);
  color: inherit;
  font-weight: 700;

  outline-offset: 2px;

  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: 400;
  }
`;

export default IconInput;
