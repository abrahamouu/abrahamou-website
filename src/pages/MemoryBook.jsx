import { memoryBookEntries, memoryBookIntro } from "@/data/portfolioContent";

export const MemoryBook = () => {
  return (
    <div className="flex flex-col gap-8 lg:gap-10">
      <section className="page-intro reveal">
        <span className="section-label">Memory Book</span>
        <h1 className="section-title mt-4">{memoryBookIntro.title}</h1>
        <p className="section-copy mt-4 max-w-3xl">
          {memoryBookIntro.summary}
        </p>
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        {memoryBookEntries.map((entry, index) => (
          <article
            key={entry.title}
            className={`surface-card memory-card p-5 sm:p-6 reveal delay-${
              Math.min(index + 1, 5)
            }`}
          >
            {entry.image ? (
              <div className="memory-photo-frame">
                <img
                  src={entry.image}
                  alt={entry.title}
                  className="h-full w-full object-cover object-center"
                />
              </div>
            ) : (
              <div className="memory-placeholder">
                <span className="empty-slot-label">{entry.status}</span>
              </div>
            )}

            <div className="mt-5">
              <span className="section-label">{entry.status}</span>
              <h2 className="card-title mt-4">{entry.title}</h2>
              <p className="card-copy mt-3">{entry.caption}</p>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
};
