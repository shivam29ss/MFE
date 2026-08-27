import React from "react";
import {
  ErrorBoundary,
  type FallbackProps,
} from "react-error-boundary";

type Props = {
  children: React.ReactNode;
};

function RemoteErrorFallback({
  error,
  resetErrorBoundary,
}: FallbackProps) {
  return (
    <div className="remote-error">
      <h2>Products is temporarily unavailable</h2>

      <p>
        We couldn't load the Products section.
      </p>

      <button onClick={resetErrorBoundary}>
        Try again
      </button>

      {process.env.NODE_ENV === "development" && (
        <details>
          <summary>Technical details</summary>

          <pre>
            {error instanceof Error
              ? error.message
              : String(error)}
          </pre>
        </details>
      )}
    </div>
  );
}

function RemoteErrorBoundary({ children }: Props) {
  return (
    <ErrorBoundary
      fallbackRender={(fallbackProps) => (
        <RemoteErrorFallback {...fallbackProps} />
      )}
      onError={(error, info) => {
        console.error("Remote MFE failed:", error);
        console.error(
          "Component stack:",
          info.componentStack
        );
      }}
    >
      {children}
    </ErrorBoundary>
  );
}

export default RemoteErrorBoundary;