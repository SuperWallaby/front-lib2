import React from "react";

interface IProps {
  date: Date;
  displayYear: boolean;
}

const JDdateCaption: React.SFC<IProps> = ({ date, displayYear }) => {
  const month = date.getMonth();
  const year = date.getFullYear();
  return (
    <div className="DayPicker-Caption">
      {displayYear && <span className="DayPicker-Caption__year">{year}</span>}
      <span className="DayPicker-Caption__month">{month}</span>
    </div>
  );
};

JDdateCaption.defaultProps = {
  date: new Date()
};

export default JDdateCaption;
