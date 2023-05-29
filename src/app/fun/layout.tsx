export default function FunLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex">
      <div className="w-48">
        fun left part
      </div>
      <div>
        {children}
      </div>
    </div>
  )
}
