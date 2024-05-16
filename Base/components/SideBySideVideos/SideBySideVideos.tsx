interface SideBySideVideosPropTypes {
  videos: string[];
}

export const SideBySideVideos = ({ videos }: SideBySideVideosPropTypes) => (
  <div className="videos-side-by-side">
    {videos.map((video) => (
      <div style={{ margin: 'auto', textAlign: 'center' }} key={video}>
        <video controls>
          <source src={video} />
        </video>
      </div>
    ))}
  </div>
);
