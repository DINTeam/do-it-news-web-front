const LoadingSpinner = () => {
  return (
    <div>
      <div>
        <svg>
          <circle cx="50" cy="12" r="10" />
          <circle cx="88" cy="50" r="10" />
          <circle cx="50" cy="88" r="10" />
          <circle cx="12" cy="50" r="10" />
        </svg>
      </div>
    </div>
  );
};

export default LoadingSpinner;
