const stats = [
    { id: 1, name: 'Total Spotify Streaming', value: 'Over 26 Billion' },
    { id: 2, name: '38 Nomination', value: '14 Grammy Awards' },
    { id: 3, name: 'On Instagram', value: '58 Million Followers' },
  ]
  
  export default function Stats() {
    return (
      <div className="bg-linear-to-r from-slate-300 to-slate-900 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4">
                <dt className="text-base/7 text-stone-50">{stat.name}</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-stone-50 sm:text-5xl">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    )
  }