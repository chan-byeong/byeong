interface FigureImageProps {
  src: string;
  alt: string;
  caption?: string;
  width?: string;
}

export const FigureImage = ({ src, alt, caption, width }: FigureImageProps) => {
  return (
    <figure>
      <img src={src} alt={alt} style={{ width }} />
      <figcaption style={{ fontSize: "0.9rem" }}>{caption}</figcaption>
    </figure>
  );
};
