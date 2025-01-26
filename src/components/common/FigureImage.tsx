export const FigureImage = ({ src, alt, caption, width }) => {
  return (
    <figure>
      <img src={src} alt={alt} style={{ width }} />
      <figcaption>{caption}</figcaption>
    </figure>
  );
};
