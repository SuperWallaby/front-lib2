import React from "react";
import JDbox from "../../box/JDbox";

// handler는 마우스 오버 이벤트 입니다.
// form 은 시작날자
// to 는 끝날자

interface IProps {
  from?: Date | null;
  to?: Date | null;
  [foo: string]: any;
}

const JDdatePcikerInformation: React.SFC<IProps> = ({ from, to }) => {
  interface wrapProp {
    condition: any;
    children: any;
  }
  const Wrapper = ({ condition, children }: wrapProp) => {
    if (!condition) return null;

    return <JDbox>{children}</JDbox>;
  };

  return (
    <div className="JDflex JDdatePcikerInformation">
      <Wrapper condition={!from && !to} children={"choseCheckInDate"} />
      <Wrapper
        condition={from}
        children={from?.toLocaleDateString() + " " + "checkIn"}
      />
      <Wrapper condition={from && !to} children={"choseCheckOutDate"} />
      <Wrapper
        condition={from && to}
        children={to?.toLocaleDateString() + " " + "checkOut"}
      />
    </div>
  );
};

JDdatePcikerInformation.defaultProps = {
  from: new Date(),
  to: new Date()
};

export default JDdatePcikerInformation;
