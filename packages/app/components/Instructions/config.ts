/* eslint-disable @typescript-eslint/ban-types */
const BASE_PATH = "app/assets/images/instructions";

type Number = "0" | "1" | "2" | "3" | "4" | "5";

type Title = `instructions.${Number}.title`;
type Text = `instructions.${Number}.text`;
interface DataObject {
  title: Title;
  text: Text;
  image: NodeRequire;
}

export const DATA: Array<DataObject> = [
  {
    title: "instructions.0.title",
    text: "instructions.0.text",
    image: require(`${BASE_PATH}/1.png`),
  },
  {
    title: "instructions.1.title",
    text: "instructions.1.text",
    image: require(`${BASE_PATH}/2.png`),
  },
  {
    title: "instructions.2.title",
    text: "instructions.2.text",
    image: require(`${BASE_PATH}/3.png`),
  },
  {
    title: "instructions.3.title",
    text: "instructions.3.text",
    image: require(`${BASE_PATH}/4.png`),
  },
  {
    title: "instructions.4.title",
    text: "instructions.4.text",
    image: require(`${BASE_PATH}/5.png`),
  },
  {
    title: "instructions.5.title",
    text: "instructions.5.text",
    image: require(`${BASE_PATH}/6.png`),
  },
];
