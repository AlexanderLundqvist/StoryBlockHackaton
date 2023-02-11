import { storyblokEditable } from "@storyblok/react";

const Button = ({ blok }) => {
    console.log(blok)
  return (
    <button style={{ backgroundColor: blok.color }} {...storyblokEditable(blok)}>{blok.title}</button>
  );
};

export default Button;
