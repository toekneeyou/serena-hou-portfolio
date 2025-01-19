import { FallbackProps } from "react-error-boundary";

function Fallback({ error, resetErrorBoundary }: FallbackProps) {
  return (
    <main className="main-content-layout h-screen centered-col">
      <h1 className="text-8xl font-mango text-120px font-black mb-9">Oops!</h1>
      <pre className="text-24px  text-red-600">{error.message}</pre>
      <button className="btn mt-60px" onClick={resetErrorBoundary}>
        Reset
      </button>
    </main>
  );
}

export default Fallback;
