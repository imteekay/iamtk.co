interface SideBySideImagesPropTypes {
  images: string[];
}

export const SideBySideImages = ({ images }: SideBySideImagesPropTypes) => (
  <div className="side-by-side">
    {images.map((image) => (
      <figure key={image}>
        <img src={image} loading="lazy" />
      </figure>
    ))}
  </div>
);
