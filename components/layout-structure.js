export default function LayoutStructure({children, background, title}) {
  return (
    <div className={`w-full flex flex-col justify-center items-center p-5 lg:p-10 text-md lg:text-xl bg-gradient-to-b from-slate-200 to-blue-300`}>
      <h2 className="text-2xl font-bold text-center mb-6 underline decoration-4 decoration-blue-400">Let's hang around</h2>
      <div>{children}</div>
    </div>
  )
}