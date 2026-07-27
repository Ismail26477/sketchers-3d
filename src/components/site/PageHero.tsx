export function PageHero({
  eyebrow,
  title,
  image,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  image: string;
}) {
  return (
    <section className="relative h-[65vh] w-full overflow-hidden md:h-[75vh]">
      <img src={image} alt="" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/60" />
      <div className="absolute inset-x-0 bottom-0">
        <div className="mx-auto max-w-[1400px] px-6 pb-14 lg:px-12 lg:pb-20">
          {eyebrow && (
            <p className="text-[11px] uppercase tracking-[0.4em] text-white/80">{eyebrow}</p>
          )}
          <h1 className="mt-6 max-w-4xl text-4xl leading-[1.05] text-white md:text-6xl lg:text-7xl">
            {title}
          </h1>
        </div>
      </div>
    </section>
  );
}
