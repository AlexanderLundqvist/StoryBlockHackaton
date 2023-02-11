import { storyblokEditable } from "@storyblok/react";

const Teaser = ({ blok }) => {
    console.log(blok)
  return (
    <>  
        <h2 {...storyblokEditable(blok)}>{blok.headline}</h2>
        <span type="number">{blok.price}kr</span>
        <img width='300' src={blok.image.filename} />
        <p>{blok.info}</p>
    </>
  );
};

export default Teaser;
