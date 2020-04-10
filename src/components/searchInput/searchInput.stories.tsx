import React, { useState } from "react";
import { withKnobs } from "@storybook/addon-knobs";
import "../../scss/all.scss";
import { action } from "@storybook/addon-actions";
import JDcontainer from "../container/Container";
import SearchInput from "./SearchInput";
import { ISearchViewData } from "./DataModal";
import JDIcon from "../icons/Icons";

export default {
  title: "SearchInput",
  component: () => <div>?</div>,
  decorators: [withKnobs],
};

const dummyData: ISearchViewData[] = [
  {
    id: "banana",
    title: "banana",
    describe:
      'A banana is an edible fruit – botanically a berry – produced by several kinds of large herbaceous flowering plants in the genus Musa. In some countries, bananas used for cooking may be called "plantains", distinguishing them from dessert bananas.',
    tag: "fruit",
  },
  {
    id: "Apple",
    title: "Apple",
    describe:
      "Apple Inc. is an American multinational technology company headquartered in Cupertino, California,.",
    tag: "company",
  },
  {
    id: "wallaby",
    title: "wallaby",
    describe:
      "A wallaby is a small or mid-sized macropod native to Australia and New Guinea, with introduced populations in New Zealand, the UK and other countries.",
    tag: "animal",
  },
  {
    id: "wallaby",
    title: "wallaby",
    describe:
      "A wallaby is a small or mid-sized macropod native to Australia and New Guinea, with introduced populations in New Zealand, the UK and other countries.",
    tag: "animal",
  },
  {
    id: "wallaby",
    title: "wallaby",
    describe:
      "A wallaby is a small or mid-sized macropod native to Australia and New Guinea, with introduced populations in New Zealand, the UK and other countries.",
    tag: "animal",
  },
  {
    id: "wallaby",
    title: "wallaby",
    describe:
      "A wallaby is a small or mid-sized macropod native to Australia and New Guinea, with introduced populations in New Zealand, the UK and other countries.",
    tag: "animal",
  },
  {
    id: "wallaby",
    title: "wallaby",
    describe:
      "A wallaby is a small or mid-sized macropod native to Australia and New Guinea, with introduced populations in New Zealand, the UK and other countries.",
    tag: "animal",
  },
  {
    id: "wallaby",
    title: "wallaby",
    describe:
      "A wallaby is a small or mid-sized macropod native to Australia and New Guinea, with introduced populations in New Zealand, the UK and other countries.",
    tag: "animal",
  },
  {
    id: "wallaby",
    title: "wallaby",
    describe:
      "A wallaby is a small or mid-sized macropod native to Australia and New Guinea, with introduced populations in New Zealand, the UK and other countries.",
    tag: "animal",
  },
];

export const standard = () => {
  const [value, setValue] = useState("");

  return (
    <JDcontainer verticalPadding>
      <SearchInput
        onSelectData={action("onSelectData")}
        onSearchChange={(v) => {
          setValue(v);
        }}
        head={"DummyData"}
        dataList={dummyData}
        searchValue={value}
      />
      <SearchInput
        onSelectData={action("onSelectData")}
        onSearchChange={(v) => {
          setValue(v);
        }}
        foot={<JDIcon icon="help" />}
        head={"DummyData"}
        searchValue={value}
      />
    </JDcontainer>
  );
};

standard.story = {
  name: "standard",
};
