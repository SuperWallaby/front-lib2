import React, { useState } from "react";
import Button from "../button/Button";

export interface IProps {
  enableItems: string[];
  allItem: string[];
  onChange: (enableItems: string[]) => any;
}

export const Configer: React.FC<IProps> = ({
  allItem,
  enableItems,
  onChange,
}) => {
  const unEnableItems = allItem.filter((item) => !enableItems.includes(item));

  return (
    <div className="configer">
      <div className="configer__body">
        <div className="configer__enables">
          {enableItems.map((value,i) => {
            return (
              <div onClick={()=> {
				enableItems.splice(i,1)
				onChange([...enableItems.splice(i,1)])
			  }} className="configer__li" key={value}>
                {value}
              </div>
            );
          })}
        </div>
        <div>
          <Button
            iconProp={{
              icon: "arrowRight",
            }}
          />
          <Button
            style={{
              transform: "scale(-1)",
            }}
            iconProp={{
              icon: "arrowRight",
            }}
          />
        </div>
        <div className="configer__unables">
          {unEnableItems.map((value,i) => {
            return (
              <div onClick={()=> {
					enableItems.push(value);
				  onChange([...enableItems]);
			  }} className="configer__li" key={value}>
                {value}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Configer;
