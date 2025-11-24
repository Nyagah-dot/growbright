import React, { useState } from 'react'

export default function App() {
  const [childName, setChildName] = useState('')
  const [age, setAge] = useState('')
  const [superpower, setSuperpower] = useState('')
  const [photo, setPhoto] = useState<string | null>(null)

  const handlePhoto = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => setPhoto(reader.result as string)
      reader.readAsDataURL(file)
    }
  }

  return (
    <div className="min-h-screen bg-[#FAF9F6] flex flex-col items-center justify-center px-6 py-12">
      <div className="text-center mb-10">
        <h1 className="text-5xl font-black tracking-tight text-[#10B981]">GrowBright</h1>
        <p className="text-[#78716C] mt-2 text-lg font-medium">
          Made with love for every child who learns differently
        </p>
      </div>

      <label htmlFor="photo" className="cursor-pointer mb-10">
        {photo ? (
          <img src={photo} alt="Child" className="w-32 h-32 rounded-full object-cover ring-8 ring-white shadow-2xl" />
        ) : (
          <div className="w-32 h-32 rounded-full bg-gradient-to-br from-[#C4B5FD] to-[#93C5FD] flex items-center justify-center shadow-2xl">
            <span className="text-5xl text-white font-bold">+</span>
          </div>
        )}
      </label>
      <input id="photo" type="file" accept="image/*" onChange={handlePhoto} className="hidden" />

      <div className="w-full max-w-sm space-y-5">
        <input type="text" placeholder="Child's name" value={childName} onChange={e => setChildName(e.target.value)}
          className="w-full px-6 py-5 rounded-2xl bg-white border-2 border-[#E5E7EB] text-lg focus:border-[#10B981] focus:ring-4 focus:ring-[#10B981]/20 outline-none transition-all" />
        <input type="number" placeholder="Age" value={age} onChange={e => setAge(e.target.value)}
          className="w-full px-6 py-5 rounded-2xl bg-white border-2 border-[#E5E7EB] text-lg focus:border-[#10B981] focus:ring-4 focus:ring-[#10B981]/20 outline-none transition-all" />
        <input type="text" placeholder="My Superpower (e.g. yellow bubble gum)" value={superpower} onChange={e => setSuperpower(e.target.value)}
          className="w-full px-6 py-5 rounded-2xl bg-white border-2 border-[#E5E7EB] text-lg focus:border-[#10B981] focus:ring-4 focus:ring-[#10B981]/20 outline-none transition-all" />

        <button className="w-full py-5 rounded-2xl bg-gradient-to-r from-[#10B981] to-[#34D399] text-white font-bold text-xl shadow-lg hover:shadow-xl active:scale-98 transform transition-all duration-200">
          Let’s Grow Together
        </button>
      </div>

      <p className="text-[#78716C] text-sm mt-10">100% free forever • No ads • Built for our kids</p>
    </div>
  )
}
