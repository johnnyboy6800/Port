export default function Especialidades() {
  const especialidades = [
    {
      titulo: "Desenvolvimento Web",
      descricao: "Criação de interfaces modernas com React e integração com APIs.",
      emoji: "💻",
      cor: "text-indigo-500"
    },
    {
      titulo: "Back-end com Node.js",
      descricao: "Desenvolvimento de APIs RESTful seguras e eficientes com Express.",
      emoji: "🛠️",
      cor: "text-green-500"
    },
    {
      titulo: "Banco de Dados",
      descricao: "Modelagem e gerenciamento de dados com MySQL.",
      emoji: "🗄️",
      cor: "text-yellow-500"
    },
    {
      titulo: "Autenticação JWT",
      descricao: "Implementação de login seguro com tokens e criptografia de senhas.",
      emoji: "🔐",
      cor: "text-pink-500"
    },
    {
      titulo: "Versionamento com Git",
      descricao: "Controle de versões com Git e GitHub, seguindo boas práticas.",
      emoji: "🌱",
      cor: "text-blue-500"
    },
    {
      titulo: "Design Responsivo",
      descricao: "Páginas que se adaptam perfeitamente a diferentes dispositivos.",
      emoji: "📱",
      cor: "text-purple-500"
    },
    {
    titulo: "Java & Spring Boot",
    descricao: "Desenvolvimento de aplicações web robustas com Java e o framework Spring Boot.",
    emoji: "☕",
    cor: "text-orange-500"
    },
  ];

  return (
    <section className=" py-16 px-4 md:px-20 bg-blue-200 rounded-lg m-4 mx-4 my-4 ">
      <h2 className="text-4xl font-bold text-center mb-12 text-black">
        Minhas Especialidades
      </h2>

      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {especialidades.map((item, index) => (
          <div
            key={index}
            className="bg-blue-500 rounded-2xl shadow-md p-6 hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
          >
            <div className={`text-5xl mb-4 text-center ${item.cor}`}>
              {item.emoji}
            </div>
            <h3 className="text-xl font-semibold text-center text-black">
              {item.titulo}
            </h3>
            <p className="mt-2 text-center  text-black font-light font-mono">
              {item.descricao}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
