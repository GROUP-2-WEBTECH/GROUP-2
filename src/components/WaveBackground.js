const WaveBackground = () => {
    return (
      <div className="svg">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          style={{ width: '100%', height: '500%' }}
        >
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop
                offset="0%"
                style={{ stopColor: 'rgba(130, 158, 249, 0.06)', stopOpacity: 1 }}
              />
              <stop
                offset="50%"
                style={{ stopColor: 'rgba(76, 190, 255, 0.6)', stopOpacity: 1 }}
              />
              <stop
                offset="100%"
                style={{ stopColor: 'rgba(115, 209, 72, 0.2)', stopOpacity: 1 }}
              />
            </linearGradient>
          </defs>
          <path
            fill="url(#waveGradient)"
            fillOpacity="1"
            d="M0,160L48,170.7C96,181,192,203,288,197.3C384,192,480,160,576,138.7C672,117,768,107,864,122.7C960,139,1056,181,1152,197.3C1248,213,1344,203,1392,197.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    );
  };
  
  export default WaveBackground;