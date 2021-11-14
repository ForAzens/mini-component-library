import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import Icon from "../Icon";
import { getDisplayedValue } from "./Select.helpers";

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper style={{ "--width": displayedValue.length + "ch" }}>
      <NativeSelect value={value} onChange={onChange}>
        {children}
      </NativeSelect>
      <PresentationalBit>
        <p>{displayedValue}</p>
        <Icon id="chevron-down" size={24} strokeWidth={2} />
      </PresentationalBit>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  width: max-content;

  background-color: ${COLORS.transparentGray15};

  border-radius: 8px;
`;

const NativeSelect = styled.select`
  appearance: none;

  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
`;

const PresentationalBit = styled.div`
  font-family: "Roboto", sans-serif;
  font-size: 1rem;
  color: ${COLORS.gray700};

  display: flex;
  place-items: center;

  padding: 12px 16px;

  & > p {
    padding-right: 24px;
  }

  ${NativeSelect}:focus + & {
    outline: 1px dotted #313131;
    outline: 5px auto -webkit-focus-ring-color;
  }

  ${NativeSelect}:hover + & {
    color: black;
  }
`;

export default Select;
