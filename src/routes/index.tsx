import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Trattoria Bella Vita" },
      { name: "description", content: "Italienische Küche mit Leidenschaft." },
    ],
  }),
  component: Index,
});

function Index() {
  useEffect(() => {
    window.location.replace("/site/index.html");
  }, []);
  return (
    <div style={{ minHeight: "100vh", display: "grid", placeItems: "center", fontFamily: "system-ui", color: "#6c5f53", background: "#faf5ec" }}>
      <p>Trattoria Bella Vita wird geladen…</p>
    </div>
  );
}
