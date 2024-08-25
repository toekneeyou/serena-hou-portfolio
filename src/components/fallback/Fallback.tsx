import { FallbackProps } from "react-error-boundary";

function Fallback({ error, resetErrorBoundary }: FallbackProps) {
  return (
    <div role="alert" className="w-screen h-screen centered-col">
      <div className="centered-col p-4 rounded-xl">
        <p>Something went wrong!</p>
        <pre style={{ color: "red" }}>{error.message}</pre>
        <button onClick={resetErrorBoundary}>Reset</button>
      </div>
    </div>
  );
}

export default Fallback;
