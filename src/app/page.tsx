export default function Home() {
  return (
    <main className="bg-slate-950 flex min-h-screen flex-col items-center justify-between p-24">
      
      <div className="flex flex-col items-center justify-center">
        <p className='text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>Encurte seus links loooooongos</p>
        <p className="text-lg font-extralight my-5 text-zinc-300">O encurtajá é o encurtador de links mais rápido e o melhor: sem propagandas.</p>
        <form>
          <input 
            type="text" 
            placeholder="Cole seu link aqui!" 
            className="border-2 border-gray-700 rounded-3xl p-5 w-96 bg-slate-900 text-white font-semibold" 
          />
          <button 
            className="bg-gradient-to-br from-purple-400 to-pink-600 rounded-3xl p-3 w-32 text-white font-semibold ml-2"
          >
            Encurtar já
          </button>
        </form>
        
      </div>
      
    </main>
  )
}
