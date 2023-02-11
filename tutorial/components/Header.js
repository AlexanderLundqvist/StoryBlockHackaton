import { storyblokEditable } from "@storyblok/react";

const Header = ({ blok }) => {
  return <h2 {...storyblokEditable(blok)}>{blok.title}</h2>;
};

export default Header;