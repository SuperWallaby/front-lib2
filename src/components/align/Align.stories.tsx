import React from "react";
import {withKnobs} from "@storybook/addon-knobs";
import Align from "./Align";
import JDlabel from "../label/JDLabel";
import JDcontainer from "../container/Container";
import {WindowSize} from "../../types/enum";
import {Block} from "./Block";
import AlignMdx from "./Align.mdx";

export default {
  title: "Align",
  component: () => <Align />,
  decorators: [withKnobs],
  parameters: {
    componentSubtitle: '"안녕하세요"라고 보여주는 컴포넌트',
    docs: {
      page: AlignMdx,
    },
  },
};

export const standard = () => {
  return (
    <JDcontainer size={WindowSize.sm}>
      <JDlabel txt="플렉스" />
      <Align
        mb={6}
        style={{
          minHeight: "100px",
        }}
        flex
      >
        <Block />
        <Block />
        <Block />
        <Block />
      </Align>
      <JDlabel txt="사이 공간" />
      <Align
        mb={6}
        flex={{
          between: true,
        }}
      >
        <Block />
        <Block />
        <Block />
        <Block />
      </Align>
      <JDlabel txt="세로 정렬" />
      <Align
        mb={6}
        flex={{
          vCenter: true,
        }}
      >
        <Block
          style={{
            height: "50px",
          }}
        />
        <Block
          style={{
            height: "70px",
          }}
        />
        <Block />
        <Block
          style={{
            height: "30px",
          }}
        />
      </Align>
      <JDlabel txt="그리드 와 콜" />
      <Align mb={6} grid>
        <Align col>
          <Block />
        </Align>
        <Align col>
          <Block />
        </Align>
        <Align col>
          <Block />
        </Align>
      </Align>
      <JDlabel txt="텍스트 정렬" />
      <Align mb={6}>
        <Align text="center">123</Align>
        <Align text="left">123</Align>
        <Align text="right">123</Align>
      </Align>
      <JDlabel txt="그리드 와 반응형 넘버링" />
      <Align mb={6} grid>
        <Align
          col={{
            sm: 1,
            lg: 3,
            full: 6,
          }}
        >
          <Block full>
            {`
		 	sm: 1
		  	lg: 3
		    full: 6 
		  `}
          </Block>
        </Align>
        <Align
          col={{
            sm: 1,
            lg: 3,
            full: 6,
          }}
        >
          <Block full>{`
		 	sm: 1
		  	lg: 3
		    full: 6 
		  `}</Block>
        </Align>
        <Align
          col={{
            sm: 1,
            lg: 3,
            full: 6,
          }}
        >
          <Block full>
            {`
		 	sm: 1
		  	lg: 3
		    full: 6 
		  `}
          </Block>
        </Align>
        <Align
          col={{
            sm: 1,
            lg: 3,
            full: 6,
          }}
        >
          <Block full>
            {`
		 	sm: 1
		  	lg: 3
		    full: 6 
		  `}
          </Block>
        </Align>
      </Align>
    </JDcontainer>
  );
};

standard.story = {
  name: "standard",
};
