import React, { useState, useEffect, useRef } from "react";
import Dots from "./Dots";
import ServiceIntro1 from "./ServiceIntro1";
import ServiceIntro2 from "./ServiceIntro2";
import ServiceIntro3 from "./ServiceIntro3";
import styled from "styled-components";

function ServiceIntroduction() {
  const outerDivRef: any = useRef();
  const [scrollIndex, setScrollIndex] = useState(1);
  const dividerHeight = 5;

  useEffect(() => {
    const wheelHandler = (e: React.WheelEvent) => {
      e.preventDefault();
      const { deltaY } = e;
      const { scrollTop } = outerDivRef.current;
      const pageHeight = window.innerHeight;

      if (deltaY > 0) {
        if (scrollTop >= 0 && scrollTop < pageHeight) {
          outerDivRef.current.scrollTo({
            top: pageHeight + dividerHeight,
            left: 0,
            behavior: "smooth",
          });
          setScrollIndex(2);
        } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 2) {
          outerDivRef.current.scrollTo({
            top: pageHeight * 2 + dividerHeight * 2,
            left: 0,
            behavior: "smooth",
          });
          setScrollIndex(3);
        } else {
          outerDivRef.current.scrollTo({
            top: pageHeight * 2 + dividerHeight * 2,
            left: 0,
            behavior: "smooth",
          });
          setScrollIndex(3);
        }
      } else {
        if (scrollTop >= 0 && scrollTop < pageHeight) {
          outerDivRef.current.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
          });
          setScrollIndex(1);
        } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 2) {
          outerDivRef.current.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
          });
          setScrollIndex(1);
        } else {
          outerDivRef.current.scrollTo({
            top: pageHeight + dividerHeight,
            left: 0,
            behavior: "smooth",
          });
          setScrollIndex(2);
        }
      }
    };
    const outerDivRefCurrent = outerDivRef.current;
    outerDivRefCurrent.addEventListener("wheel", wheelHandler);
    return () => {
      outerDivRefCurrent.removeEventListener("wheel", wheelHandler);
    };
  }, []);

  return (
    <WholePage>
      <Outer ref={outerDivRef}>
        <Dots scrollIndex={scrollIndex} />
        <Section1>
          <ServiceIntro1 />
        </Section1>
        <Divider />
        <Section2>
          <ServiceIntro2 />
        </Section2>
        <Divider />
        <Section3>
          <ServiceIntro3 />
        </Section3>
      </Outer>
    </WholePage>
  );
}

export default ServiceIntroduction;

const WholePage = styled.div`
  margin: 0;
  overflow-y: hidden;
`;

const Outer = styled.div`
  height: 100vh;
  overflow-y: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const Section1 = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
`;

const Section2 = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
`;

const Section3 = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
`;

const Divider = styled.div`
  width: 100vw;
  height: 5px;
  background-color: transparent;
`;
