interface SideBySideVideosPropTypes {
  videos: string[];
}

export const SideBySideVideos = ({ videos }: SideBySideVideosPropTypes) => (
  <div className="videos-side-by-side">
    {videos.map((video) => (
      <div style={{ margin: 'auto', textAlign: 'center' }} key={video}>
        <video preload="none" className="lazy" controls muted>
          <source src={video} />
        </video>
      </div>
    ))}
  </div>
);
