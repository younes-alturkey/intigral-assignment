export default function AppLoading() {
  return (
    <section className="w-screen h-screen fixed top-0 bg-black bg-opacity-30 z-50 flex flex-col justify-center items-center">
      <div className="animate-pulse flex flex-col justify-center items-center">
        <img
          src="/images/pepe.png"
          alt="Intigral logo"
          width={256}
          height={256}
        />
        <p className="text-white font-bold">
          Good things happen to those who wait.
        </p>
      </div>
    </section>
  )
}
