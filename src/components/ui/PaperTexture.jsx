function PaperTexture() {
  return (
    <>
      {/* Paper Grain */}
      <div
        className="fixed inset-0 pointer-events-none z-0 opacity-[0.05]"
        style={{
          backgroundImage: `
            radial-gradient(circle at 20% 20%, rgba(0,0,0,.18) 1px, transparent 1px),
            radial-gradient(circle at 80% 30%, rgba(0,0,0,.15) 1px, transparent 1px),
            radial-gradient(circle at 40% 80%, rgba(0,0,0,.12) 1px, transparent 1px)
          `,
          backgroundSize: "120px 120px",
        }}
      />

      {/* Soft paper vignette */}
      <div
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          background:
            "radial-gradient(circle, transparent 55%, rgba(0,0,0,.04) 100%)",
        }}
      />
    </>
  );
}

export default PaperTexture;